import React from 'react';
import avatar from '../assets/avatar.png'

const AdminCard = ({item}) => {

    return (
        <div className="card w-1/3 max-w-xs">
            <img src={avatar} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.username}</h5>
                    <p className="card-text">{item.first_name + ' ' + item.last_name}</p>
                    <p className="card-text">{item.bio}</p>
                    <p className="card-text"><b>Город: </b>{item.location}</p>
                </div>
        </div>
    );
};

export default AdminCard;
