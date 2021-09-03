import "./Backdrop.css";
import React from 'react'

export default function Backdrop({show, click}) {
    return (
        show && <div className="backdrop" onClick={click}>
            Backdrop
        </div>
    )
}
