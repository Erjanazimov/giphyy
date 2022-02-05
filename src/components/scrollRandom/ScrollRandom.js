import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {counterRandom, random} from "../../redux/actions";
import InfiniteScroll from "react-infinite-scroll-component";

const ScrollRandom = () => {
    const dispatch = useDispatch();
    const randomState = useSelector(state => state.randomReducer.dataGiphyRandom);
    const data = localStorage.getItem("data");
    const parse = JSON.parse(data);
    // useEffect(() => {
    //     document.addEventListener("scroll", scrollRandom);
    //     return function (){
    //         document.addEventListener("scroll", scrollRandom)
    //     }
    // }, [])

    useEffect(() => {
            dispatch(random())
    }, [])

    const RandomFunct = () => {
        dispatch(counterRandom(dispatch))
    }


    return (
        <div className="container">

                <InfiniteScroll
                    dataLength={randomState.length}
                    next={RandomFunct}
                    hasMore={true}
                    loader={<h2 className="text-white text-center">Загрузка...</h2>}
                >
                    <div className="d-flex flex-wrap justify-content-center">
            {
                randomState.length ? randomState.map((item, index) => {
                    return <img src={item.url} className="gif" key={index}/>
                }) : <div className="text-center mt-2 text-white">
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>


                    </div>
                </div>
            }
                    </div>
                </InfiniteScroll>

        </div>
    );
};

export default ScrollRandom;