import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';


const Product = () => {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const idInt = parseInt(productId);

    const product = all_product.find((e)=> e.id=== idInt);
    console.log(product);
    return (
        <div>
           <Breadcrum product={product}></Breadcrum>
           <ProductDisplay product={product}></ProductDisplay>
           <DescriptionBox></DescriptionBox>
           <RelatedProducts></RelatedProducts>
        </div>
    );
};

export default Product;