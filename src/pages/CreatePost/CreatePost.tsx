import {Layout} from "../../components/Layout/Layout";
import React from "react";
import {ReactQueryDevtools} from 'react-query/devtools';
import {FormGroup, Input} from "../../components/Input/Input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MDEditor from '@uiw/react-md-editor';
import {useCreatePostForm} from "./hooks";
import {Toggle} from "../../components/Toggle/Toggle";


export const CreatePost = () => {
    const {state, actions} = useCreatePostForm()

    const {editField} = actions
    return (
        <Layout>
            <>
                <h1 className="text-h1 font-extralight text-altBlack" data-testid="create-post-title">Create a new
                    post</h1>
                <div className="table mt-8 flex w-full">
                    {/*Post creation component*/}
                    <div className="border-secondaryLight border-2 border-altWhite px-10 py-10">
                        <FormGroup>
                            <Input value={state.title.value} onChange={(ev) => editField("title", ev.target.value)}
                                   placeholder="The best post ever..." type="text" data-testid="post-title-field"
                                   label="Post title"/>
                        </FormGroup>
                        <FormGroup>
                            <Input value={state.slug.value} onChange={(ev) => editField("slug", ev.target.value)}
                                   placeholder="post-slug" type="text" data-testid="post-slug-field"
                                   label="Slug"/>
                        </FormGroup>
                        <FormGroup>
                            <Input value={state.image.value} onChange={(ev) => editField("image", ev.target.value)}
                                   placeholder="https://www..." type="url" data-testid="post-image-field"
                                   label="Main image"/>
                        </FormGroup>
                        <FormGroup inline>
                            <FormGroup half>
                                <label data-testid="date-label" className="text-textLight font-normal text-primary">Published
                                    date</label>
                                <DatePicker selected={state.date.value}
                                            onChange={(date: any) => editField("date", date)}
                                            className="my-4 p-3 w-full text-textLight font-light font-normal rounded-md border border-secondaryLighter focus:border-transparent focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                                            calendarClassName="w-full flex bg-red-500"
                                />
                            </FormGroup>
                            <FormGroup half>
                                <div className="w-full flex justify-center align-middle gap-4 h-full items-center">
                                <label data-testid="date-label" className="text-textLight font-normal text-primary">Uncheck to make it public!</label>
                                <Toggle label="Uncheck to publish!" data-testid="post-isDraft-field"
                                        checked={state.isDraft.value}
                                        onChange={(ev) => editField("isDraft", ev.target.checked)}/>
                                </div>
                            </FormGroup>
                        </FormGroup>
                        <FormGroup>
                            <label data-testid="content-label"
                                   className="text-textLight font-normal text-primary">Content</label>
                            <MDEditor
                                height={800}
                                data-testid="post-content-field"
                                value={state.content.value}
                                onChange={(content) => {
                                    if (content) {
                                        editField("content", content)
                                    }
                                }}
                            />
                        </FormGroup>

                    </div>
                </div>
                <ReactQueryDevtools initialIsOpen/>
            </>
        </Layout>
    )
}