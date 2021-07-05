import './Header.css'
//functional component
 const Header =function(props){
    return(
    <div className="header">{props.heading}</div>
    )
 }
export default Header;