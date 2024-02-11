alter table "public"."carts" alter column "description" drop not null;
alter table "public"."carts" add column "description" text;
