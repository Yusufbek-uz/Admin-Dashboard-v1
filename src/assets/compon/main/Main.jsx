import React from "react";
import Table from "../table/Table";

import './main.css'
const close = document.getElementById('close');
const open = document.getElementById('open');


//open bar
function opena() {
    const bar = document.getElementById('bar');
    bar.style = "left: 0px;";
}



//main
export function Main() {
    return (
        <div className="main container">
            <header>
                <button id='open' onClick={opena}><i className="fa-solid fa-bars"></i></button>
                <h1 style={{color: "#5932EA"}}>Hello Admin</h1>
                <div className="search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="search" placeholder='Search' />
                </div>
            </header>
            <main>
            <Table />
                {/* <div className="container">
                    <div className="main-head">
                        <div className="mh-t">
                            <h3>All Customers</h3>
                            <p>Active Members</p>
                        </div>
                        <div className="search">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="search" placeholder='Search' />
                        </div>
                        <select name="sort" id="sort">
                            <option value=""></option>
                        </select>
                    </div>
                </div> */}
            </main>
        </div>
    )
}