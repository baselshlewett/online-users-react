import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { hide, getUserData } from '../../store/popup/UserPopupSlice';

const UserPopup = () => {
    const userData = useSelector(getUserData);

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(hide());
    }

    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__header">
                    <h2>
                        Showing Info for: {userData.name}
                    </h2>
                    <span className="close" onClick={handleClick}>&times;</span>
                </div>
                <div className="user__data--container">
                    <div className="item">
                        <span className="title">Email:</span>
                        <span className="data">{userData.email}</span>
                    </div>

                    <div className="item">
                        <span className="title">User Agent:</span>
                        <span className="data">{userData.user_agent}</span>
                    </div>

                    <div className="item">
                        <span className="title">Entrance Time:</span>
                        <span className="data">{userData.entry_time}</span>
                    </div>

                    <div className="item">
                        <span className="title">Visits:</span>
                        <span className="data">{userData.visits_count}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPopup;