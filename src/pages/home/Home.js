import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/user/userSlice';

import LoginForm from '../../components/login-form/LoginForm';

const HomePage = (props) => {
    const user = useSelector(selectUser);
    const navigate = useNavigate();

    useEffect(() => {
        if (!!user) {
            navigate("/online-users");
        }
    }, []);
    return (
        <LoginForm />
    );
}

export default HomePage;