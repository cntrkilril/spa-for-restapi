import React, {useEffect} from 'react';
import {observer} from "mobx-react";
import groupStore from "../store/group-store";
import adminStore from "../store/admin-store";
import AdminCard from "../components/AdminCard";
import ErrorBoundary from "../components/ErrorBoundary";
import GroupCard from "../components/GroupCard";

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
            {
                groupStore.isFetch
                    ?
                    groupStore.groupList
                        ?
                        <div className="">
                            <p className="">Групп: {groupStore.groupList.length}</p>
                            <div className="flex gap-4 flex-wrap">
                                {
                                    groupStore.groupList.map((item) =>
                                        <GroupCard item={item} key={item.id}/>
                                    )
                                }
                            </div>
                        </div>
                        :
                        <ErrorBoundary/>
                    :
                    <div className="">
                        <p className="">Загрузка</p>
                    </div>
            }
        </div>
    );
})

export default GroupPage;
