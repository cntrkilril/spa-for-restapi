import {makeAutoObservable} from 'mobx';

class PostStore {

    constructor() {
        makeAutoObservable(this);
    }

    isFetch = false
    postList = []

    next = null
    pred = null

    current_url = 'http://localhost:8000/api/post/'

    getListPost = async (url = 'http://localhost:8000/api/post/') => {
        const postReq = await fetch(url).then((r) => {return r.json()})
        this.postList = postReq.results
        this.next = postReq.next
        this.pred = postReq.previous
        this.current_url = url
        this.isFetch = true
        console.log(postReq)
    }

    createPost = async (data) => {
        const postReq = await fetch('http://localhost:8000/api/post/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((r) => {return r.json()})
        await this.getListPost(this.current_url)
    }

    updatePost = async (data, id) => {
        console.log(data)
        const postReq = await fetch(`http://localhost:8000/api/post/${id}/`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                'Accept': '*/*'
            },
            body: JSON.stringify(data),
        }).then((r) => {return r}).then((r) => {return r.json()})
        await this.getListPost(this.current_url)
    }

    deletePost = async (id) => {
        const postReq = await fetch(`http://localhost:8000/api/post/${id}/`, {
            method: 'DELETE',
            headers: {
                'Accept': '*/*'
            },
        })
        await this.getListPost(this.current_url)
    }

}

let postStore = new PostStore()

export default postStore;