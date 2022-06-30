import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react";
import postStore from "../store/post-store";
import PostCard from "../components/PostCard";
import Pagination from "../components/Pagination";
import ErrorBoundary from "../components/ErrorBoundary";

const PostPage = observer( () => {


    useEffect(() => {
        (async () => {
            await postStore.getListPost();
        })();
    }, [postStore]);

    const fetchNext = async (e) => {
        await window.scrollTo(0, 0);
        setTimeout(() => postStore.isFetch = false, 1000)
        setTimeout(() => postStore.getListPost(postStore.next), 1000)
        e.preventDefault()
    }

    const fetchPred = async (e) => {
        window.scrollTo(0  , 0);
        setTimeout(() => postStore.isFetch = false, 1000)
        setTimeout(() => postStore.getListPost(postStore.pred), 1000)

        e.preventDefault()
    }

    return (
        <div className="groupPage">
            <h2 className="">Список постов</h2>
                {
                    postStore.isFetch
                    ?
                            postStore.postList
                                ?
                                <div className="">
                                    <p className="">Постов на странице: {postStore.postList.length}</p>
                                    {
                                        postStore.postList.map((item) =>
                                            <PostCard item={item} key={item.id}/>
                                        )
                                    }
                                    <Pagination object={postStore} fetchNext={fetchNext} fetchPred={fetchPred}/>
                                </div>
                                :
                                <ErrorBoundary/>
                    :
                        <div className="">
                            <p className="">Загрузка</p>
                        </div>
                }
        </div>
    );
})

export default PostPage;
