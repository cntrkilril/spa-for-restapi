import React, {useEffect} from 'react';
import {observer} from "mobx-react";
import groupStore from "../store/group-store";

const GroupPage = observer( () => {

    const fetch = true

    useEffect(() => {
        (async () => {
            await groupStore.getListGroup();
        })();
    }, [fetch]);

    return (
        <div className="groupPage">
            <h2 className="">Список групп</h2>
            <div className="">

            </div>
        </div>
    );
})

export default GroupPage;
