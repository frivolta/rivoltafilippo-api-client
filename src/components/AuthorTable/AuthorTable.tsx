import React from "react";
import {Author} from "../../types/Author.type";
import {DocumentTextIcon, PencilIcon, TrashIcon} from "@heroicons/react/solid";
import {Link} from "react-router-dom";

const tableHeaderFields = ["# Id", "Name", "Picture", "Updated At"]

interface TableRowProps {
    children: React.ReactChild | string
}

const TableRow = ({children}: TableRowProps) => {
    return <th className="py-4 px-4 font-medium" data-testid="table-row">
        {children}
    </th>
}

interface TableProps {
    authors?: Author[]
    isLoading: boolean
}

export const AuthorTable = ({authors, isLoading}: TableProps) => {
    return (
        <table className="w-full text-left text-primaryDark text-sm rounded-md" data-testid="author-table">
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
            {!isLoading && authors && authors.map((author) => {
                return (
                    <tr key={author.id} data-testid={`author-row-${author.id}`}>
                        <TableRow>{author.id}</TableRow>
                        <TableRow>
                            <div className="flex">
                                {author.name}
                            </div>
                        </TableRow>
                        <TableRow>
                            <a href={author.picture} target="_blank"
                               className="underline hover:no-underline hover:text-primaryLighter">{author.picture}</a>
                        </TableRow>
                        <TableRow>{author.updatedAt}</TableRow>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}