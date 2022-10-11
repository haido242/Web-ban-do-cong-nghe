import { useEffect, useState } from "react";
import ProductApi from "../../api/productApi";
import ButtonViewMoreProduct from ".././components/ButtonViewMoreProduct";
import {Routes, Route, Link} from 'react-router-dom';


export default function HomeRecoment(){
    
    const [product, setProduct] = useState([]);
    useEffect(() =>{
        const fetchProductList = async() =>{
            try {
                const params = {
                    PageNumber: 1,
                    PageSize: 3
                }
                const productsResponse = await ProductApi.getMany(params);
                setProduct(productsResponse.data);
            }catch(e){
                console.log(e);
            }
        }
        fetchProductList();
    }, [])
    let cart = [];
    const addToCart = async (id) => {
        let storage = localStorage.getItem('cart');
        if(storage){
            cart = JSON.parse(storage);
        }
        let product = await ProductApi.get(id);
        let item = cart.find(c => c.product.id == id)
            if(item){
                item.quantity++;
            }
            else{
                cart.push({
                    product: product,
                    quantity: 1
                })
            }
        localStorage.setItem('cart', JSON.stringify(cart));

    }
        

    return (
        <div className="home-recoment">
                            <h1>New Items</h1>
            <div className="section-3-sub-2 padding-t60">
                <div className="max-width-1000 section-3-sub-2-flex" >
                    {product.map((item) => 
                        <div className="col-30 new-item"key={item.id}>
                            <div className="mr-l14-r14">
                                <div className="section-3-sub-2-items">
                                    <div className="sale-btn">New!</div>
                                    <img src={item.urlImage}/>
                                    <div className="section-3-sub-2-content">
                                        <div className="star">
                                            <i className='bx bxs-star' ></i>
                                            <i className='bx bxs-star' ></i>
                                            <i className='bx bxs-star' ></i>
                                            <i className='bx bxs-star' ></i>
                                            <i className='bx bxs-star' ></i>
                                        </div>
                                        <Link className="section-3-sub-2-product" to={`/${item.id}`}>
                                            {item.productName}
                                        </Link>
                                        <h4 className="section-3-sub-2-coin">
                                            ${item.price}
                                        </h4>
                                        <button className="add-to-cart-btn" onClick={() => addToCart(item.id)}> add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                </div>
                </div>
            <ButtonViewMoreProduct/>
            <div className="temp"></div>
        </div>
    );
}