import React from 'react';
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className='news_letter'>
            <h1>Exclusive offer on your email</h1>
            <p>Subscribe our news letter and stay update</p>

            <div>
                <input type="email" name="email" id="email" placeholder='Enter Your Email' />
                <button type="submit">Subscribe</button>
            </div>
            
        </div>
    );
};

export default NewsLetter;