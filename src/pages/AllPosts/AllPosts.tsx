import {Layout} from "../../components/Layout/Layout";
import React from "react";
import {Table} from "../../components/Table";
import {useQuery} from "react-query";
import {getAllPosts} from "../../api/getAllPosts";
import {Post} from "../../types/post.type";

export const AllPosts = () => {

    const {isLoading, data: posts, isFetching} = useQuery<Post[], any>('posts', getAllPosts)


    return (
        <Layout data-testid="all-posts">
            <>
                <h1 className="text-h1 font-extralight text-altBlack" data-testid="all-posts-title">Your posts</h1>
                <div className="table mt-8 flex w-full">
                    <Table isLoading={isLoading || isFetching} editAction={() => console.log('edit')}
                           deleteAction={() => console.log('delete')}
                           posts={posts}/>
                </div>
            </>
        </Layout>
    )
}