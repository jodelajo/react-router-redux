import React from "react";
import ReactDOM from "react-dom";

const Modal = () => {
    return ReactDOM.createPortal(
<div className='ui dimmer show modals visible active'>
        <div className='ui raised very padded text container segment'>
            <h1>I am a Modal</h1>
        </div>
</div>
    )
}
export default Modal