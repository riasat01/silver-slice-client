import swal from "sweetalert";

const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        
        const product = {photo, name, brand, type, price, description, rating};
        fetch(`http://localhost:5000/products/${name}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            swal(`Congratulation`, `Products added successfully`, `success`);
            form.reset();
        })
        .catch(error => console.log(error.message));
    }
    return (
        <div className="hero min-h-screen bg-base-200 mt-16">
            <div className="hero-content flex-col w-full md:w-1/2">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-16">Add Product</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleAddProduct}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input type="text" placeholder="Image URL" name="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <input type="text" placeholder="Brand Name" name="brand" list="brandList" className="input input-bordered" required />
                                <datalist id="brandList">
                                    <option value="Disney Plus" />
                                    <option value="Netflix" />
                                    <option value="Warnar Bros" />
                                    <option value="Sony Pictures" />
                                    <option value="Spotify" />
                                    <option value="HBO MAX" />
                                </datalist>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Type</span>
                                </label>
                                <input type="text" placeholder="Type" name="type" list="typeList" className="input input-bordered" required />
                                <datalist id="typeList">
                                    <option value="Movie" />
                                    <option value="Web Series" />
                                    <option value="Documentary" />
                                    <option value="Drama" />
                                </datalist>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" placeholder="Price" name="price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea className="textarea textarea-bordered" placeholder="Description" name="description" required></textarea>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="text" placeholder="Rating" name="rating" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Add" className="bg-slate-700 bg-opacity-50 hover:bg-opacity-100 hover:bg-gradient-to-br from-orange-400 to-red-700 hover:text-white rounded-xl px-4 py-2 font-semibold" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;