import React from 'react';

const GroupFilter = () => {
    return (
        <div>
            <h2 className="">Фильтры и сортировка</h2>
            <div className="">
                <a type="button" className="underline decoration-solid">Сортировать по количеству лайков</a>
                <a type="button" className="underline decoration-solid">Сортировать по алфавиту</a>
                <p className="font-bold mt-3">Фильтры</p>
                <button type="button" className="btn bg-slate-300">Показать, где лайков > 10</button>
                <button type="button" className="btn bg-slate-300">Показать, где лайков > 10</button>
            </div>
        </div>
    );
};

export default GroupFilter;
