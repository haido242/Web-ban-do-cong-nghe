import { useEffect, useState } from "react";
import ProductApi from "../../api/productApi";

export default function HomeRecoment(){
    const [product, setProduct] = useState([]);
    useEffect(() =>{
        const fetchProductList = async() =>{
            try {
                const productsResponse = await ProductApi.getAll();
                setProduct(productsResponse);
            }catch(e){
                console.log(e);
            }
        }
        fetchProductList();
    }, [])
    return (
        <div className="home-recoment">
            {console.log(product)}
                            <h1>New Items</h1>
            <div className="section-3-sub-2 padding-t60">
                        <div className="max-width-1000 section-3-sub-2-flex" >
                    {product.map((item, index) => 
                        <div className="col-30 "key={index}>
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
        </div>
    );
}