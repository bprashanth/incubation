import React from 'react'
import './row.css';

export default function Row({ fetchUrl, rowId, clickedRowId, setClickedRowId }) {
    let l=[1,2,3,4,5];
    return (
        <div class="bounding__box">
            <h1 className="title">This is a row in the test app.</h1>
            { 
                (clickedRowId === rowId) && <div className='row__posts'>
                    {l.map((id) => {
                        return <img 
                        className='row__post' 
                        src={fetchUrl}
                        alt="row posts placeholder"
                        />
                    })}
                </div>

            }
            <button className="row__button" onClick={() => {setClickedRowId(rowId)}}>Click here</button>
        </div>
    )
}
