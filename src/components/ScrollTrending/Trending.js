import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {trending} from "../../redux/actions";


const Trending = () => {
    const dispatch = useDispatch();
    const trendingState = useSelector(state => state.scrollReducer);
    const [load, setLoad] = useState(true)
    let num = 14;
    useEffect(() => {
            dispatch(trending(num))
    }, [])

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
        return function (){
            document.addEventListener("scroll", scrollHandler)
        }
    }, [])

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100){
            if (num > 200){
                window.location.reload();
            } else {
                setTimeout(() => {
                    num++;
                    dispatch(trending(num))
                }, 2000)
            }

        }
    }

    return (
        <div className="container">
        <div className="d-flex flex-wrap justify-content-center">
            {
                trendingState.dataGiphy.map((item, index) => (
                    <div key={index}>
                        <img src={item.images.downsized.url} className="gif"/>
                    </div>
                ))
            }
        </div>
            <div className="text-center mt-2 text-white">
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trending;