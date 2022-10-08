import ProductApi from "../api/productApi";
import './Home.css';
import { useState, useEffect } from "react";
export default function ProductPage() {
    // function ButtonLoadProduct(){
    //     return (
    //         <div className="loadProduct">
    //             <button onClick={loadProduct}>More</button>
    //         </div>
    //     )
    // }
    const [product, setProduct] = useState([]);
    useEffect(() =>{
        const paramPageNumber = 1
        const paramPageSize = 6
        // const loadProduct = () =>{
        //         paramPageSize+=6
        //         fetchProductList()
        //     }
        let fetchProductList = async() =>{
        try {
            const params = {
                PageNumber: paramPageNumber,
                PageSize: paramPageSize
            }
            const productsResponse = await ProductApi.getMany(params);
            setProduct(productsResponse.data);
            // console.log(productsResponse.data);
        }catch(e){
            console.log(e);
        }
    }
    fetchProductList()
    // loadProduct()
    console.log("product app: "+product);
}, [])   
    return (
        <div className="home-recoment">
            <div className="section-3-sub-2 padding-t60">
                <div className="max-width-1000 section-3-sub-2-flex" >
                    {product.map((item, index) => 
                        <div className="col-30 new-item"key={index}>
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
                                        <h4 className="section-3-sub-2-product">
                                            {item.productName}
                                        </h4>
                                        <h4 className="section-3-sub-2-coin">
                                            ${item.price}
                                        </h4>
                                        <div className="section-3-sub-2-cart">
                                            <a className="add-to-cart-btn" href="#">
                                                add to cart
                                            </a>
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