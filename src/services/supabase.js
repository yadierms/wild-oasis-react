import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://oufzymkpdobbsymhxwcg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91Znp5bWtwZG9iYnN5bWh4d2NnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc0ODU3MDYsImV4cCI6MjAwMzA2MTcwNn0.j9mEX0gftnq-1wQp_Zz5lIiNhSJHycq-ZFiXiT25K-Q";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
