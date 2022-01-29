import OnlineUsersTable from "../../components/online-users-table/OnlineUsersTable";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/user/userSlice';

const Dashboard = (props) => {
    const navigate = useNavigate();
    const user = useSelector(selectUser);

    useEffect( () => {
        if (!user) {
            navigate("/");
        }
    });

    if (!!user) {
        return (
            <OnlineUsersTable />
        );
    }
    return (
        <div></div>
    );
}

export default Dashboard;