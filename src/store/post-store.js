import {makeAutoObservable} from 'mobx';

class PostStore {

    constructor() {
        makeAutoObservable(this);
    }

    isFetch = false
    postList = []

    next = null
    pred = null

    current_url = 'http://rest-api-framework.std-1366.ist.mospolytech.ru/api/post/'

    getListPost = async (url = 'http://rest-api-framework.std-1366.ist.mospolytech.ru/api/post/') => {
        url = url.replace('http://127.0.0.1:8000','http://rest-api-framework.std-1366.ist.mospolytech.ru')
        console.log(url)
        const postReq = await fetch(url).then((r) => {return r.json()}).catch(err => this.postList = 0)
        this.postList = postReq.results
        this.next = postReq.next
        this.pred = postReq.previous
        this.current_url = url
        setTimeout(() => this.isFetch = true, 500)
        console.log(postReq)
    }

    createPost = async (data) => {
        const postReq = await fetch('http://rest-api-framework.std-1366.ist.mospolytech.ru/api/post/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Accept': '*/*'
            },
            body: JSON.stringify(data),
        })
        console.log(postReq)
        await this.getListPost(this.current_url)
    }

    updatePost = async (data, id) => {
        console.log(data)
        const postReq = await fetch(`http://rest-api-framework.std-1366.ist.mospolytech.ru/api/post/${id}/`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                'Accept': '*/*'
            },
            body: JSON.stringify(data),
        })
        await this.getListPost(this.current_url)
    }

    deletePost = async (id) => {
        const postReq = await fetch(`http://rest-api-framework.std-1366.ist.mospolytech.ru/api/post/${id}/`, {
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