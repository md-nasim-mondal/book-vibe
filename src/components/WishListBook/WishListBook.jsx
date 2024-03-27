import PropTypes from "prop-types";
import { SlLocationPin } from "react-icons/sl";
import { MdPeopleOutline } from "react-icons/md";
import { TbPageBreak } from "react-icons/tb";
import { Link } from "react-router-dom";

const WishListBook = ({book}) => {
    const {bookId, 
        bookName,
        author,
        img,
        tags,
        totalPages,
        category,
        rating,
        publisher,
        yearOfPublishing,
    } = book;
    return (
        <div className="flex flex-col md:flex-row gap-6 border border-solid p-6 border-[#13131326] rounded-2xl">
            <div  className=" p-5 flex items-center justify-center md:py-10 md:px-12 rounded-2xl bg-[#F3F3F3] w-[40%] h-[40%] md:h-auto md:w-auto mx-auto">
                <img className="h-[172px]" src={img} alt="bookImg" />
            </div>
            <div className="flex-1">
                <div className="space-y-5">
                <h1 className="text-2xl font-bold leading-8">{bookName} </h1>
                    <p className="text-base font-medium leading-5 text-[#131313CC]">
                        By: <span>{author}</span>
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                        <p className="text-base font-bold leading-6 text-[#131313]">
                            Tag
                        </p>
                        {tags.map((tag, idx) => (
                            <button
                                key={idx}
                                className="rounded-xl border-none bg-[#23BE0A0D] px-4 py-1 font-medium text-[#23BE0A]">
                                #{tag}
                            </button>
                        ))}
                        <p className="flex items-center text-base font-normal text-[#131313CC]">
                            <SlLocationPin className="text-2xl" /> Year of
                            Publishing: {yearOfPublishing}{" "}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4 text-base font-normal text-[#13131399]">
                        <p className="flex gap-2 items-center"><MdPeopleOutline className="text-2xl" /> Publisher: {publisher} </p>
                        <p className="flex gap-2 items-center"><TbPageBreak className="text-2xl" /> Page {totalPages} </p>
                    </div>
                </div>
                <hr className="text-[#13131326] border-solid my-4" />
                    <div className="flex flex-wrap gap-3">
                        <button className=" btn-ghost px-4 md:px-7 py-2 md:py-4 border-none text-[#328EFF] bg-[#328EFF26] md:text-base rounded-[30px] font-normal">
                            Category: {category}{" "}
                        </button>
                        <button className=" btn-ghost px-4 md:px-7 py-2 md:py-4 border-none text-[#FFAC33] bg-[#FFAC3326] md:text-base rounded-[30px] font-normal">Rating: {rating} </button>
                        <Link to={`/book/${bookId}`} className=" btn-ghost px-4 md:px-7 py-2 md:py-4 border-none text-[#FFFFFF] bg-[#23BE0A] md:text-base rounded-[30px] font-normal">View Details</Link>
                    </div>
            </div>
        </div>
    );
}

WishListBook.propTypes = {
    book: PropTypes.object,
}

export default WishListBook;