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

    const fetchNext = async () => {

        const res = checkScroll()

        if (res[0])
        {
            await window.scrollTo(0, 0);
            setTimeout(() => postStore.isFetch = false, res[1])
            setTimeout(() => postStore.getListPost(postStore.next), res[1])
        }
        else {
            postStore.getListPost(postStore.getListPost(postStore.next))
        }

    }

    const fetchPred = async () => {

        const res = checkScroll()

        if (res[0])
        {
            await window.scrollTo(0, 0);
            setTimeout(() => postStore.isFetch = false, res[1])
            setTimeout(() => postStore.getListPost(postStore.pred), res[1])
        }
        else {
            postStore.getListPost(postStore.getListPost(postStore.pred))
        }
    }

    const checkScroll = () => {

        console.log(document.body.offsetHeight, window.innerHeight, document.documentElement.clientHeight)

        if(-[1,]){
            return [document.body.offsetHeight > window.innerHeight, (document.body.offsetHeight - window.innerHeight)];

        } else {
            return [document.body.offsetHeight > document.documentElement.clientHeight, (document.body.offsetHeight - document.documentElement.clientHeight)];
        }
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
