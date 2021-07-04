 //functional component
 const Header =function(){
    const headerStyle = {
        textAlign: 'center',
        padding: 20,
        background: '#000',
        color: '#fff',
        textTransform: 'uppercase'
     };
    return(
        <div>
            <div style={headerStyle}>Phone-Directory</div>
        </div>
    
    )
 }

export default Header;