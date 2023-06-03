export type activity_feed = {
    activity?: string;
    created_at?: string;
    id: number;
};
export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json }
    | Json[];
export type project_content = {
  updated_at?: string;
  username?: string;
  full_name?: string;
  avatar_url?: string;
  website?: string;
  id?: string;
};
export interface Database {
    public: {
        Tables: {
            activity_feed: {
                Row: activity_feed;
                Insert: activity_feed;
                Update: activity_feed;
            };
            profiles: {
                Row: project_content;
                Insert: project_content;
                Update: project_content;
            }
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            [_ in never]: never;
        };
        Enums: {
            [_ in never]: never;
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
}
