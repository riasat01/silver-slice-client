import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center space-y-6">
            <h1 className="text-5xl font-extrabold">404</h1>
            <h3 className="text-3xl font-bold">Page Not Found</h3>
            <Link to={`/`}><button className="bg-slate-700 bg-opacity-50 hover:bg-opacity-100 rounded-xl px-4 py-2 text-lg font-semibold">Go to home</button></Link>
        </div>
    );
};

export default ErrorPage;