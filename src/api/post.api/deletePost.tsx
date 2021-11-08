import axios from "axios";
import {DeletePostInput} from "../../types/post.type";
import {useMutation, useQueryClient} from "react-query";


export interface DeletePostApi {
    ok: boolean
}

export const deletePost = async (deletePostInput: DeletePostInput): Promise<boolean> => {
    const {data} = await axios.delete<DeletePostApi>(`${process.env.REACT_APP_API_URL}/posts/${deletePostInput.id}`)
    return data.ok
}

export function useDeletePost() {
    const queryClient = useQueryClient()
    return useMutation('delete', deletePost, {
        onSuccess: () => {
            queryClient.invalidateQueries('posts')
        }
    })
}