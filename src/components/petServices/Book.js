import React from 'react'
import img6 from '../../images/donate.jpg'

const Book = ({text, img, desc}) => {
    return (
        <div className="col-12 col-md-6 mb-4">
        <div className="card"  style={{padding:"10px"}}>
            <h5>{text}</h5>
            <img className="card-img-top" src={img} alt="not available" />
            <div className="card-body">
            <button type="button" class="btn btn-warning">Book Now</button>
        </div>
    </div></div>
    )
}

export default Book
