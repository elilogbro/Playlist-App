import { NavLink } from 'react-router-dom';

function NavBar() {
   
    return (
        <div className="links-container">
            <span className="links">
                <NavLink to="/"
                    style={({ isActive}) =>
                    isActive ? 
                    { color: '#000000'}
                    : { color: '#000000',
                    textDecoration: 'none'
                    }}
                    >About
                </NavLink>
                <NavLink to="/songs"
                    style={({ isActive}) =>
                    isActive ? 
                    { color: '#000000'}
                    : { color: '#000000',
                    textDecoration: 'none'
                    }}
                    >Songs
                </NavLink>
                <NavLink to="/favorite-songs"
                    style={({ isActive}) =>
                    isActive ? 
                    { color: '#000000'}
                    : { color: '#000000',
                    textDecoration: 'none'
                    }}
                    >Favorite Songs
            </NavLink>
            </span>
        </div>
    )
}

export default NavBar;