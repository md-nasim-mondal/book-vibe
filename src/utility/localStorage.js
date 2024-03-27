
const getLSStoredBookList = (list) => {
    const storedReadBookList = localStorage.getItem(list);
    if (storedReadBookList) {
        return JSON.parse(storedReadBookList);
    }
    return [];
}

const saveLSList = (id, list, storedList) => {
    const storedReadBooksList = getLSStoredBookList(storedList);
    const wishListBooksList = getLSStoredBookList(list);
    const exists = storedReadBooksList.find((bookId) => bookId === id);
    const wishListExists = wishListBooksList.find((bookId) => bookId === id);
    if (!exists) {
        if (list === "read-list") {
            storedReadBooksList.push(id);
            localStorage.setItem(list, JSON.stringify(storedReadBooksList));
            return "success";
        } else {
            if(!wishListExists){
                wishListBooksList.push(id);
            localStorage.setItem(list, JSON.stringify(wishListBooksList));
            return "success";
            }
            return "failure";
        }
    }
    else if (exists && wishListExists){
    return "looser";
    }
}

export { getLSStoredBookList, saveLSList }
