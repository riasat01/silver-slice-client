import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {

    const { _id, photo, name, brand, type, price, description, rating } = product;
    return (
        <div className="card bg-base-100 shadow-xl shadow-slate-700">
            <figure><img className="h-48 w-full" src={photo} alt={`image of ${name} ${type}`} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{type}</div>
                </h2>
                <p>A {type} by {brand}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Rating: {rating}</div>
                    <div className="badge badge-outline">Price: {price}</div>
                </div>
                <section className="flex justify-between items-center">
                    <div className="card-actions">
                        <Link to={`/product-details/${_id}`}><button className="w-full bg-slate-700 bg-opacity-50 hover:bg-opacity-100 hover:bg-gradient-to-br from-orange-400 to-red-700 hover:text-white rounded-xl px-4 py-2 font-semibold">Details</button></Link>
                    </div>
                    <div className="card-actions">
                        <Link to={`/update-product/${_id}`}><button className="w-full bg-slate-700 bg-opacity-50 hover:bg-opacity-100 hover:bg-gradient-to-br from-orange-400 to-red-700 hover:text-white rounded-xl px-4 py-2 font-semibold">Update</button></Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object
}

export default ProductCard;