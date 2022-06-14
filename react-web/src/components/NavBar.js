import "../App.css";
const NavBar = () =>{
    return (
        <nav className="navbar text-light mb-5">
            <div className="containerIcon">
                <div className="app-detail">
                <div className="image">
                    <img src="https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="iconWeather"/>
                </div>
                <h3>El clima</h3>
                </div>    
            </div>
        </nav>
    );
}

export default NavBar;