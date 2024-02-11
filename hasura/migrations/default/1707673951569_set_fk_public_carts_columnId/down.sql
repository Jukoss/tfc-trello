alter table "public"."carts" drop constraint "carts_columnId_fkey",
  add constraint "carts_columnId_fkey"
  foreign key ("columnId")
  references "public"."columns"
  ("id") on update restrict on delete restrict;
