import React from 'react';
import "./Footer.scss";

const Footer = () => {
    return(
        <div className='footer'>
        <div className="top">
            <div className="item">
                <h1>Categories</h1>
                <span>Furniture</span>
                <span>Lighting</span>
                <span>Textiles</span>
                <span>Decorations</span>
                <span>New Arrivals</span>
            </div>
            <div className="item">
                <h1>Links</h1>
                <span>FAQ</span>
                <span>Pages</span>
                <span>Stores</span>
                <span>Compare</span>
                <span>Cookies</span>
                </div>
            <div className="item">
                <h1>About</h1>
                <span>Welcome to HomeDecoDesign, your ultimate destination for premium interior design products that elevate your living spaces. Browse our extensive collection of curated furniture, decor, and accessories, meticulously selected to infuse your home with style, sophistication, and a touch of personal flair. Transform your living spaces into exquisite havens with HomeDecoDesign, where creativity meets comfort, and where every piece tells a story of exceptional craftsmanship and timeless elegance.</span>
            </div>
            <div className="item">
            <h1>Contact</h1>
                <span>Reach out to us easily with our Contact Section, where you can get in touch with our friendly and knowledgeable customer support team for any inquiries, assistance, or feedback, ensuring a seamless shopping experience.</span>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <span className='logo'>HomeDeco</span>
                <span className='copyright'>© Copyright 2023. All Rights Reserved.</span>
            </div>
            <div className="right">
                <img src="/img/payment.png" alt=""/>
            </div>
            
        </div>
        </div>
    )
}

export default Footer