import { UseethemeContext } from "../contextaip";

const Heder=()=>{
    const theme=UseethemeContext();
    const dark=theme.dark;
    const changeDark=()=>{
        theme.setdark(!dark)
    }
    return(
        <header className={`navbar navbar-expand bg-secondary ${dark ? 'navbar-light' : 'navbar-dark'} shadow-sm`}>
            <div className="container">
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <a className="nav-link">Home</a>
                    </li>
                    <li className="navbar-item">
                        <a className="nav-link">product</a>
                    </li>
                    <li className="navbar-item"> 
                        <a className="nav-link">about us</a>
                    </li>
                    <li className="navbar-item">
                        <a className="nav-link">contect us</a>
                    </li>
                </ul>
                <button onClick={changeDark} type="button" className={`btn ${dark ?'btn-dark':'btn-light'}`}>
                    dark
                </button> 
            </div>
        </header>
    )
}
export default Heder;