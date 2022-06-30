import React, {useState} from 'react';
import {observer} from "mobx-react";
import groupStore from "../store/group-store";

const GroupFilter = observer ( () => {

    const [sort, setSort] = useState('default')
    const [filter, setFilter] = useState('default')

    const sortByLikes = () => {
        groupStore.sortByLikes()
        setSort('likes')
    }

    const sortDefault = () => {
        groupStore.getListGroup()
        setSort('default')
    }

    const sortAlph = () => {
        groupStore.sortByAlph()
        setSort('alph')
    }

    const filterByLikes = () => {
        groupStore.filterByLikes()
        setFilter('likes')
    }

    const filterDefault = () => {
        groupStore.getListGroup()
        setSort('default')
        setFilter('default')
    }

    return (
        <div>
            <h2 className="">Фильтры и сортировка</h2>
            <div className="">
                {
                    filter === 'default' &&
                    <a type="button" className={`underline decoration-solid ${sort === 'default' ? 'text-teal-500' : ''}`} onClick={sortDefault}>По умолчанию</a>
                }
                <a type="button" className={`underline decoration-solid ${sort === 'likes' ? 'text-teal-500' : ''}`} onClick={sortByLikes}>Сортировать по количеству лайков</a>
                <a type="button" className={`underline decoration-solid ${sort === 'alph' ? 'text-teal-500' : ''}`} onClick={sortAlph}>Сортировать по алфавиту</a>
                <p className="font-bold mt-3">Фильтры</p>
                <button type="button" className="btn bg-slate-300 w-100" disabled={filter === 'likes'} onClick={filterByLikes}>Показать, где лайков > 10</button>
                <button type="button" className="btn bg-slate-300 w-100 mt-3" disabled={filter === 'default'} onClick={filterDefault}>Сбросить</button>
            </div>
        </div>
    );
})

export default GroupFilter;
