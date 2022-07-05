import {makeAutoObservable} from 'mobx';
import URL_PROXY from "./env";

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
        const postReq = await fetch(URL_PROXY + url, {
            headers: {
                'Accept': '*/*',
            },
        }).then((r) => {return r.json()}).catch(err => this.postList = 0)
        this.postList = postReq.results
        this.next = postReq.next
        this.pred = postReq.previous
        this.current_url = url
        setTimeout(() => this.isFetch = true, 250)
        console.log(postReq)
    }

    createPost = async (data) => {
        const postReq = await fetch(URL_PROXY + 'http://rest-api-framework.std-1366.ist.mospolytech.ru/api/post/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Accept': '*/*',
            },
            body: JSON.stringify(data),
        })
        console.log(postReq)
        await this.getListPost(this.current_url)
    }

    updatePost = async (data, id) => {
        console.log(data)
        const postReq = await fetch(URL_PROXY + `http://rest-api-framework.std-1366.ist.mospolytech.ru/api/post/${id}/update/`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Accept': '*/*',
            },
            body: JSON.stringify(data),
        })
        await this.getListPost(this.current_url)
    }

    deletePost = async (id) => {
        const postReq = await fetch(URL_PROXY + `http://rest-api-framework.std-1366.ist.mospolytech.ru/api/post/${id}/delete/`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Accept': '*/*',
            },
        })
        await this.getListPost(this.current_url)
    }

}

let postStore = new PostStore()

export default postStore;