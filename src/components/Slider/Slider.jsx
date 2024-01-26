import React from "react";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import "./Slider.scss";
import { useState } from "react";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data=[

        "https://images.pexels.com/photos/3554241/pexels-photo-3554241.jpeg",
        "https://images.pexels.com/photos/1534924/pexels-photo-1534924.jpeg",
        "https://images.pexels.com/photos/8960464/pexels-photo-8960464.jpeg",
    ];


    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
      };
      const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
      };

    return (
        <div className="slider">
            <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestIcon/>
                </div>

                <div className="icon" onClick={nextSlide}>
                    <EastIcon/>
                    </div>
            </div>
        </div>
    )
}

export default Slider;