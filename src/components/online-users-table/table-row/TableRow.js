import { useDispatch } from 'react-redux'
import { show } from '../../../store/popup/UserPopupSlice';

const TableRow = (props) => {
    const data = props.data;
    const dispatch = useDispatch();

    const handleOpen = () => {
        dispatch(show(data));
    }

    return (
        <tr>
            <th scope="row">{data.name}</th>
            <td>
                {data.entry_time}
            </td>
            <td>
                {data.updated_at}
            </td>
            <td>{data.user_ip}</td>
            <td>
                <div>
                    <button className="online--users__table--show-user-btn" onClick={handleOpen}>Show</button>
                </div>
            </td>
        </tr>
    );
}

export default TableRow;