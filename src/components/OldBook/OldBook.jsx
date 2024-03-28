import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";
import "../../App.css";
import { Link } from "react-router-dom";

const OldBook = ({oldBook}) => {const { bookId, img, tags, bookName, author, category, rating, yearOfPublishing } = oldBook;
    return (
        <Link to={`/oldBook/${bookId}`} className="p-6 rounded-2xl border-solid border border-[#13131326]">
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
                <div className="flex justify-between">
                <p className="text-base font-medium leading-5 text-[#131313CC] ">
                    By: {author}
                </p>
                <p className="text-base font-medium leading-5 text-[#131313CC] ">
                    Publishing Year: {yearOfPublishing}
                </p>
                </div>
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

OldBook.propTypes = {
    oldBook: PropTypes.object,
}

export default OldBook;