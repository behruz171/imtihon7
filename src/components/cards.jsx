import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import '../App.css'
import { Link } from "react-router-dom";
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import { SlBasket } from 'react-icons/sl'
import Rating from '@mui/material/Rating';
import Badge from '@mui/material/Badge';
const Cards = () => {
    const [mas, setMas] = useState([]);
    const [val, setVal] = useState('');

    const qiymat = useSelector((state) => state);
    const dispatch = useDispatch();
    let mas1 = JSON.parse(localStorage.getItem('count1'))
    let mas2 = JSON.parse(localStorage.getItem('count2'))
    let son1 = localStorage.getItem('son')
    let son2 = localStorage.getItem('son1')

    // useEffect(() => {
    //     axios
    //       .get("https://api.npoint.io/2a2f92708e1ef812502c")
    //       .then((ress) => {
    //         setMas(ress.data);
    //         // console.log(ress);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   }, []);

    function like(index) {
        dispatch({ type: "like", payload: { index: index } });
    }
    function Run(val) {
        setVal(val)
        let nimadir = mas2.filter(item => {
            return item.name.toLowerCase().includes(val.toLowerCase())
        })
        dispatch({ type: "search", payload: { name: nimadir, val: val } });
    }
    
    return (
        <div>
            <div className="row my-3">
                <div className="col-3">
                    <Link to='/'>
                        <h1>QPICK</h1>
                    </Link>
                </div>
                <div className="col-5">
                    <input type="text" onInput={(val) => Run(val.target.value)} className='form-control inp1' placeholder='search' />
                </div>
                <div className="col-3">
                    <Link to={`/like`}>
                        <Badge badgeContent={+(son1)} color="primary">
                            <AiOutlineHeart className='like' />
                        </Badge>
                    </Link>
                    <Link to={'/savat'}>
                        <Badge className='mx-4' badgeContent={+(son2)} color="primary">
                            <SlBasket className='like' />
                        </Badge>
                    </Link>
                </div>
            </div>
            <section class="container1">

            </section>
            <div className="row">
                {
                    mas1.map((item, index) => {
                        return (
                            <div className="col-4">
                                <div className="card card2 shadow">
                                    <div className='like1'>
                                        {
                                            mas1[index].status1 == false ?
                                                <AiOutlineHeart onClick={() => like(index)} className='like' />
                                                : <AiFillHeart className='like' onClick={() => like(index)} />
                                        }
                                    </div>
                                    <div>
                                        <Link to={`/more/${item.id}`}>
                                            <img className='img' src={item.img} alt="" />
                                        </Link>
                                    </div>
                                    <h2>{item.name}</h2>
                                    <Link to={`/more/${item.id}`}>
                                        <button className='btn btn-success'>Learn more</button>
                                    </Link>
                                    <p className='d-flex justify-content-center align-items-center'><h3>{item.grade}</h3><Rating name="half-rating-read" defaultValue={item.grade} precision={0.5} readOnly /></p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
}

export default Cards;
