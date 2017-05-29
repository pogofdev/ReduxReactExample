//state argument is not application state, only the state this reducer is responsible for
const initialBook = null;
export default function (state = initialBook, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}