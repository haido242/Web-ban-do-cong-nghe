import './Detail.css';
import { useState, useEffect } from 'react';
import ProductApi from '../../api/productApi';
import { useParams } from 'react-router-dom';
export default function DetailProduct(props){
    let productId  = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() =>{

    const Product = ProductApi.get(productId.id);
    // console.log();
    // var product;
    Product.then((res) => {
        setProduct(res)
        // console.log(res);
        return product;
    })
}, [])
console.log(product);
    return (
        <div className="Detail">
            <div className="temp"/>
            <div className="section-1-2">
                <div className="section-1 col-42">
                    <img src={product.urlImage} alt=""/>
                </div>
                <div className="section-2 col-58 padding-l40-r40">
                    <div className = "container">
                    <div className="section-2-product-name">
                        <h2>{product.productName}</h2>
                    </div>

                    <div className="star-4 padding-t14-b14">
                        <i className='bx bxs-star' ></i>
                        <i className='bx bxs-star' ></i>
                        <i className='bx bxs-star' ></i>
                        <i className='bx bxs-star' ></i>
                        <i className='bx bxs-star' ></i>
                    </div>
                    <div className="section-2-price">
                        <h3>${product.price}</h3>
                    </div>
                    <div className="section-2-description">
                        <p>
                            {product.description}
                        </p>
                    </div>
                    <div className="section-2-buy-box">
                        <input className="section-2-input" type="number" id="" step="1" 
                        min="1" value="1" size="4" title="Qty" inputmode="numeric" />
                        <div className="section-2-cart">
                            <a href="#">add to cart</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}