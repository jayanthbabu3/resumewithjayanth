-- Add resume-relevant fields to profiles table
ALTER TABLE public.profiles
ADD COLUMN email TEXT,
ADD COLUMN phone TEXT,
ADD COLUMN location TEXT,
ADD COLUMN linkedin_url TEXT,
ADD COLUMN github_url TEXT,
ADD COLUMN portfolio_url TEXT,
ADD COLUMN professional_title TEXT,
ADD COLUMN bio TEXT;

-- Update the handle_new_user function to store additional profile data
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = 'public'
AS $$
BEGIN
  INSERT INTO public.profiles (
    id, 
    full_name, 
    email,
    phone,
    location,
    linkedin_url,
    github_url,
    portfolio_url,
    professional_title,
    bio
  )
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'phone', ''),
    COALESCE(NEW.raw_user_meta_data->>'location', ''),
    COALESCE(NEW.raw_user_meta_data->>'linkedin_url', ''),
    COALESCE(NEW.raw_user_meta_data->>'github_url', ''),
    COALESCE(NEW.raw_user_meta_data->>'portfolio_url', ''),
    COALESCE(NEW.raw_user_meta_data->>'professional_title', ''),
    COALESCE(NEW.raw_user_meta_data->>'bio', '')
  );
  RETURN NEW;
END;
$$;