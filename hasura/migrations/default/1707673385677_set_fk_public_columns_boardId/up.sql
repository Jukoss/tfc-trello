alter table "public"."columns"
  add constraint "columns_boardId_fkey"
  foreign key ("boardId")
  references "public"."boards"
  ("id") on update restrict on delete restrict;
