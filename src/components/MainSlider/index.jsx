import React from "react";
import "./index.css";
import Bg from "../../img/slider1.jpg";
const MainSlider = () => {
    return(
    <div className="container-fluid slider-block">
        <div className="slide">
            <img src={Bg} alt='slider' />
            <h1>Header of the page!</h1>
        </div>
    </div>
)};

export default MainSlider;
