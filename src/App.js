import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectUser } from './store/user/userSlice';
import UserPopup from './components/popup/user.popup';
import { isShownPopup } from './store/popup/UserPopupSlice';


const App = () => {
    const user = useSelector(selectUser);
    const shown = useSelector(isShownPopup);
    const dispatch = useDispatch();

    useEffect(() => {
        window.onbeforeunload = (event) => {
            event.preventDefault();
            // this is not the most reliabe event to handle user exist, logout/marking user offline should be handled server side
            dispatch(logout);
            navigator.sendBeacon(process.env.REACT_APP_BASE_API_URL + '/logout', {email: user.email})
        }
    });

    return (
        <Layout>
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/online-users' element={<Dashboard />}></Route>
            </Routes>
            {shown && <UserPopup /> }
        </Layout>
    );
}

export default App;
