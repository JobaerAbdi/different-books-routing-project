import React from 'react';
import { Link } from 'react-router-dom';

const SingleBook = ({book}) => {
    const {title,subtitle,price,isbn13,image} = book;
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name : {title}</h2>
                    <h2 className="card-title">Price : {price}</h2>
                    <p>{subtitle}</p>
                    <div className="card-actions">
                        <Link to={`/book/${isbn13}`}><button className="btn bg-blue-800">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBook;