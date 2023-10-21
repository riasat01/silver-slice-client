import { useState } from "react";
import { useEffect } from "react";
import ReviewCart from "../review-cart/ReviewCart";

const Reviews = () => {
    const [reviews, setReviews] = useState({});
    const { review } = reviews;
    useEffect(() => {
        fetch(`https://silver-slice-server.vercel.app/reviews`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setReviews(data)
            })
            .catch(error => console.log(error));
    }, [])
    return (
        <>
            <h1 className="text-5xl font-bold hover:border-l-8 border-red-500 hover:pl-10 duration-700 mx-4 md:mx-12 lg:mx-24 my-16">Reviews</h1>
            <div className="flex justify-between items-center flex-wrap gap-8 mx-4 md:mx-12 lg:mx-24 mb-24">
                {
                    review?.map((info, i) => <ReviewCart key={i} info={info}></ReviewCart>)
                }
            </div>
        </>
    );
};

export default Reviews;