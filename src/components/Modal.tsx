import { useEffect } from "react"
import React from "react"

import MyBtn from '../components/Button.tsx'

function MyModal({ open, title, children, onCancel, footer, width, height, top, bottom }) {
    return (
        <div className={open ? "modal__wrap" : "modal__disabled"}
            onClick={onCancel} 
        >
            <div className="modal__container"
                style={{ 
                    width: width ? width : '',
                    height: height ? height : '',
                    top: top ? top : '',
                    bottom: bottom ? bottom : ''
                }}                           
            >
                <div className="modal__header">
                    {
                        title ?
                            <strong>{title}</strong>
                            :
                            null
                    }                                      
                    <MyBtn 
                        children={""}                        
                        btnColor={"icon_close-modal"}
                        sizeStyle={ "iconOnly" }  
                        onClick={onCancel} 
                    />  
                </div>
                <div className="modal__body">
                 {children}
                </div>
            </div>
        </div>
    )
}

export default MyModal;