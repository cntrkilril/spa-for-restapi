import {makeAutoObservable} from 'mobx';
import URL_PROXY from "./env";

class GroupStore {

    constructor() {
        makeAutoObservable(this);
    }

    isFetch = false
    groupList = []

    getListGroup = async () => {
        const groupReq = await fetch(URL_PROXY + 'http://rest-api-framework.std-1366.ist.mospolytech.ru/api/group/').then((r) => {return r.json()}).catch(err => this.groupList = 0)
        this.groupList = groupReq.results
        console.log(this.groupList)
        setTimeout(() => this.isFetch = true, 500)
    }

    sortByLikes = () => {
        this.groupList.sort((a, b) => a.group_likes <= b.group_likes ? 1 : -1)
    }

    sortByAlph = () => {
        this.groupList.sort((a, b) => a.group_name.toLowerCase() >= b.group_name.toLowerCase() ? 1 : -1)
    }

    filterByLikes = () => {
        this.groupList = this.groupList.filter((item) => item.group_likes > 10)
    }

}

let groupStore = new GroupStore()

export default groupStore;