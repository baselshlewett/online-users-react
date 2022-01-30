import TableRow from './table-row/TableRow';

const OnlineUsersTable = (props) => {
    const user = props.data;

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