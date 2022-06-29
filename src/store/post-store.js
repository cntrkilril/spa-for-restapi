import {makeAutoObservable} from 'mobx';

class PostStore {

    constructor() {
        makeAutoObservable(this);
    }

    isFetch = false
    postList = []

    sortedPostList = []

    getListPost = async () => {
        const postReq = await fetch('http://localhost:8000/api/post/').then((r) => {return r.json()})
        this.postList = postReq.results
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
        await this.getListPost()
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
        await this.getListPost()
    }

    deletePost = async (id) => {
        const postReq = await fetch(`http://localhost:8000/api/post/${id}/`, {
            method: 'DELETE',
            headers: {
                'Accept': '*/*'
            },
        })
        await this.getListPost()
    }

}

let postStore = new PostStore()

export default postStore;