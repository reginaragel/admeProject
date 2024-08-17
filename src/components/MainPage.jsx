import React from "react";
// import axios from './axios';
import { assets } from "./assets/image";
import './MainPage.css';
import ImageGrid from "./ImageGrid";
const MainPage=()=>{
    return(
        <div>
            <header className="header">
                <div className="logo">
                    <img src={assets.logo_icon} alt="logo"/>
                </div>
                <div className="title">
                    <span>Website for Images</span>
                </div>
            </header>
            <div>
                <ImageGrid/>
            </div>

        </div>
    )
}
export default MainPage