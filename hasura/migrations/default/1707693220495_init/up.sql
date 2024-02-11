SET check_function_bodies = false;
CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;
COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';
CREATE TABLE public.boards (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    title text NOT NULL,
    "createAt" timestamp with time zone DEFAULT now() NOT NULL
);
CREATE TABLE public.carts (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    title text NOT NULL,
    "order" numeric NOT NULL,
    "createAt" timestamp with time zone DEFAULT now() NOT NULL,
    "columnId" uuid NOT NULL
);
CREATE TABLE public.columns (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    title text NOT NULL,
    "order" numeric NOT NULL,
    "createAt" timestamp with time zone DEFAULT now() NOT NULL,
    "boardId" uuid NOT NULL
);
ALTER TABLE ONLY public.boards
    ADD CONSTRAINT boards_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.columns
    ADD CONSTRAINT columns_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.carts
    ADD CONSTRAINT "carts_columnId_fkey" FOREIGN KEY ("columnId") REFERENCES public.columns(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.columns
    ADD CONSTRAINT "columns_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES public.boards(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
