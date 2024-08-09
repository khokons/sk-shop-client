import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../../assets/cart_cross_icon.png'

const CartItems = () => {

    const {all_product, cartItems, removeFromCart} = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className="cartitems_format_main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>

            </div>
            <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                console.log(cartItems)
                return <div>
                <div className="cartitems_formate">
                    <img src={e.image} alt="image" className='carticon_product_icon' />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems_quantity'>{cartItems[e.id]}</button>
                    <p>{e.new_price * cartItems[e.id]}</p>
                    <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="image" />
                </div>
                <hr />
            </div>
            }
        })}

        </div>
    );
};

export default CartItems;