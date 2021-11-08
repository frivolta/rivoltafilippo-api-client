import {DocumentTextIcon, PencilIcon, TrashIcon} from "@heroicons/react/solid";
import {Link} from "react-router-dom";
import React from "react";
import {Post} from "../../types/post.type";

const tableHeaderFields = ["# Id", "Title", "Last updated", "Is Draft", "Actions"]

interface TableRowProps {
    children: React.ReactChild | string
}

const TableRow = ({children}: TableRowProps) => {
    return <th className="py-4 px-4 font-medium" data-testid="table-row">
        {children}
    </th>
}

interface TableProps {
    posts?: Post[]
    editAction: (id: number) => void;
    deleteAction: (id: number) => void;
    isLoading: boolean
}

export const Table = ({posts, editAction, deleteAction, isLoading}: TableProps) => {
    return (
        <table className="w-full text-left text-primaryDark text-sm rounded-md" data-testid="table">
            <thead className="bg-textBg border-2 border-secondaryLighter rounded-md">
            <tr>
                {tableHeaderFields.map((f, i) => {
                    return (
                        <th key={i + Math.random()} className="py-2 px-4 font-medium">{f}</th>
                    )
                })}

            </tr>
            </thead>
            <tbody className="bg-white border-2 border-secondaryLighter rounded-md">
            {isLoading && <tr>
                <td className="mx-4 my-8 font-bold text-primaryDark">Loading</td>
            </tr>}
            {!isLoading && posts && posts.map((post) => {
                return (
                    <tr key={post.id} data-testid={`post-row-${post.id}`}>
                        <TableRow>{post.id}</TableRow>
                        <TableRow>
                            <div className="flex">
                                <DocumentTextIcon className="h-5 w-5 text-primaryLighter mr-2"/>
                                <Link to={`/posts/${post.id}`}
                                      className="underline hover:no-underline hover:text-primaryLighter">{post.title}</Link>
                            </div>
                        </TableRow>
                        <TableRow>{post.updatedAt.toLocaleString()}</TableRow>
                        <TableRow>{post.isDraft ? "Yes" : "No"}</TableRow>
                        <TableRow>
                            <div className="flex">
                                <PencilIcon
                                    className="h-5 w-5 text-primaryLighter mr-2 hover:text-primary cursor-pointer"
                                    onClick={() => editAction(post.id)}/>
                                <TrashIcon
                                    data-testid="delete-post-action"
                                    className="h-5 w-5 text-primaryLighter mr-2 hover:text-primary cursor-pointer"
                                    onClick={() => deleteAction(post.id)}/>
                            </div>
                        </TableRow>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}