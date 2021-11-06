import {Layout} from "../../components/Layout/Layout";
import React from "react";
import {Table} from "../../components/Table";
import {useAllPosts} from "../../api/getAllPosts";
import {ReactQueryDevtools} from 'react-query/devtools';
import {useHistory} from "react-router-dom";

export const AllPosts = () => {
    const history = useHistory()
    const {isLoading, data: posts, isFetching} = useAllPosts()

    const editAction = (id: number)=>history.push(`/posts/${id}`)

    return (
        <Layout data-testid="all-posts">
            <>
                <h1 className="text-h1 font-extralight text-altBlack" data-testid="all-posts-title">Your posts</h1>
                <div className="table mt-8 flex w-full">
                    <Table isLoading={isLoading || isFetching} editAction={editAction}
                           deleteAction={() => console.log('delete')}
                           posts={posts}/>
                </div>
                <ReactQueryDevtools initialIsOpen/>
            </>
        </Layout>
    )
}