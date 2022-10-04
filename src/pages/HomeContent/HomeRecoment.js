import { useEffect, useState } from "react";

export default function HomeRecoment(){
    const [product, setProduct] = useState([]);
    useEffect(() =>{
    fetch('https://localhost:7073/api/Product',
    {method: 'GET',
    }
    )
    .then(res => res.json())
    .then(data => {
        setProduct(data);
    })
    }, [])
    return (
        <div className="home-recoment">
            {console.log(product)}
                            <h1>New</h1>
             <div className="section-3-sub-2 padding-t60">
                        <div className="max-width-1000 section-3-sub-2-flex" >
                    {product.map((item, index) => 
                        <div className="col-30 "key={index}>
                            <div className="mr-l14-r14">
                                <div className="section-3-sub-2-items">
                                    <div className="sale-btn">New!</div>
                                    {/* <img src={item.urlImage}/> */}
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
        </div>
    );
}