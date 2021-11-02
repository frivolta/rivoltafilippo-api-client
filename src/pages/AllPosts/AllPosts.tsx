import {Layout} from "../../components/Layout/Layout";
import React from "react";
import {Table} from "../../components/Table";
import {useQuery} from "react-query";
import { useAllPosts} from "../../api/getAllPosts";
import {Post} from "../../types/post.type";
import { ReactQueryDevtools } from 'react-query/devtools';

export const AllPosts = () => {

    const {isLoading, data: posts, isFetching, isSuccess} = useAllPosts()


    return (
        <Layout data-testid="all-posts">
            <>
                <h1 className="text-h1 font-extralight text-altBlack" data-testid="all-posts-title">Your posts</h1>
                <div className="table mt-8 flex w-full">
                    <Table isLoading={isLoading || isFetching} editAction={() => console.log('edit')}
                           deleteAction={() => console.log('delete')}
                           posts={posts}/>
                </div>
                <ReactQueryDevtools initialIsOpen />
            </>
        </Layout>
    )
}