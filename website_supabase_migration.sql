-- Divine Lifting Website - Supabase Integration Migration
-- Run this in Supabase Dashboard > SQL Editor
--
-- This migration:
-- 1. Creates public_news table if it doesn't exist + sets public read access
-- 2. Creates contact_messages table for the public contact form

-- 1. public_news table (for admins to post news from the portal)
CREATE TABLE IF NOT EXISTS public.public_news (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'General',
  excerpt TEXT,
  image_url TEXT,
  published_date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.public_news ENABLE ROW LEVEL SECURITY;

-- Allow everyone (including website visitors) to read news
DROP POLICY IF EXISTS "Public can read public_news" ON public.public_news;
CREATE POLICY "Public can read public_news"
  ON public.public_news FOR SELECT
  USING (true);

-- Only authenticated users (portal admin) can insert/update/delete
DROP POLICY IF EXISTS "Authenticated users can insert public_news" ON public.public_news;
CREATE POLICY "Authenticated users can insert public_news"
  ON public.public_news FOR INSERT
  TO authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "Authenticated users can update public_news" ON public.public_news;
CREATE POLICY "Authenticated users can update public_news"
  ON public.public_news FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Authenticated users can delete public_news" ON public.public_news;
CREATE POLICY "Authenticated users can delete public_news"
  ON public.public_news FOR DELETE
  TO authenticated
  USING (true);

-- 2. Contact messages table for public website form submissions
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  program TEXT,
  message TEXT NOT NULL,
  is_read BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone (including anonymous website visitors) to submit messages
DROP POLICY IF EXISTS "Anyone can insert contact_messages" ON public.contact_messages;
CREATE POLICY "Anyone can insert contact_messages"
  ON public.contact_messages FOR INSERT
  WITH CHECK (true);

-- Admins can view and manage messages via the portal
-- (Note: portal uses custom auth, not Supabase Auth sessions,
--  so policies use public access with the random anon key as security)
DROP POLICY IF EXISTS "Public can read contact_messages" ON public.contact_messages;
CREATE POLICY "Public can read contact_messages"
  ON public.contact_messages FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Public can update contact_messages" ON public.contact_messages;
CREATE POLICY "Public can update contact_messages"
  ON public.contact_messages FOR UPDATE
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Public can delete contact_messages" ON public.contact_messages;
CREATE POLICY "Public can delete contact_messages"
  ON public.contact_messages FOR DELETE
  USING (true);

-- 3. Storage policies for news_images bucket
-- Allow anyone to view images (public bucket)
DROP POLICY IF EXISTS "Public can view news_images" ON storage.objects;
CREATE POLICY "Public can view news_images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'news_images');

-- Allow uploads to news_images (portal uses anon key, so public access)
DROP POLICY IF EXISTS "Public can upload news_images" ON storage.objects;
CREATE POLICY "Public can upload news_images"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'news_images');

-- Allow updates and deletes
DROP POLICY IF EXISTS "Public can update news_images" ON storage.objects;
CREATE POLICY "Public can update news_images"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'news_images')
  WITH CHECK (bucket_id = 'news_images');

DROP POLICY IF EXISTS "Public can delete news_images" ON storage.objects;
CREATE POLICY "Public can delete news_images"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'news_images');
