import React from 'react';
import {Link, BrowserRouter}  from 'react-router-dom';

class Navigate extends React.Component{
    render(){
        return (
            <header>
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li> <Link to="/contacts">Контакты</Link></li>
                    <li> <Link to="/information">Информация</Link></li>
                </ul>
            </header>
            )

    }
}

export default Navigate;