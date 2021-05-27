//Importing necessary component libraries.
import React from "react";
import {Button} from "react-bootstrap";
import {increment} from '../redux/actions/increment'
import {useDispatch} from 'react-redux'

//Creating an arrow function that will finally trigger the increment function to increase the count.
const Click = () => {
    const dispatch = useDispatch();
    return(
        <div style={{

            //Placing the "Click Me" button based on the format given.
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height:'100vh'
        }}>
        <Button variant={"primary"} onClick={() => dispatch(increment())}>Click Me</Button> 
        </div> //Creating a Button with the onClick feature.
    )
}

//Exporting it to add in App.js
export default Click;