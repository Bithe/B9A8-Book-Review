import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="container mx-auto text-center py-8 space-y-20 ">
        <h1 className="text-4xl font-bold text-center mt-10 text-red-400">404 - Page Not Found</h1>
        <p className="text-lg text-center mt-4 text-red-400 font-extrabold ">The page you are looking for does not exist.</p>
        <Link to='/' className="btn text-xl font-bold bg-[#23BE0A] text-white text-center">Go Back To Home Page</Link>
      </div>
    );
};

export default ErrorPage;