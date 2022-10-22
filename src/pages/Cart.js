import './Cart.css';
import {useState} from 'react';
import ButtonRemoveToCart from './components/ButtonRemoveToCart';
export default function CartPage(){
    let listCart = []
    for (let i = 0; i <JSON.parse(localStorage.getItem('cart')).length; i++) {
        listCart.push(JSON.parse(localStorage.getItem('cart'))[i]);
    }
    
    let sum = 0;
    for (let i = 0; i < listCart.length; i++) {
        sum += listCart[i].product.price * listCart[i].quantity;
    }
    console.log(listCart)

    
    return (
        <div className="cart-page">
            <div className = "temp"/>
            {listCart.map((item, index) =>
          

            <div className = "item-cart" key={index}>
                <ul>
                    <li className = "item-img">
                        <img src={item.product.urlImage} alt="logo"/>
                    </li>
                    <li className = "item-name">
                        <p>{item.product.productName}</p>

                    </li>
                    <li className = "item-price">
                        <p>${item.product.price}</p>
                    </li>
                    <li className = "item-quantity">
                        <input type="number" placeholder="1" min="1" value={item.quantity} />
                    </li>
                    <li className = "item-remove">
                        <ButtonRemoveToCart idProduct={item.index}/>
                    </li>
                    <li >
                        <p>${item.product.price * item.quantity}</p>
                        {/* {`${priceOfCart(item.product.price * item.quantity)}`} */}
                    </li>
                </ul>
             </div>
            )}
            <div className="total-container">
            <div className = "total-price">
                <p>Total: ${sum}</p>
            </div>
            <div className="btn-pay">
                <button>
                    Pay
                </button>
            </div>
            </div>
        </div>
    )
}
