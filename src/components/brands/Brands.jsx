import { useEffect, useState } from "react";
import BrandCard from "../brand-card/BrandCard";

const Brands = () => {

    const [info, setInfo] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/brands')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setInfo(data);
            })
            .catch(error => console.log(error.message));
    }, [])
    return (
        <>
            <h1 className="text-5xl font-bold hover:border-l-8 border-red-500 hover:pl-10 duration-700 mx-4 md:mx-12 lg:mx-24 my-16">Brands</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-12 lg:mx-24 my-16">
                {
                    info.map(item => <BrandCard key={item._id} item={item}></BrandCard>)
                }
            </div>
        </>

    );
};

export default Brands;