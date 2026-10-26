# Backend contract (own server + Postgres)

The site picks this backend when `VITE_API_URL` is set (`src/lib/backend/rest.ts`).
JSON everywhere, auth via `Authorization: Bearer <token>`. Passwords are hashed
on the server (argon2id or bcrypt), tokens are JWT or opaque session ids.

## Student API (used by the site today)

| Method | Path | Body | Response |
|---|---|---|---|
| POST | `/auth/register` | `{email, password}` | `{token, user}` |
| POST | `/auth/login` | `{email, password}` | `{token, user}` |
| GET | `/me` | – | `{id, email, role}` |
| GET | `/progress` | – | progress JSON or `null` |
| PUT | `/progress` | progress JSON | `204` |
| GET | `/access` | – | `{levels: number[]}` levels opened by an admin (`granted`) *(planned)* |
| PUT | `/progress` (exams) | progress JSON incl. `exams` | exam results are part of the progress JSON for now |

Errors: `{ "error": "human readable message" }` with a 4xx status.

## Admin API (planned, role = admin)

| Method | Path | Purpose |
|---|---|---|
| GET | `/admin/users?q=&page=` | list/search students |
| GET | `/admin/users/:id` | profile + progress summary (xp, streak, lessons, cards due) |
| PUT | `/admin/users/:id/password` | admin types a new password for the student (no email, no link); old sessions are revoked |
| PUT | `/admin/users/:id/access` | open or close levels/lessons for one student |
| POST | `/admin/users/:id/reset-progress` | wipe progress (with confirmation) |
| PUT | `/admin/users/:id/role` | student / admin |
| GET/PUT | `/admin/access/defaults` | which levels are open for everyone by default |

Level rules: level 1 is open for everyone; level N+1 opens when the level N exam is passed (>= 80%) or when an admin adds N+1 to the student's `granted` list. The server must re-check this rule (do not trust the client).

Admin screens (React): students table (search, last active, streak, level), student page
(progress per lesson, errors, set a new password, open/close levels), access matrix
(levels × groups), audit log of admin actions.

## Postgres schema (draft)

```sql
create table users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  password_hash text not null,
  role text not null default 'student' check (role in ('student','admin')),
  created_at timestamptz not null default now(),
  last_seen_at timestamptz
);
create table progress (
  user_id uuid primary key references users(id) on delete cascade,
  data jsonb not null,
  updated_at timestamptz not null default now()
);
create table access (
  user_id uuid references users(id) on delete cascade,  -- null = default for everyone
  level int not null,
  opened_at timestamptz not null default now(),
  primary key (user_id, level)
);
create table password_resets (
  token_hash text primary key,
  user_id uuid not null references users(id) on delete cascade,
  expires_at timestamptz not null,
  used_at timestamptz
);
create table audit_log (
  id bigserial primary key,
  admin_id uuid references users(id),
  action text not null,
  target_user uuid,
  details jsonb,
  at timestamptz not null default now()
);
```
