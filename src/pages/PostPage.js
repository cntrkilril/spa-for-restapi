import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react";
import postStore from "../store/post-store";
import PostCard from "../components/PostCard";

const PostPage = observer( () => {


    useEffect(() => {
        (async () => {
            await postStore.getListPost();
        })();
    }, [postStore]);

    return (
        <div className="groupPage">
            <h2 className="">Список постов</h2>
            {
                postStore.isFetch
                ?
                    <div className="">
                        <p className="">Постов: {postStore.postList.length}</p>
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
        </div>
    );
})

export default PostPage;
