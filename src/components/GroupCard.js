import React from 'react';

const GroupCard = ({item}) => {
    return (
        <div className="card w-full" key={item.id} style={{marginTop: '1rem'}}>
            <div className="card-header flex w-full justify-between">
                <p>Сообщество "{item.group_name}"</p>
                <p className="self-end"><b>Лайков</b>: {item.group_likes}</p>

            </div>
            <div className="card-body">
                <p className="card-text break-all">Описание: {item.subscribes}</p>
            </div>
        </div>
    );
};

export default GroupCard;
