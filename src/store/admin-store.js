import {makeAutoObservable} from 'mobx';

class AdminStore {

    constructor() {
        makeAutoObservable(this);
    }

    isFetch = false
    adminList = []

    getListAdmin = async () => {
        const adminReq = await fetch('http://localhost:8000/api/profile/').then((r) => {return r.json()})
        this.adminList = adminReq.results
        this.isFetch = true
    }

}

let adminStore = new AdminStore()

export default adminStore;