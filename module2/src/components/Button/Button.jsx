const Button = ({ changeCount , delta , text }) => <button onClick={()=>changeCount(delta)}>{text}</button>

export default Button