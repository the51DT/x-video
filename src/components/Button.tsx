function MyBtn({ disabled, btnColor, sizeStyle, active, children, onClick }) {
    const className = `btn ${btnColor} ${sizeStyle} ${active}`;

  return <button 
              type="button"
              className={className}
              disabled={disabled}
              onClick={onClick}
          >
            {children}
          </button>
}
export default MyBtn;