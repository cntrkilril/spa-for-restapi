import {makeAutoObservable} from 'mobx';

class AdminStore {

    constructor() {
        makeAutoObservable(this);
    }

    isFetch = false
    adminList = []

    getListAdmin = async () => {
        const adminReq = await fetch('http://rest-api-framework.std-1366.ist.mospolytech.ru/api/profile/').then((r) => {return r.json()}).catch(err => this.adminList = 0)
        this.adminList = adminReq.results
        setTimeout(() => this.isFetch = true, 500)
    }

}

let adminStore = new AdminStore()

export default adminStore;