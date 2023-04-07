import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import SingleBook from '../SingleBook/SingleBook';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Books = () => {
    const navigation = useNavigation();
    if(navigation.state === 'loading'){
        return <LoadingSpinner></LoadingSpinner>
    };

    const data = useLoaderData();
    const books = data.books;
    console.log(books);

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-5 lg:px-12'>
                {
                    books.map(book=><SingleBook
                    key={book.isbn13}
                    book={book}
                    ></SingleBook>)
                }
            </div>
        </div>
    );
};

export default Books;