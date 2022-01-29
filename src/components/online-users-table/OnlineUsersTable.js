import TableRow from './table-row/TableRow';

import { useState, useEffect } from 'react';
import { getOnlineUsers } from '../../services/User.service';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/user/userSlice';

const OnlineUsersTable = (props) => {
    const [ users, setUsers ] = useState([]);
    const user = useSelector(selectUser);

    useEffect(() => {
        loadOnlineUsers();
        const interval = setInterval(() => {
            loadOnlineUsers();
          }, 3000);
          return () => clearInterval(interval);
    }, []);

    const loadOnlineUsers = () => {
        getOnlineUsers().then( result => setUsers(result));
    }

    return (
        <div className="online--users__table--container">
            <h1>Welcome {user.name}</h1>
            <table className="online--users__table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Enterance Time</th>
                        <th scope="col">Last Update Time</th>
                        <th scope="col">User IP</th>
                        <th scope="col">Options</th>
                    </tr>
                </thead>
                {users.length > 0 &&
                    <tbody>
                         {users.map((user) => {
                            return <TableRow data={user} key={user.email} />;
                        })}
                    </tbody>
                }
            </table>
        </div>
    );
}

export default OnlineUsersTable;