import React from 'react';
import './App.css';
import Header from "./Component/Header";
import "./Component/Header.css";
import Nav_bar from "./Component/Nav_bar";
import "./Component/Nav_bar.css";
import Main_block from "./Component/Main_block";
import "./Component/Main_block.css";
import {BrowserRouter, Route} from "react-router-dom";
import Product_block from "./Component/Product_block";
import Company_block from "./Component/Company_block";
import Stocks_block from "./Component/Stocks_block";
import Partners_block from "./Component/Partners_block";
import Contacts_block from "./Component/Contacts_block";

const App = () => {
    return (
        <BrowserRouter>
            <div className={"Parent"}>
                <div className={"Header"}><Header/></div>
                <div className={"Nav_bar"}><Nav_bar/></div>
                <div className={"Main_block"}>
                    <Route path="/main_block" component={Main_block}/>
                    <Route path="/product_block" component={Product_block}/>
                    <Route path="/company_block" component={Company_block} />
                    <Route path="/stocks_block" component={Stocks_block} />
                    <Route path="/partners_block" component={Partners_block} />
                    <Route path="/contacts_block" component={Contacts_block} />
                </div>
            </div>
        </BrowserRouter>
    )
};
export default App;
