const getLSStoredBookList = (list) => {
    const storedReadBookList = localStorage.getItem(list);
    if(storedReadBookList){
        return JSON.parse(storedReadBookList);
    }
    return [];
}

const saveLSList = (id, list, storedList) => {
    const storedReadBooksList = getLSStoredBookList(storedList);
    const exists = storedReadBooksList.find(bookId => bookId === id);
    if(!exists){
        storedReadBooksList.push(id);
        localStorage.setItem(list, JSON.stringify(storedReadBooksList));
        return('success');
    }
    return('failure')
}

export {getLSStoredBookList, saveLSList}