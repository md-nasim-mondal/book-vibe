const getStoredReadBookList = () => {
    const storedReadBookList = localStorage.getItem('read-list');
    if(storedReadBookList){
        return JSON.parse(storedReadBookList);
    }
    return [];
}

const saveReadList = id => {
    const storedReadBooksList = getStoredReadBookList();
    const exists = storedReadBooksList.find(bookId => bookId === id);
    if(!exists){
        storedReadBooksList.push(id);
        localStorage.setItem('read-list', JSON.stringify(storedReadBooksList))
    }
}

export {getStoredReadBookList, saveReadList}