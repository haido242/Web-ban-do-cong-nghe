import ProductApi from "../api/productApi";
import './Home.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
            const productsResponse = await ProductApi.getAll(params);
            setProduct(productsResponse);
            // console.log(productsResponse.data);
        }catch(e){
            console.log(e);
        }
    }
    fetchProductList()
    // loadProduct()
    console.log("product app: "+product);
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
                                            <button className="add-to-cart-btn" onClick={() => addToCart(item.id)}>
                                                Thêm vào giỏ hàng
                                            </button>
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