import { useEffect, useState } from "react";
import OldBook from "../OldBook/OldBook";


const OldBooks = () => {
    const [oldBooks, setOldBooks] = useState([]);
    useEffect(() => {
        fetch('./oldBooks.json')
        .then(res => res.json())
        .then(data => setOldBooks(data));
    },[])
    return (
        <div className="my-24">
            <h1 className="text-[40px] font-bold leading-[53px] mb-10 text-center text-[#131313]">Old Books Collection Gallery</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between">
            {
                oldBooks.map(book => <OldBook key={book.bookId} oldBook={book} ></OldBook>)
            }
            </div>
        </div>
    );
};

export default OldBooks;