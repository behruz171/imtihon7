import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SlBasket } from 'react-icons/sl'
import { AiOutlineHeart } from 'react-icons/ai'
import Badge from '@mui/material/Badge';
import { useParams } from "react-router-dom";

const Savat = () => {
    const qiymat = useSelector((state) => state);
    let mas = JSON.parse(localStorage.getItem('count1'))
    let son1 = localStorage.getItem('son')
    let son2 = localStorage.getItem('son1')
    const dispatch = useDispatch();

    function savat(index) {
        dispatch({ type: "savat", payload: { index: index } });

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
                    <input type="text" className='form-control inp1' placeholder='search' />
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
            <div className='row'>

                {
                    mas.map((item, index) => {
                        if (item.status2 == true) {
                            return (
                                <div className='col-4'>
                                    <div className="card card2 shadow">
                                        <Link to={`/more/${item.id}`}>
                                        <img className='img' src={item.img} alt="" />
                                        </Link>
                                        <h2>{item.name}</h2>
                                        <button onClick={() => savat(index)} className={mas[index].status2 == false ? 'btn btn-success' : 'btn btn-danger'}>
                                            {
                                                mas[index].status2 == false ? "savatga qo'shish" : "savatdan chiqarish"
                                            }
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    );
}

export default Savat;
