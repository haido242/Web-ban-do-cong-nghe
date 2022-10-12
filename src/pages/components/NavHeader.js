import {Link} from 'react-router-dom'
export default function NavHeader(){
    return(
        <div className="nav-header">
            <ul>
                <li>
                    <Link to="/">
                        <img src="https://thachdao31.github.io/ketthuccntt-tt-update/assets/img/device-home-1-logo.png" alt="logo"/>
                    </Link>
                </li>
                <li className = "input-form">
                    <input type="text" placeholder="Search for product"/>
                    <button className = "btn-search">
                        <i className='bx bx-search'></i>
                    </button>
                    {/* <i className='bx bx-search' ></i> */}
                </li>
                <li className = "cart-btn">
                    <Link to="/cart">
                        <i className='bx bx-cart' ></i>
                    </Link>
                    <div className="cart-quantity">

                        <p>Your cart</p>
                        <p>${}</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}