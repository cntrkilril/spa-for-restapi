import React from 'react';

const Footer = () => {
    return (
        <nav className="col-start-2 col-end-3">
            <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                    <a className="page-link">Предыдущая</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">Следующая</a>
                </li>
            </ul>
        </nav>
    );
};

export default Footer;
