-- Applied automatically on server start (idempotent).
create extension if not exists pgcrypto;

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  password_hash text not null,
  role text not null default 'student' check (role in ('student', 'admin')),
  token_version int not null default 0,
  created_at timestamptz not null default now(),
  last_seen_at timestamptz
);
create unique index if not exists users_email_key on users (lower(email));

create table if not exists progress (
  user_id uuid primary key references users(id) on delete cascade,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

-- Levels opened by an admin (level 1 is always open, higher levels also open by passing the exam).
create table if not exists access (
  user_id uuid not null references users(id) on delete cascade,
  level int not null check (level >= 2),
  granted_by uuid references users(id) on delete set null,
  opened_at timestamptz not null default now(),
  primary key (user_id, level)
);

create table if not exists audit_log (
  id bigserial primary key,
  admin_id uuid references users(id) on delete set null,
  admin_email text,
  action text not null,
  target_id uuid,
  target_email text,
  details jsonb,
  at timestamptz not null default now()
);
create index if not exists audit_log_at_idx on audit_log (at desc);
