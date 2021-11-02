import axios from "axios";
import {Post} from "../types/post.type";
import {useQuery} from "react-query";

interface GetAllPostsApi {
    posts: Post[]
}

export const fetchAllPosts = async (): Promise<Post[]> => {
    const {data} = await axios.get<GetAllPostsApi>('http://localhost:3000/posts')
    return data.posts
}

export function useAllPosts(){
    return useQuery('posts', fetchAllPosts)
}