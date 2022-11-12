import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://fhhdfzewlckqtvgfljvv.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoaGRmemV3bGNrcXR2Z2ZsanZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxOTY2NjcsImV4cCI6MTk4Mzc3MjY2N30.zGFVVj1t14y4Q0Qd1FzMu47hAhHWXmHqVd9EBZCAvy4";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}