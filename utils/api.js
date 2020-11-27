const API_BASE_URL = 'http://140.143.226.166:8080/ssm_war/';

const search_book_name = API_BASE_URL + 'book/findByName';

const upload_book = API_BASE_URL + 'file/fileUpload';

const insert_book = API_BASE_URL + 'book/addBook';

const find_user = API_BASE_URL + 'book/findUserMessage';

const search_user_publish = API_BASE_URL + 'book/findAllUserBook';

const add_like = API_BASE_URL + 'book/addMyLike';

const find_user_like = API_BASE_URL + 'book/findAllUserLikeBook';


module.exports = {
    search_book_name,
    upload_book,
    insert_book,
    find_user,
    search_user_publish,
    add_like,
    find_user_like
}

