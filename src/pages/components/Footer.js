import {Link} from 'react-router-dom'
export default function Footer(){
    return (
        <footer className="footer">
            <div className="footer-content max-width-1000 padding-t90-b90">
                <div className="col-40 footer-items padding-l14-r14">
                    <h3>Product</h3>
                    <p>
                        <Link to="#">Apple Watch Series</Link>
                    </p>
                    <p>
                        <Link to="#">Macbook Pro</Link>
                    </p>
                    <p>
                        <Link to="#">Macbook Air M1</Link>
                    </p>
                    <p>
                        <Link to="#">Xiaomi Mi Mix 2</Link>
                    </p>
                    <p>
                        <Link to="#">OnePlus 5T</Link>
                    </p>
                </div>
                <div className="col-40 footer-items padding-l14-r14">
                    <h3>Customer Service</h3>
                    <p>
                        <Link to="#">Contacts</Link>
                    </p>
                    <p>
                        <Link to="#">Shop</Link>
                    </p>
                    <p>
                        <Link to="#">FAQ</Link>
                    </p>
                    <p>
                        <Link to="#">About Us</Link>
                    </p>
                    <p>
                        <Link to="#">News</Link>
                    </p>
                </div>
                <div className="col-40 footer-items padding-l14-r14">
                    <h3>Socials</h3>
                    <p>
                        <Link to="#">Facebook</Link>
                    </p>
                    <p>
                        <Link to="#">Messenger</Link>
                    </p>
                    <p>
                        <Link to="#">Instagram</Link>
                    </p>
                    <p>
                        <Link to="#">Youtube</Link>
                    </p>
                    <p>
                        <Link to="#">Github</Link>
                    </p>
                </div>
                <div className="col-40 footer-items padding-l14-r14">
                    <h3>Dev Team</h3>
                    <p>
                        <Link to="https://www.facebook.com/thachdaohuu31/">Dao Huu Thach</Link>
                    </p>
                    <p>
                        <Link to="#">Do Trung Hai</Link>
                    </p>
                    <p><Link to="#">Nguyen Thanh Duong</Link></p>
                    
                </div>
            </div>
        </footer>
    
    )
}