import React from 'react';

const MainPage = () => {
    return (
        <div className="mainPageBlock">
            <h2 className="mainPageBlock__title">
                Добро пожаловать в социальную сеть <b>krlbook</b>
            </h2>
            <h5 className="text-center mt-5">
                Разработчик - Кирилл Шальнов 201-321
            </h5>
            <p className="text-center">
                В разработке использовался React JS, Mobx, Bootstrap и Tailwind CSS
            </p>
        </div>
    );
};

export default MainPage;
