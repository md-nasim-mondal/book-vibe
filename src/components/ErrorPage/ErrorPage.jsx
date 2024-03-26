import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1 className="text-5xl">Oops!!!</h1>
            <Link to={'/'} className="btn btn-ghost">Go back to home</Link>
        </div>
    );
};

export default ErrorPage;