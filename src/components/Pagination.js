import {observer} from "mobx-react";

const Pagination  = observer( ({object, fetchNext, fetchPred}) => {

    return (
        <nav className="col-start-2 col-end-3 mt-3">
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <button className="btn btn-outline-primary mr-2" disabled={!object.pred} onClick={fetchPred}>Предыдущая</button>
                </li>
                <li className="page-item">
                    <button className="btn btn-outline-primary ml-2" disabled={!object.next} onClick={fetchNext}>Следующая</button>
                </li>
            </ul>
        </nav>
    );
})

export default Pagination ;
