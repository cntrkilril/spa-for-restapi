import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react";
import postStore from "../store/post-store";
import PostCard from "../components/PostCard";
import Pagination from "../components/Pagination";

const PostPage = observer( () => {


    useEffect(() => {
        (async () => {
            await postStore.getListPost();
        })();
    }, [postStore]);

    const fetchNext = async () => {
        await postStore.getListPost(postStore.next)
        window.scrollTo(0, 0);
    }

    const fetchPred = async () => {
        await postStore.getListPost(postStore.pred)
        window.scrollTo(0  , 0);
    }

    return (
        <div className="groupPage">
            <h2 className="">Список постов</h2>
            {
                postStore.isFetch
                ?
                    <div className="">
                        <p className="">Постов на странице: {postStore.postList.length}</p>
                        {
                            postStore.postList.map((item) =>
                                <PostCard item={item} key={item.id}/>
                            )
                        }
                    </div>
                :
                    <div className="">
                        <p className="">Загрузка</p>
                    </div>
            }
            {
                postStore.isFetch &&
                    <Pagination object={postStore} fetchNext={fetchNext} fetchPred={fetchPred}/>
            }
        </div>
    );
})

export default PostPage;
