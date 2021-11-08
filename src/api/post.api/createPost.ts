import axios from "axios";
import {CreatePostInput, Post} from "../../types/post.type";
import {useMutation, useQuery} from "react-query";


interface CreatePostApiOutput {
    post: Post
}

export const createPost = async (createPostInput: CreatePostInput): Promise<Post> => {
    const {data} = await axios.post<CreatePostApiOutput>(`${process.env.REACT_APP_API_URL}/posts`, createPostInput)
    return data.post
}

export function useCreatePost() {
    return useMutation('create', createPost)
}