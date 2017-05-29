export function selectBook(book) {
    //selectBook is an actioncreator, it needs to return an action,
    // ann object with a type property.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}