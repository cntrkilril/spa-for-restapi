import React, {useState} from 'react';
import {observer} from "mobx-react";
import postStore from "../store/post-store";

const PostForm = observer( () => {

    const [title, setTitle] = useState('')
    const [information, setInformation] = useState('')

    const createPost = () => {
        postStore.createPost({title: title,
                                    information: information,
                                    likes: 0,
                                    dislikes: 0,
                                    author: [1],
        })

        setTitle('')
        setInformation('')
    }

    return (
        <div className="">
            <h2 className="">Опубликовать пост</h2>
            <input className=" mt-3 form-control" placeholder={"Название"} id="title"
                   value={title} onChange={(event) => setTitle(event.target.value)}/>
            <textarea className="mt-3 form-control" style={{maxHeight: '200px'}} placeholder="Тело" id="information"
                      value={information} onChange={(event) => setInformation(event.target.value)}/>
            <button type="button" className="btn btn-primary w-full mt-3"
                    onClick={createPost} disabled={title === '' || information === ''}>Опубликовать</button>
        </div>
    );
})

export default PostForm;
