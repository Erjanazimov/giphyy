import React from 'react';
import Category from "../category/Category";

const Navbar = () => {
    return (
        <>
        <section className="navbar">
                <div>
                    <h1 className="text-white">GIPHY</h1>
                </div>
                <div className="btnNav">
                    <a href="/">
                    <button className="btn btn-outline-success">
                       Трендовые</button>
                    </a>
                    <a href="/random" className="mx-4">
                    <button  className="btn btn-outline-danger">
                            Рандомные</button>
                    </a>
                </div>
                <div className="btnNav">
                <Category/>
                </div>
        </section>
            <hr/>
            </>
    );
};

export default Navbar;