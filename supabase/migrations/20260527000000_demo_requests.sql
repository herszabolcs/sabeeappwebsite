-- Demo request leads from the marketing website
create table if not exists public.demo_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  property_name text,
  room_count text,
  message text
);

alter table public.demo_requests enable row level security;

-- Allow anonymous visitors to submit demo requests
create policy "Anyone can submit demo requests"
  on public.demo_requests
  for insert
  to anon, authenticated
  with check (true);

-- Only authenticated staff can read submissions (configure via Supabase Auth)
create policy "Authenticated users can read demo requests"
  on public.demo_requests
  for select
  to authenticated
  using (true);

create index demo_requests_created_at_idx on public.demo_requests (created_at desc);
