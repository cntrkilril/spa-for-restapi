import React, {useEffect} from 'react';
import {observer} from "mobx-react";
import adminStore from "../store/admin-store";
import AdminCard from "../components/AdminCard";
import ErrorBoundary from "../components/ErrorBoundary";

const AdminPage = observer( () => {

    useEffect(() => {
        (async () => {
            await adminStore.getListAdmin();
        })();
    }, [adminStore]);

    return (
        <div className="groupPage">
            <h2 className="">Список админов</h2>
            {
                adminStore.isFetch
                    ?
                        adminStore.adminList
                        ?
                            <div className="">
                                <p className="">Админов: {adminStore.adminList.length}</p>
                                <div className="flex gap-4 flex-wrap">
                                    {
                                        adminStore.adminList.map((item) =>
                                            <AdminCard item={item} key={item.id}/>
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

export default AdminPage;
