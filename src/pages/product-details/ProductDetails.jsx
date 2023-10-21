import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { UserAuth } from "../../auth-provider/AuthProvider";
import swal from "sweetalert";

const ProductDetails = () => {

    const {user} = useContext(UserAuth);

    const product = useLoaderData();
    const { photo, name, brand, type, price, description, rating } = product;

    const handleCart = () => {
        const email = user?.email;
        const data = {...product, email}
        console.log(data);
        fetch(`https://silver-slice-server.vercel.app/cart/${user?.email}`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            swal(`Congratulation`, `Products added to cart successfully`, `success`);
        })
        .catch(error => console.log(error.message));
    }
    
    return (
        <div className="card bg-base-100 shadow-xl shadow-slate-700 mx-4 md:mx-auto w-full md:w-2/3 my-24">
            <figure><img className="h-96 w-full" src={photo} alt={`image of ${name} ${type}`} /></figure>
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
                        <button onClick={handleCart} className="w-full bg-slate-700 bg-opacity-50 hover:bg-opacity-100 hover:bg-gradient-to-br from-orange-400 to-red-700 hover:text-white rounded-xl px-4 py-2 font-semibold">Add to cart</button>
                    </div>
                    
                </section>
            </div>
        </div>
    );
};

export default ProductDetails;