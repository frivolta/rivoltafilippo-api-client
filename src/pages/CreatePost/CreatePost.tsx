import {Layout} from "../../components/Layout/Layout";
import React from "react";
import {ReactQueryDevtools} from 'react-query/devtools';
import "react-datepicker/dist/react-datepicker.css";
import {usePostForm} from "../../hooks/useForm";
import {useCreatePost} from "../../api/post.api/createPost";
import {PostTable} from "../../components/PostTable/PostTable";

export const CreatePost = () => {
    const {state, actions} = usePostForm()
    const {mutate} = useCreatePost()

    const handleCreatePost = () => {
        const isValid = actions.validateForm()
        if (isValid) {
            mutate({...actions.getPayload()})
        }
    }

    const {editField} = actions
    return (
        <Layout>
            <>
                <h1 className="text-h1 font-extralight text-altBlack" data-testid="create-post-title">Create a new
                    post</h1>
                <div className="table mt-8 flex w-full">
                    <PostTable state={state} editField={editField} postAction={handleCreatePost}/>
                </div>
                <ReactQueryDevtools initialIsOpen/>
            </>
        </Layout>
    )
}