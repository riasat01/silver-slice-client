import swal from "sweetalert";

const CartItem = ({item, items, setItems}) => {

    const { _id, photo, name, brand, type, price, description, rating } = item;

    const handleRemove = () => {
        fetch(`http://localhost:5000/cart/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount){
                swal(`Congratulation`, `Product deleted from cart successfully`, `success`);
                const remaining = items?.filter(item => item._id !== _id);
                console.log(remaining);
                setItems(remaining);
            }
        })
        .catch(error => console.log(error.message));
    }
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
                    <div className="card-actions w-full">
                        <button onClick={handleRemove} className="w-full bg-slate-700 bg-opacity-50 hover:bg-opacity-100 hover:bg-gradient-to-br from-orange-400 to-red-700 hover:text-white rounded-xl px-4 py-2 font-semibold">Remove from cart</button>
                    </div>
                    
                </section>
            </div>
        </div>
    );
};

export default CartItem;