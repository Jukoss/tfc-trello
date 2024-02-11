alter table "public"."columns" alter column "updateAt" drop not null;
alter table "public"."columns" add column "updateAt" timestamptz;
