import { Post } from "./Post";

export interface Theme {
    subscribers: string[];
    posts: Post[];
    _id: string;
    themeName: string,
    created_at: string;
    updatedAt: string;
     __v: number;
}