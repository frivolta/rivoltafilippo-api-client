import axios from "axios";
import {CreatePostInput, Post, UpdatePostInput} from "../../types/post.type";
import {useMutation, useQuery} from "react-query";


type UpdatePostApiOutput = Post

export const updatePost = async (updatePostInput: UpdatePostInput): Promise<Post> => {
    const {data} = await axios.put<UpdatePostApiOutput>(`${process.env.REACT_APP_API_URL}/posts/${updatePostInput.id}`, updatePostInput)
    return data
}

export function useUpdatePost() {
    return useMutation('update', updatePost)
}