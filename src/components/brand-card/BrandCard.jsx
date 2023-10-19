import { Link } from "react-router-dom";

const BrandCard = ({item}) => {

    const {name, photoURLs} = item
    // const cardStyle = {base: {
    //     backgroundImage: `url(${photoURLs?.cover}), linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))`,
    //     backgroundBlendMode: 'overlay',
    //     backgroundSize: 'cover',
    //     transition: 'all 0.5s ease-in-out'
    // },
    // hover: {
    //     backgroundSize: '120%',
    //     backgroundImage: `url(${photoURLs?.cover}), linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3))`
    // }}

    const style = {
        backgroundImage: `url(${photoURLs?.cover}), linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))`,
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        transition: 'all 0.5s ease-in-out'
    }

    return (
        <div style={style}
            className="h-[50vh] flex flex-col justify-center items-center bg-slate-800 duration-1000 bg-opacity-0 hover:bg-opacity-100 rounded-lg shadow-xl ">
            <h1 className="w-fit h-1/3 text-2xl ml-8 md:mx-0 md:text-5xl font-extrabold text-transparent font-indie-flower bg-gradient-to-br from-orange-300 to-red-700 bg-clip-text">{name}</h1>
            <Link to={`/${name}`}><button className="bg-slate-700 bg-opacity-50 hover:bg-opacity-100 hover:bg-gradient-to-br from-orange-400 to-red-700 hover:text-white hover:text-xl duration-700 ease-in-out rounded-xl px-4 py-2 font-semibold">Go to page</button></Link>
        </div>
    );
};

export default BrandCard;