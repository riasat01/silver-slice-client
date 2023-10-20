import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import defaultImage from '../../assets/user-33638_1280.png';
import { AiOutlineMenu } from 'react-icons/ai';
import swal from 'sweetalert';
import { UserAuth } from "../../auth-provider/AuthProvider";

const Navbar = () => {
    const { user, logOut, loading, toggleTheme } = useContext(UserAuth);
    const [info, setInfo] = useState({});
    const { photoURLs } = info;
    useEffect(() => {
        fetch('http://localhost:5000/brands/banner')
            .then(res => res.json())
            .then(data => {
                // console.log(data.photoURLs, data.titles);
                setInfo(data);
            })
            .catch(error => console.log(error.message));
    }, [])

    // sign out User
    const handleSignOut = () => {
        logOut()
            .then(() => {
                swal(`${user.displayName} logged out`)
            })
            .catch(error => {
                swal(`Error`, error.message, `error`);
            });
    }
    const handleTheme = () => {
        toggleTheme();
    }
    const navs = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Login
            </NavLink>
        </li>
        {
            user &&
            <>
                <li>
                    <NavLink
                        to="/add-product"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Add Product
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/my-cart"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        My Cart
                    </NavLink>
                </li>
            </>
        }
        <li>
            <button onClick={handleTheme}>Toggle Theme</button>
        </li>
    </>
    return (
        <div className="absolute max-w-screen w-full top-0 text-gray-400 z-50">
            <nav className="flex justify-between items-center max-w-screen-2xl mx-auto mt-4 px-4 md:px-12">
                <details className="md:hidden dropdown dropdown-bottom">
                    <summary className="p-0 btn  bg-transparent border-0"><AiOutlineMenu className="text-2xl"></AiOutlineMenu></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        {navs}
                    </ul>
                </details>
                <section className="flex justify-center items-center">
                    <img className="h-10" src={photoURLs?.cover} alt="" />
                    <h2 className="text-3xl font-bold text-slate-400">SilverSlice</h2>
                </section>
                <ul className="hidden md:flex items-center gap-6">
                    {navs}
                </ul>
                {
                    loading ?
                        <span className="loading loading-infinity loading-lg"></span>
                        :
                        user ?
                            <section className="flex gap-6 items-center">
                                <details className="dropdown dropdown-end">
                                    <summary className="p-0 btn"><img className="h-10 rounded-full" src={user?.photoURL ? user?.photoURL : defaultImage} alt={`image of ${user.displayName}`} /></summary>
                                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                        <li><p>{user.displayName}</p></li>
                                        <li><button onClick={handleSignOut} className="bg-slate-700 bg-opacity-50 hover:bg-opacity-100 hover:bg-gradient-to-br from-orange-400 to-red-700 hover:text-white rounded-xl px-4 py-2 font-semibold">Log Out</button></li>
                                    </ul>
                                </details>
                            </section>
                            :
                            <Link to={`/login`}><button className="bg-slate-700 bg-opacity-50 hover:bg-opacity-100 hover:bg-gradient-to-br from-orange-400 to-red-700 hover:text-white rounded-xl px-4 py-2 font-semibold">Login</button></Link>
                }
            </nav>
        </div>
    );
};

export default Navbar;