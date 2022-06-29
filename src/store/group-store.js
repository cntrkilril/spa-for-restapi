import {makeAutoObservable} from 'mobx';

class GroupStore {

    constructor() {
        makeAutoObservable(this);
    }

    isFetch = false
    groupList = []

    getListGroup = async () => {
        const groupReq = await fetch('http://localhost:8000/api/group/').then((r) => {return r.json()})
        this.groupList = groupReq.results
        this.isFetch = true
    }

}

let groupStore = new GroupStore()

export default groupStore;