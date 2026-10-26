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
| GET | `/access` | – | `{granted: number[], levels: number[]}` |

Errors: `{ "error": "human readable message" }` with a 4xx status.

## Admin API (implemented, role = admin)

| Method | Path | Purpose |
|---|---|---|
| GET | `/admin/users?q=&page=` | list/search students |
| GET | `/admin/users/:id` | profile + progress summary (xp, streak, lessons, cards due) |
| PUT | `/admin/users/:id/password` | admin types a new password for the student (no email, no link); old sessions are revoked |
| PUT | `/admin/users/:id/access` | `{levels:[2,3]}` open levels manually for one student (replaces the list) |
| POST | `/admin/users/:id/reset-progress` | wipe progress (with confirmation) |
| PUT | `/admin/users/:id/role` | student / admin |
| POST | `/admin/users` | create an account (e-mail, password, role) |
| DELETE | `/admin/users/:id?confirm=<email>` | delete an account |
| DELETE | `/admin/users/:id/exams/:examId` | reset one exam result |
| GET | `/admin/stats`, `/admin/meta`, `/admin/audit` | totals, max level, action log |

Level rules: level 1 is open for everyone; level N+1 opens when the level N exam is passed (>= 80%) or when an admin adds N+1 to the student's `granted` list. The server must re-check this rule (do not trust the client).

Known limitation: exam answers are checked in the browser, so a student who edits the saved progress could mark an exam as passed. `granted` (admin-opened levels) is stored separately and cannot be forged. To make exams tamper-proof, move exam grading to the server.

Admin screens (React): students table (search, last active, streak, level), student page
(progress per lesson, errors, set a new password, open/close levels), access matrix
(levels × groups), audit log of admin actions.

## Postgres schema

The real, applied schema lives in `server/schema.sql` (users, progress, access, audit_log). It is applied
automatically when the server starts. Password resets by e-mail/link are intentionally not implemented:
an admin types a new password (`PUT /admin/users/:id/password`).
