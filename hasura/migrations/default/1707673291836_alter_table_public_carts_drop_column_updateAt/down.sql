alter table "public"."carts" alter column "updateAt" drop not null;
alter table "public"."carts" add column "updateAt" timestamptz;
