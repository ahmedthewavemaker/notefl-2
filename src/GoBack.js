import React from 'react';



export default function GoBack(props) {
    return (
        <div>
            <button onClick={e => props.history.goBack()}>
            Go Back
            </button>
            <p>{props.name} </p>
        </div>


    )



}