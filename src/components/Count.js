import React from "react";
import {useSelector} from 'react-redux';

const Count = () => {
const counter = useSelector(state => state.counter)
const createCard = () => {      
return(
    <div

    //styling the counter box
    style={{
    height:'50%', width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "lightblue", boxShadow: '8px 11px gray', borderRadius: '15px',
    }}
    >
    <p style={{fontFamily:'Times New Roman, Times, serif', fontSize:'80px'}}>{counter}</p>
    </div>
    )}

    return(
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height:'100vh'
        }}>
            {createCard()}
        </div>
    )
}

export default Count;