import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getLSStoredBookList } from "../../utility/localStorage";
import ReadBook from "../ReadBook/ReadBook";
import { IoIosArrowDown } from "react-icons/io";

const ListedBooks = () => {
    const books = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);
    useEffect(() => {
        const storedBookIds = getLSStoredBookList("read-list");
        if (books.length > 0) {
            const bookReads = books.filter((book) =>
                storedBookIds.includes(book.bookId)
            );
            setReadBooks(bookReads);
        }
    }, [books]);
    return (
        <div>
            <div className="w-full h-[100px] bg-[#1313130D] flex items-center justify-center rounded-2xl">
                <h1 className="text-3xl font-bold text-[#131313]">Books</h1>
            </div>
            <div className="text-center mt-9">
                <details className="dropdown">
                    <summary className="m-1 btn mt-8 bg-[#23BE0A] text-[#FFFFFF]">Sort By <IoIosArrowDown className="text-xl" /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li>
                            <a>Rating</a>
                        </li>
                        <li>
                            <a>Number of Pages</a>
                        </li>
                        <li>
                            <a>Publisher year</a>
                        </li>
                    </ul>
                </details>
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
                    Tab content 2
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;
