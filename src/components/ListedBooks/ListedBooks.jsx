import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBookList } from "../../utility/localStorage";
import ReadBook from "../ReadBook/ReadBook";

const ListedBooks = () => {
    const books = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);
    useEffect(() => {
        const storedBookIds = getStoredReadBookList('read-list');
        if(books.length > 0){
            const bookReads =  books.filter(book => storedBookIds.includes(book.bookId));
            setReadBooks(bookReads);
        }
    },[books]);
    return (
        <div>
            <div role="tablist" className="tabs tabs-lifted">
                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Read Books"
                    checked = {true}
                    readOnly
                />
                <div
                    role="tabpanel"
                    className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div className="grid gap-6 mt-8">
                        {
                            readBooks.map((book, idx) => <ReadBook key={idx} book={book} ></ReadBook> )
                        }
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
