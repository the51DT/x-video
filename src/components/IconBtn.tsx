import React, { useState } from "react"
function IconBtn({ disabled, types, children,  svgType, svgName, onClick }) {
    const className = `${types}`;
    
    return ( 
            <button 
                type="button"
                className={className}
                disabled={disabled}
                onClick={onClick}
            >
                {svgType && 
                    <div className="svg-con">
                        { svgName }
                    </div>
                }
                {children}
            </button>
    )
}
export default IconBtn;