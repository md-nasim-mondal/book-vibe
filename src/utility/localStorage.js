const getStoredReadBookList = (list) => {
    const storedReadBookList = localStorage.getItem(list);
    if(storedReadBookList){
        return JSON.parse(storedReadBookList);
    }
    return [];
}

const saveReadList = (id, list, storedList) => {
    const storedReadBooksList = getStoredReadBookList(storedList);
    const exists = storedReadBooksList.find(bookId => bookId === id);
    if(!exists){
        storedReadBooksList.push(id);
        localStorage.setItem(list, JSON.stringify(storedReadBooksList));
        return('success');
    }
    return('failure')
}

export {getStoredReadBookList, saveReadList}