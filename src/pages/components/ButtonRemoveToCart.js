
export default function ButtonRemoveToCart(props){
    

        const removeToCart = () => {
            let cart = JSON.parse(localStorage.getItem('cart'));
            // let index = cart.findIndex(props.idProduct);
            // console.log(props.idProduct +" index: "+ index)
            cart.splice(props.idProduct);
            localStorage.setItem('cart', JSON.stringify(cart))
            window.location.reload()
            console.log(props.idProduct)
        }
        return (
            <div className="section-3-sub-2-cart">
            <button className="add-to-cart-btn" onClick={() => removeToCart()}>
                x
            </button>
        </div>
    )

}