import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { getLSStoredBookList, saveLSList } from "../../utility/localStorage";

const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const bookIdInt = parseInt(bookId);
    const book = books.find((book) => book.bookId === bookIdInt);

    const handleReadBtn = () => {
        const toastContent = saveLSList(bookIdInt, 'read-list', 'read-list');
        if(toastContent === 'success'){
            
        toast.success("You have successfully added to Read-Book-List");
        }
        else{
            toast.warn("The book already added to Read-Book-List !!!");
        }
    };
    const handleWishlistBtn = () => {
        const storedBookIds = getLSStoredBookList('read-list');
        const existsRead = storedBookIds.find(Id => Id === bookId);
        if(!existsRead){
            const toastContent = saveLSList(bookIdInt, 'wishlist', 'read-list');
            if(toastContent === 'success'){
                toast.success("You have successfully added to Wishlist");
            }
            else{
                toast.warn("The book already exists in Read-Book-List !!!")
            }
        }
        
    };

    return (
        <div className="flex flex-col md:flex-row gap-12 justify-between mb-16 md:mb-32">
            <div className=" p-5 md:p-20 rounded-2xl bg-[#F3F3F3] w-[40%] md:w-auto mx-auto flex items-center justify-center">
                <img
                    src={book.img}
                    alt="bookImg"
                    className="md:w-[425px] md:h-[564px] mx-auto"
                />
            </div>
            <div>
                <div className="space-y-4 pb-6">
                    <h1 className="text-4xl text-[#131313] font-bold leading-12">
                        {book.bookName}
                    </h1>
                    <p className="text-xl font-medium leading-6 text-[#131313CC] ">
                        By: {book.author}
                    </p>
                </div>
                <hr className="text-[#13131326] border-solid" />
                <div className="py-4 text-xl font-medium leading-6 text-[#131313CC]">
                    {book.category}
                </div>
                <hr className="text-[#13131326] border-solid" />
                <div className="pt-6 pb-12">
                    <p className="text-base font-normal leading-[26px] text-[#131313B3]">
                        <span>Review:</span> {book.review}{" "}
                    </p>
                </div>
                <div className="flex flex-wrap items-center gap-4 pb-8">
                    <p className="text-base font-bold leading-6 text-[#131313]">
                        Tag
                    </p>
                    {book.tags.map((tag, idx) => (
                        <button
                            key={idx}
                            className="rounded-xl border-none bg-[#23BE0A0D] px-4 py-1 text-[#23BE0A]">
                            #{tag}
                        </button>
                    ))}
                </div>
                <hr className="text-[#13131326] border-solid" />
                <div>
                    <div className="flex gap-12 md:gap-16">
                        <p className="text-base leading-7 text-[#131313B3] ">
                            Number of Pages:
                        </p>
                        <p className="text-base leading-6 font-semibold text-[#131313]">
                            {book.totalPages}{" "}
                        </p>
                    </div>
                    <div className="flex gap-24 md:gap-28">
                        <p className="text-base leading-7 text-[#131313B3] ">
                            Publisher:
                        </p>
                        <p className="text-base leading-6 font-semibold text-[#131313]">
                            {book.publisher}{" "}
                        </p>
                    </div>
                    <div className="flex gap-9 md:gap-14">
                        <p className="text-base leading-7 text-[#131313B3] ">
                            Year of Publishing:
                        </p>
                        <p className="text-base leading-6 font-semibold text-[#131313]">
                            {book.yearOfPublishing}{" "}
                        </p>
                    </div>
                    <div className="flex gap-32 md:gap-36">
                        <p className="text-base leading-7 text-[#131313B3] ">
                            Rating:
                        </p>
                        <p className="text-base leading-6 font-semibold text-[#131313]">
                            {book.rating}{" "}
                        </p>
                    </div>
                </div>
                <div className="flex gap-4 pt-8">
                    <button
                        onClick={handleReadBtn}
                        className="px-4 md:px-7 py-2 md:py-4 btn-ghost text-[#131313] border-[#1313134D] text-lg font-semibold border border-solid rounded-lg">
                        Read
                    </button>
                    <button
                        onClick={handleWishlistBtn}
                        className="px-4 md:px-7 py-2 md:py-4 btn-ghost text-[#FFFFFF] bg-[#50B1C9] md:text-lg font-semibold rounded-lg">
                        Wishlist
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;
