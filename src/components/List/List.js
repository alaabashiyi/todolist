import Task from "../Task/Task";
import './List.scss'

const List = ({ data, remove }) => {

    return (
        <div className="list">
            {
                data?.map(({ content, id }) => (
                    <Task key={id} content={content} id={id} remove={remove} />
                ))
            }
        </div>
    )
}

export default List;