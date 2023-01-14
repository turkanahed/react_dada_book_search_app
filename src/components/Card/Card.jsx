import React from 'react'
import "./style.css"

const Card = ({ img, title, author, setOpen, setDetail, item }) => {
    const handleCancel = () => {
        setDetail(item);
        setOpen(true);
    }
    return (
        <div className="card">
            <div className="card-img">
                <img src={img} alt="" />
            </div>
            <div className="card-title">
                <h5>{title}</h5>
            </div>
            <div className="card-author">
                <h6>{author}</h6>
            </div>
            <button onClick={handleCancel}>Details</button>
        </div>
    )
}

export default Card
