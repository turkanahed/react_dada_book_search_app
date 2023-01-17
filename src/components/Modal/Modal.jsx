import React from 'react'
import "./Modal.css"

const Modal = ({ open, setOpen, item }) => {
    return (
        <div id="Modal" className={open ? "active" : ""}>
            <div className="modal-box">
                <div className="close" onClick={() => setOpen(false)}>x</div>
                <div className="image-wrapper">
                    <img src={item?.volumeInfo?.imageLinks?.thumbnail} alt="" />
                </div>
                <div className="content">
                    <h4>{item?.volumeInfo?.title}</h4>
                    <p id="date">{item?.volumeInfo?.publishedDate}</p>
                    <h5>{item?.volumeInfo?.publisher}</h5>
                    <p id="desc">{item?.volumeInfo?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal
