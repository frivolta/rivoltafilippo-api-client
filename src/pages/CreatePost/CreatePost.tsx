import {Layout} from "../../components/Layout/Layout";
import React, {useState} from "react";
import {ReactQueryDevtools} from 'react-query/devtools';
import {FormGroup, Input} from "../../components/Input/Input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MDEditor from '@uiw/react-md-editor';


export const CreatePost = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [content, setContent] = useState("")

    return (
        <Layout>
            <>
                <h1 className="text-h1 font-extralight text-altBlack" data-testid="create-post-title">Create a new
                    post</h1>
                <div className="table mt-8 flex w-full">
                    {/*Post creation component*/}
                    <div className="border-secondaryLight border-2 border-altWhite px-10 py-10">
                        <FormGroup>
                            <Input placeholder="The best post ever..." type="text" data-testid="post-title-field"
                                   label="Post title"/>
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder="post-slug" type="text" data-testid="post-slug-field"
                                   label="Slug"/>
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder="https://www..." type="url" data-testid="post-image-field"
                                   label="Main image"/>
                        </FormGroup>
                        <FormGroup>
                                <label data-testid="date-label" className="text-textLight font-normal text-primary">Published
                                    date</label>
                                <DatePicker selected={startDate} onChange={(date: any) => setStartDate(date)}
                                            className="my-4 p-3 w-full text-textLight font-light font-normal rounded-md border border-secondaryLighter focus:border-transparent focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                                            calendarClassName="w-full flex bg-red-500"
                                />

                        </FormGroup>
                        <FormGroup>
                            <label data-testid="content-label" className="text-textLight font-normal text-primary">Content</label>
                            <MDEditor
                                value={content}
                                onChange={(val:any)=>setContent(val)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <div
                                className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                <input type="checkbox" name="toggle" id="toggle"
                                       className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition duration-200 ease-in"/>
                                <label htmlFor="toggle"
                                       className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer transition duration-200 ease-in"></label>
                            </div>
                        </FormGroup>
                    </div>
                </div>
                <ReactQueryDevtools initialIsOpen/>
            </>
        </Layout>
    )
}