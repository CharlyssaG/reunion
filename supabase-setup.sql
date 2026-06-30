-- Run this in your Supabase SQL editor before deploying

create table if not exists reunion_votes (
  id           bigint generated always as identity primary key,
  name         text not null,
  destination  text not null check (destination in ('michigan', 'roughcreek', 'alaska', 'caribbean')),
  comment      text,
  created_at   timestamptz default now()
);

-- Allow anyone to read votes (results are public to the family)
create policy "Anyone can read votes"
  on reunion_votes for select
  using (true);

-- Allow anyone to insert a vote (no auth required)
create policy "Anyone can vote"
  on reunion_votes for insert
  with check (true);

-- Enable RLS
alter table reunion_votes enable row level security;
