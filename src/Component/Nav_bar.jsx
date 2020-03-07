import React from "react";
import "./Nav_bar.css"
import {NavLink} from "react-router-dom";

const Nav_bar = () => {
    return (
        <div>
            <div><NavLink className="Nav_bar_button" to="/main_block">ГЛАВНАЯ</NavLink></div>
            <div><NavLink className="Nav_bar_button" to="/product_block">Продукция</NavLink></div>
            <div><NavLink className="Nav_bar_button" to="/company_block">О КОМПАНИИ</NavLink></div>
            <div><NavLink className="Nav_bar_button" to="/stocks_block">АКЦИИ</NavLink></div>
            <div><NavLink className="Nav_bar_button" to="/partners_block">ПАРТНЕРАМ</NavLink></div>
            <div><NavLink className="Nav_bar_button" to="/contacts_block">КОНТАКТЫ</NavLink></div>
            <button className="serch"> ПОИСК</button>
        </div>
    )
};
export default Nav_bar;
