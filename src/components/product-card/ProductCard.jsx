const ProductCard = ({ product }) => {

    const { photo, name, brand, type, price, rating } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl shadow-slate-700">
            <figure><img className="h-64 w-full" src={photo} alt={`image of ${name} ${type}`} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{type}</div>
                </h2>
                <p>A {type} by {brand}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Rating: {rating}</div>
                    <div className="badge badge-outline">Price: {price}</div>
                </div>
                <section className="flex justify-between items-center">
                    <div className="card-actions">
                        <button className="w-full bg-slate-700 bg-opacity-50 hover:bg-opacity-100 hover:bg-gradient-to-br from-orange-400 to-red-700 hover:text-white rounded-xl px-4 py-2 font-semibold">Details</button>
                    </div>
                    <div className="card-actions">
                        <button className="w-full bg-slate-700 bg-opacity-50 hover:bg-opacity-100 hover:bg-gradient-to-br from-orange-400 to-red-700 hover:text-white rounded-xl px-4 py-2 font-semibold">Update</button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProductCard;