import { Link } from "react-router-dom";
import './ButtonViewMoreProduct.css'

export default function ButtonViewMoreProduct() {
    return (
        <div className="button-view-more-product">
            <button className="btn btn-primary">
                <Link to="/Product">Xem thêm</Link>
            </button>
        </div>
    );
}