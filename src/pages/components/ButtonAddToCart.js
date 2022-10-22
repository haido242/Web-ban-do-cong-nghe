import ProductApi from "../../api/productApi";
export default function ButtonAddToCart(props){
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
        <div className="section-3-sub-2-cart">
            <button className="add-to-cart-btn" onClick={() => addToCart(props.idProduct)}>
                Thêm vào giỏ hàng
            </button>
        </div>
    )

}