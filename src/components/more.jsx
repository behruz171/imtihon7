import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { Link } from "react-router-dom";
import { SlBasket } from 'react-icons/sl'
import { AiOutlineHeart } from 'react-icons/ai'
import Badge from '@mui/material/Badge';
import '../App.css'


const labels = {
    0.5: '0.5',
    1: '1',
    1.5: '1.5',
    2: '2',
    2.5: '2.5',
    3: '3',
    3.5: '3.5',
    4: '4',
    4.5: '4.5',
    5: '5',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const More = () => {
    let mas1 = JSON.parse(localStorage.getItem('count1'))
    let son1 = localStorage.getItem('son')
    let son2 = localStorage.getItem('son1')
    const params = useParams();
    const [index, setIndex] = useState(0);
    const [value, setValue] = React.useState(mas1[params.id - 1].grade);
    const [hover, setHover] = React.useState(-1);

    const qiymat = useSelector((state) => state);
    const dispatch = useDispatch();

    function rasm() {
        const img1 = document.querySelector('.rasm1')
        const img2 = document.querySelector('.rasm2')
        const img3 = document.querySelector('.rasm3')
        let img4 = img1.src
        img1.src = img2.src
        img2.src = img4
    }
    function rasm1() {
        const img1 = document.querySelector('.rasm1')
        const img2 = document.querySelector('.rasm2')
        const img3 = document.querySelector('.rasm3')
        let img4 = img1.src
        img1.src = img3.src
        img3.src = img4
    }
    function savat(index) {
        dispatch({ type: "savat", payload: { index: index } });

    }
    function yulduz(index, item) {
        dispatch({ type: "yulduz", payload: { hover: hover, index: index } });
        setIndex(item)
        console.log();
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
                    <input type="text" className='form-control' placeholder='search' />
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
            <div className='map'>

                {
                    mas1.map((item, index) => {
                        if (item.id == params.id) {
                            return (
                                <div>
                                    <div className='card3 d-flex align-items-center'>
                                        <img className='img1 rasm1' src={item.img} alt="" />
                                        <div className='rasm'>
                                            <img className='img2 rasm2 border border-primary border-2 rounded rounded-6 my-2' onClick={() => rasm()} src={item.imgold} alt="" />
                                            <img className='img2 rasm3 border border-primary border-2 rounded rounded-6 my-2' onClick={() => rasm1()} src={item.imgchet} alt="" />
                                        </div>
                                    </div>
                                    <div className='yulduz'>

                                    <h2>{item.name}</h2>    
                                        <button onClick={() => savat(index)} className={mas1[index].status2 == false ? 'btn btn-success' : 'btn btn-danger'}>
                                            {
                                                mas1[index].status2 == false ? "savatga qo'shish" : "savatdan chiqarish"
                                            }
                                        </button>
                                            
                                        <div >
                                            <Box
                                                sx={{
                                                    width: 200,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Rating
                                                    name="hover-feedback"
                                                    value={value}
                                                    precision={0.5}
                                                    getLabelText={getLabelText}
                                                    onChange={(event, newValue) => {
                                                        setValue(newValue);

                                                    }}
                                                    onClick={() => yulduz(index, item.grade)}
                                                    onChangeActive={(event, newHover) => {
                                                        setHover(newHover);
                                                    }}
                                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                                />
                                                {value !== null && (
                                                    <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                                                )}
                                            </Box>
                                        </div>
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

export default More;
