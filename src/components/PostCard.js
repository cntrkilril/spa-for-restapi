import React, {useState} from 'react';
import {observer} from "mobx-react";
import postStore from "../store/post-store";
import UpdateIcon from "../icons/UpdateIcon";
import DeleteIcon from "../icons/DeleteIcon";

const PostCard = observer ( ({item}) => {

    const [opinion, setOpinion] = useState('')
    const [state, setState] =useState(true)

    const [title, setTitle] = useState(item.title)
    const [information, setInformation] = useState(item.information)

    const changeLikes = () => {
        item.likes++
        if (opinion === 'dislikes' && item.dislikes !== 0) {
            item.dislikes--
        }
        setOpinion('likes')
        fetchOpinion()
    }

    const changeDislikes = () => {
        if (opinion === 'likes' && item.likes !== 0) {
            item.likes--
        }
        item.dislikes++
        setOpinion('dislikes')
        fetchOpinion()
    }

    const fetchOpinion = () => {
        postStore.updatePost({title: item.title,
            information: item.information,
            likes: item.likes,
            dislikes: item.dislikes,
            author: [1],
        }, item.id)
    }

    const fetchUpdate = () => {
        postStore.updatePost({title: title,
            information: information,
            likes: item.likes,
            dislikes: item.dislikes,
            author: [1],
        }, item.id)
        setState(!state)
    }

    const fetchDelete = () => {
        postStore.deletePost(item.id)
    }

    const update = () => {
        setState(!state)
        setTitle(item.title)
        setInformation(item.information)
    }

    return (

        <div className="card" key={item.id} style={{marginTop: '1rem'}}>
            <div className="card-body">
                <div className="flex justify-between">
                    {
                        state
                        ?    <h5 className="card-title break-all">{item.title}</h5>
                        :    <input className="form-control w-50 font-bold" placeholder={"Название"} id="title"
                                    value={title} onChange={(event) => setTitle(event.target.value)}/>
                    }
                    <div className="flex">
                        <button className="btn btn-warning mr-2" onClick={update}>
                            <UpdateIcon/>
                        </button>
                        <button className="btn btn-warning" disabled={!state} onClick={fetchDelete}>
                            <DeleteIcon/>
                        </button>
                    </div>
                </div>
                {
                    state
                    ? <p className="card-text break-all">{item.information}</p>
                    : <textarea className="mt-3 form-control w-50" style={{maxHeight: '100px'}} placeholder="Тело" id="information"
                    value={information} onChange={(event) => setInformation(event.target.value)}/>
                }
                {
                    state
                    ?
                        <div className="flex justify-end">
                            <button className={`btn btn-success mr-3 ${
                                {
                                    '': '',
                                    'likes': '',
                                    'dislikes': 'opacity-20'
                                }[opinion]
                            }`} disabled={opinion === 'likes'} type="button" onClick={changeLikes}>{item.likes} Нравится</button>
                            <button className={`btn btn-danger ${
                                {
                                    '': '',
                                    'likes': 'opacity-20',
                                    'dislikes': ''
                                }[opinion]
                            }`} disabled={opinion === 'dislikes'} type="button" onClick={changeDislikes}>{item.dislikes} Не нравится</button>
                        </div>
                    :
                        <div className="flex justify-start">
                            <button className="btn w-50 btn-primary mt-3"
                                    disabled={title === '' || information === ''} onClick={() => fetchUpdate()}>Изменить</button>
                        </div>
                }
            </div>
        </div>
    );
})

export default PostCard;
