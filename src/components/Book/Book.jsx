import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";
import "../../App.css";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
    const { img, tags, bookName, author, category, rating } = book;
    return (
        <Link
            to={"/bookDetails"}
            className="p-6 rounded-2xl border-solid border border-[#13131326]">
            <div className="h-[230px] mb-6 rounded-2xl bg-[#F3F3F3]">
                <img
                    src={img}
                    alt="bookImg"
                    className="h-[166px] mx-auto pt-9"
                />
            </div>
            <div className="flex gap-x-4 gap-y-2 flex-wrap font-work-sans text-base font-medium leading-5 text-[#23BE0A]">
                {tags.map((tag, idx) => (
                    <button
                        key={idx}
                        className="rounded-xl border-none bg-[#23BE0A0D] px-4 py-1">
                        {tag}
                    </button>
                ))}
            </div>
            <div className="space-y-4 mb-10 mt-4">
                <h1 className="text-2xl text-[#131313] font-bold leading-8">
                    {bookName}
                </h1>
                <p className="text-base font-medium leading-5 text-[#131313CC] ">
                    By: {author}{" "}
                </p>
            </div>
            <div className="flex justify-between font-medium leading-5 text-base text-[#131313CC]">
                <p>{category}</p>

                <p className="flex gap-2 items-center">
                    {rating} <CiStar className="text-2xl" />
                </p>
            </div>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object,
};

export default Book;
