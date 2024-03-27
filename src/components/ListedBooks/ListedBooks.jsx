import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getLSStoredBookList } from "../../utility/localStorage";
import ReadBook from "../ReadBook/ReadBook";
import { IoIosArrowDown } from "react-icons/io";
import WishListBook from "../WishListBook/WishListBook";

const ListedBooks = () => {
    const books = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);
    const [wishList, setWishList] = useState([]);
    useEffect(() => {
        const storedBookIds = getLSStoredBookList("read-list");
        if (books.length > 0) {
            const bookReads = books.filter((book) =>
                storedBookIds.includes(book.bookId)
            );
            setReadBooks(bookReads);
        }
    }, [books]);
    useEffect(() => {
        const storedBookIds = getLSStoredBookList("wishlist");
        if (books.length > 0) {
            const newWishList = books.filter((book) =>
                storedBookIds.includes(book.bookId)
            );
            setWishList(newWishList);
        }
    }, [books]);
    const handleSortRating = () => {
        const newReadList = [...readBooks].sort((a, b) =>
            a.rating > b.rating ? -1 : 1
        );
        setReadBooks(newReadList);
        const newWishList = [...wishList].sort((a, b) => 
            a.rating > b.rating ? -1 : 1
        );
        setWishList(newWishList);
    };
    const handleSortNumberOfPages = () => {
        const newReadList = [...readBooks].sort((a, b) =>
            a.totalPages > b.totalPages ? -1 : 1
        );
        setReadBooks(newReadList);
        const newWishList = [...wishList].sort((a, b) => 
            a.totalPages > b.totalPages ? -1 : 1
        );
        setWishList(newWishList);
    };
    const handleSortPublishYear = () => {
        const newReadList = [...readBooks].sort((a, b) =>
            a.yearOfPublishing > b.yearOfPublishing ? -1 : 1
        );
        setReadBooks(newReadList);
        const newWishList = [...wishList].sort((a, b) => 
            a.yearOfPublishing > b.yearOfPublishing ? -1 : 1
        );
        setWishList(newWishList);
    };
    return (
        <div>
            <div className="w-full h-[100px] bg-[#1313130D] flex items-center justify-center rounded-2xl">
                <h1 className="text-3xl font-bold text-[#131313]">Books</h1>
            </div>
            <div className="text-center mt-9">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 mt-8 bg-[#23BE0A] text-[#FFFFFF]">
                        Sort By  <IoIosArrowDown className="text-xl" />
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleSortRating()}>
                            <a>Rating</a>
                        </li>
                        <li onClick={() => handleSortNumberOfPages()}>
                            <a>Number of Pages</a>
                        </li>
                        <li onClick={() => handleSortPublishYear()}>
                            <a>Publisher year</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div role="tablist" className="tabs tabs-lifted">
                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Read Books"
                    checked={true}
                    readOnly
                />
                <div
                    role="tabpanel"
                    className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div className="grid gap-6 mt-8">
                        {readBooks.map((book, idx) => (
                            <ReadBook key={idx} book={book}></ReadBook>
                        ))}
                    </div>
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Wishlist Books"
                />
                <div
                    role="tabpanel"
                    className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div className="grid gap-6 mt-8">
                        {wishList.map((book, idx) => (
                            <WishListBook key={idx} book={book}></WishListBook>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;
