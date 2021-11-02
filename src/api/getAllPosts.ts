import axios from "axios";
import {Post} from "../types/post.type";

interface GetAllPostsApi {
    posts: Post[]
}

export const getAllPosts = async (): Promise<Post[]> => {
    const {data} = await axios.get<GetAllPostsApi>('http://localhost:3000/posts')
    return data.posts
}