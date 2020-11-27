const API_BASE_URL = 'http://140.143.226.166:8080/ssm_war/';

const search_book_name = API_BASE_URL + 'book/findByName';

const upload_book = API_BASE_URL + 'file/fileUpload';

const insert_book = API_BASE_URL + 'book/addBook';

module.exports = {
    search_book_name,
    upload_book,
    insert_book
}

