import './Detail.css';

export default function DetailProduct(props){
    return (
        <div className="Detail">
            <div className="temp"/>
            <div className="section-1-2">
                <div className="section-1 col-42">
                    <img src="/assets/img/section-4/6-540x540.jpg" alt=""/>
                </div>
                <div className="section-2 col-58 padding-l40-r40">
                    <div className="section-2-product-name">
                        <h2>Xiaomi Mi Mix 2</h2>
                    </div>
                    <div className="star-4 padding-t14-b14">
                        <i className='bx bxs-star' ></i>
                        <i className='bx bxs-star' ></i>
                        <i className='bx bxs-star' ></i>
                        <i className='bx bxs-star' ></i>
                        <i className='bx bxs-star' ></i>
                    </div>
                    <div className="section-2-price">
                        <h3>$55.00</h3>
                    </div>
                    <div className="section-2-description">
                        <p>
                            Xiaomi Mi MIX 2 mobile was launched in September 
                            2017. The phone comes with a 5.99-inch touchscreen display 
                            with a resolution of 1080x2160 pixels at a pixel density of 
                            403 pixels per inch (ppi). Xiaomi Mi MIX 2 is powered by an 
                            octa-core Qualcomm Snapdragon 835 processor. It comes with 
                            6GB of RAM. The Xiaomi Mi MIX 2 runs Android and is powered 
                            by a 3400mAh non-removable battery.
                            <br/>
                            As far as the cameras are concerned, 
                            the Xiaomi Mi MIX 2 on the rear packs 12-megapixel 
                            camera. It sports a 5-megapixel camera on the front 
                            for selfies.
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
    )
}