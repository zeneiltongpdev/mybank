// import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

interface ButtonType {
    name:string
}

const DropDown = (props:ButtonType) =>{
    return (
        <button>{props.name}</button>
    )
}
export { DropDown }