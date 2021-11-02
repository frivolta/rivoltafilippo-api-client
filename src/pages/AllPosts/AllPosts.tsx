import {Layout} from "../../components/Layout/Layout";
import React from "react";
import {mockedPosts} from "../../mockData/mockedPosts";


export const AllPosts = () => {
    return (
        <Layout data-testid="all-posts">
            <>
                <h1 className="text-h1 font-extralight text-altBlack" data-testid="all-posts-title">Your posts</h1>
                <table className="w-full">
                    <thead>
                    <tr>
                        <th>#Id</th>
                        <th>Last Updated</th>
                        <th>Title</th>
                        <th>Is Draft</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>{mockedPosts[0].id}</th>
                        <th>{mockedPosts[0].updatedAt}</th>
                        <th>{mockedPosts[0].title}</th>
                        <th>{mockedPosts[0].isDraft ? "Yes" : "No"}</th>
                        <th><span>Edit | Delete</span></th>
                    </tr>
                    </tbody>
                </table>
            </>
        </Layout>
    )
}