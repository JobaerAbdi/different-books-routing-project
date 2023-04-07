import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const BookDetails = () => {
    const navigation = useNavigation();
    if(navigation.state === 'loading'){
        return <LoadingSpinner></LoadingSpinner>
    };
    
    const bookData = useLoaderData();
    console.log(bookData);
    const {rating,price,title,image,desc} = bookData;

    return (
        <div className='mt-24  lg:px-12'>
            <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Movie"/></figure>
            <div className="card-body">
                <h2 className="card-title">Name : {title}</h2>
                <h2 className="card-title">Price : {price}</h2>
                <h2 className="card-title">Rating : {rating}</h2>
                <p>{desc}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add To Cart</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BookDetails;