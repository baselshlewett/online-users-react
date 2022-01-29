import { useDispatch } from 'react-redux'
import { show } from '../../../store/popup/UserPopupSlice';

const TableRow = (props) => {
    const data = props.data;
    const dispatch = useDispatch();

    const handleOpen = () => {
        dispatch(show())
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
                <div className="d-flex justify-content-evenly">
                    <button className="btn btn-danger ml-2" onClick={handleOpen}>Show</button>
                </div>
            </td>
        </tr>
    );
}

export default TableRow;