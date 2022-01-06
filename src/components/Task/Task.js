import './Task.scss';
import { selected, unselected } from '../../constants';
import { DELETE, EDIT } from '../../constants/text';

const Task = ({ id, content, remove, isSelected = false }) => {
    return (
        <div key={id}>
            <div className='task'>
                <p>{`${isSelected ? selected : unselected} ${content}`}</p>
                <div className='btnsContainer'>
                    <div className='edit'>{EDIT}</div>
                    <div className='delete' onClick={() => remove(id)}>{DELETE}</div>
                </div>
            </div>

        </div>
    )
}

export default Task
