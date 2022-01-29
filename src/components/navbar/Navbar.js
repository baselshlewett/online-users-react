import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectUser } from '../../store/user/userSlice';
import { postLogout } from '../../services/User.service';

const Navbar = (props) => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleLogout = () => {
        postLogout(user.email).then(res => {
            dispatch(logout());
        });
    }

    return (
        <nav className="navbar">
            <div className="navbar--container">
                <a className="navbar--logo" href="#">
                    Online Users App
                    {!!user &&
                        <span>
                            Welcome {user.name}
                        </span>
                    }
                </a>
                <div className="collapse navbar-collapse">
                    <ul className="menu">
                        {!user &&
                            <li className="item">
                                <Link to="/" className="link">Login</Link>
                            </li>
                        }
                        {!!user &&
                            <li className="item">
                                <a href="#" onClick={handleLogout} className="link">Logout</a>
                            </li>
                        }
                        {!!user &&
                            <li className="item">
                                <Link to="/online-users" className="link">Online Users</Link>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;