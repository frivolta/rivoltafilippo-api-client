import axios from "axios";
import {GetPostInput, Post} from "../types/post.type";
import {useQuery} from "react-query";

interface GetPostApi {
    post: Post
}

export const fetchPost = async (getPostInput:GetPostInput): Promise<Post> => {
    const {data} = await axios.get<GetPostApi>(`http://localhost:3000/posts/${getPostInput.id}`)
    return data.post
}

export function usePost(getPostInput: GetPostInput){
    return useQuery('post', ()=>fetchPost(getPostInput))
}
