import { useContext, useEffect, useState } from "react";
import { UserAuth } from "../../auth-provider/AuthProvider";
import CartItem from "../../components/cart-item/CartItem";

const MyCart = () => {

    const [items, setItems] = useState([]);
    const {user} = useContext(UserAuth);

    useEffect(() => {
        fetch(`http://localhost:5000/cart/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setItems(data);
        })
        .catch(error => console.log(error.message));
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-24 mx-4 md:mx-12 lg:mx-24">
            {
                items.map(item => <CartItem key={item._id} item={item} items={items} setItems={setItems}></CartItem>)
            }
        </div>
    );
};

export default MyCart;