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
        window.onbeforeunload = function(event) {
            dispatch(logout());
            navigator.sendBeacon(process.env.REACT_APP_API_BASE_URL + '/logout', JSON.stringify({ email: 'basel.shlewett@misbar.com' }));
        };
    }, []);

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
