import ProductApi from "../api/productApi";
import './Home.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ButtonAddToCart from "./components/ButtonAddToCart";
export default function ProductPage() {
    
    const [product, setProduct] = useState([]);
    useEffect(() =>{
        const paramPageNumber = 1
        const paramPageSize = 6
        
        let fetchProductList = async() =>{
        try {
            const params = {
                PageNumber: paramPageNumber,
                PageSize: paramPageSize
            }
            const productsResponse = await ProductApi.getAll(params);
            setProduct(productsResponse);
        }catch(e){
            console.log(e);
        }
    }
    fetchProductList()
    }, [])
    
return (
        <div className="home-recoment">
            <div className="section-3-sub-2 padding-t60">
                <div className="max-width-1000 section-3-sub-2-flex" >
                    {product.map((item, index) => 
                        <div className="col-30 new-item"key={index}>
                            <div className="mr-l14-r14">
                                <div className="section-3-sub-2-items">
                                    {/* <div className="sale-btn">New!</div> */}
                                    <img src={item.urlImage}/>
                                    <div className="section-3-sub-2-content">
                                        <div className="star">
                                            <i className='bx bxs-star' ></i>
                                            <i className='bx bxs-star' ></i>
                                            <i className='bx bxs-star' ></i>
                                            <i className='bx bxs-star' ></i>
                                            <i className='bx bxs-star' ></i>
                                        </div>
                                        <Link className="section-3-sub-2-product" to = {`/${item.id}`}>
                                            {item.productName}
                                        </Link>
                                        <h4 className="section-3-sub-2-coin">
                                            {item.price *22}.000 VND
                                        </h4>
                                        <div className="section-3-sub-2-cart">
                                            <ButtonAddToCart idProduct = {item.id}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                </div>
                </div>
            <div className="temp"></div>
            {/* <ButtonLoadProduct/> */}
        </div>
    );
}