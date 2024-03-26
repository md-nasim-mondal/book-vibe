import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('./books.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    },[])
    return (
        <div className="my-24">
            <h1 className="text-[40px] font-bold leading-[53px] mb-10 text-center text-[#131313]">Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between">
            {
                books.map((book, idx) => <Book key={idx} book={book} ></Book>)
            }
            </div>
        </div>
    );
};

export default Books;