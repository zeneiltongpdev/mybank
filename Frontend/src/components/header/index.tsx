import { DropDown } from "../buttons/dropdown"

const Header = () =>{
    return (
        <header>
            <h1>DevBank</h1>
            <nav>
                <ul>
                    <li>
                    <DropDown name="Products"/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export { Header }