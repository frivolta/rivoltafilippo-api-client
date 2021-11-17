import {Layout} from "../../components/Layout/Layout";
import React from "react";
import {Table} from "../../components/Table";
import {useAllPosts} from "../../api/post.api/getAllPosts";
import {ReactQueryDevtools} from 'react-query/devtools';
import {useHistory} from "react-router-dom";
import {useDeletePost} from "../../api/post.api/deletePost";
import {AuthorTable} from "../../components/AuthorTable/AuthorTable";
import {useAllAuthors} from "../../api/author.api/getAllAuthors";

export const AllPosts = () => {
    const history = useHistory()
    const {mutate} = useDeletePost()
    const {isLoading, data: posts, isFetching} = useAllPosts()

    const {isLoading: isLoadingAuthors, data: authors, isFetching: isFetchingAuthors} = useAllAuthors()

    const editAction = (id: number) => history.push(`/posts/${id}`)
    const deleteAction = (id: number) => mutate({id})

    return (
        <Layout data-testid="all-posts">
            <>
                <h1 className="text-h1 font-extralight text-altBlack" data-testid="all-posts-title">Your posts</h1>
                <div className="table mt-8 flex w-full">
                    <Table isLoading={isLoading || isFetching} editAction={editAction}
                           deleteAction={deleteAction}
                           posts={posts}/>
                </div>
                <div className="table mt-8 flex w-full">
                    <AuthorTable isLoading={isLoadingAuthors || isFetchingAuthors} authors={authors}/>
                </div>
                <ReactQueryDevtools initialIsOpen/>
            </>
        </Layout>
    )
}