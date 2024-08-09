import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../../assets/star_icon.png';
import star_dull_icon from '../../assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

    return (
        <div className='productDisplay'>
            <div className="productDisplay_left">
            <div className="productDisplay_img_list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productDisplay_img">
                <img className='productDisplay_main_img' src={product.image} alt="" />
            </div>
            </div>
            <div className="productDisplay_right">
                <h1>{product.name}</h1>
                <div className="productDisplay_right_star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>122</p>
                </div>

                <div className="productDisplay_right_prices">
                <div className="productDisplay_right_price_old">${product.old_price}</div>
                <div className="productDisplay_right_price_new">${product.new_price}</div>
                </div>
            <div className="productDisplay_right_description">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex deserunt ab consequuntur a velit laboriosam cumque saepe autem? Nulla, quaerat.</p>
            </div>
            <div className="productDisplay_right_size">
                <h1>Select Size</h1>
                <div className="productDisplay_right_sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>

            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productDisplay_right_category'><span>Category: </span>Women, Crop Top</p>
            <p className='productDisplay_right_category'><span>Tags: </span>Modern, Latest</p>


            </div>
        </div>
    );
};

export default ProductDisplay;