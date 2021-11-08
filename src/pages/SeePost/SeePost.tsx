import {Layout} from "../../components/Layout/Layout";
import React from "react";
import {ReactQueryDevtools} from 'react-query/devtools';
import "react-datepicker/dist/react-datepicker.css";
import {useCreatePost} from "../../api/post.api/createPost";
import {PostTable} from "../../components/PostTable/PostTable";
import {Post, UpdatePostInput} from "../../types/post.type";
import {useParams} from "react-router";
import {usePost} from "../../api/post.api/getPost";
import {usePostForm} from "../../hooks/useForm";
import {useUpdatePost} from "../../api/post.api/updatePost";

interface SeePostParams {
    id: string
}

export const SeePost = () => {
    const {id} = useParams<SeePostParams>()
    const {data, isFetching} = usePost({id})
    const {mutate} = useUpdatePost()
    const {state, actions} = usePostForm()

    React.useEffect(() => {
        if (data) {
            actions.initState(data)
        }
    }, [data])

    const handleUpdatePost = () => {
        if (data && actions.validateForm()) {
            const post: UpdatePostInput = {
                ...data,
                ...actions.getPayload(),
            }
            mutate({...post})
        }
    }

    return (
        <Layout>
            <>
                <h1 className="text-h1 font-extralight text-altBlack" data-testid="edit-post-title">Edit Post</h1>
                <div className="table mt-8 flex w-full">
                    {isFetching ? <p className="mx-4 my-8 font-bold text-primaryDark">Loading...</p> :
                        <PostTable state={state} postAction={handleUpdatePost} editField={actions.editField}/>}
                </div>
                <ReactQueryDevtools initialIsOpen/>
            </>
        </Layout>
    )
}