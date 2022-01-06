import Button from "../Button/Button"
import './AddTask.scss';

const AddTask = ({ text, onChange, onButtonClick, title }) => {
    return (
        <div className="addtask">
            <input type="text" value={text} onChange={onChange} placeholder="Add todo..." />
            <Button title={title} onClick={onButtonClick} />
        </div>
    )
}

export default AddTask
