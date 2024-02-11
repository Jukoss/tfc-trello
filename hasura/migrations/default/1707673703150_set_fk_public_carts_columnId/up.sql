alter table "public"."carts"
  add constraint "carts_columnId_fkey"
  foreign key ("columnId")
  references "public"."columns"
  ("id") on update restrict on delete restrict;
