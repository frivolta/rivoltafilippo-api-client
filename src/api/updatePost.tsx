import axios from "axios";
import {CreatePostInput, Post, UpdatePostInput} from "../types/post.type";
import {useMutation, useQuery} from "react-query";


type UpdatePostApiOutput = Post

export const updatePost = async (updatePostInput:UpdatePostInput): Promise<Post> => {
    const {data} = await axios.put<UpdatePostApiOutput>(`http://localhost:3000/posts/${updatePostInput.id}`, updatePostInput)
    return data
}

export function useUpdatePost(){
    return useMutation('update', updatePost)
}