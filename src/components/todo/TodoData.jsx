const TodoData = (props) => {

    const { todoList, deleteTodo } = props;
    const handleClick = (id) => {
        deleteTodo(id);
    }
    console.log(`>>> check props toDo: `, todoList);
    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                console.log(`check value `, item, index);
                return (<div>
                    <div className={`todo-item`} key={item.id}>
                        {item.name}
                        <button onClick={() => handleClick(item.id)} style={{ cursor: `pointer` }} >Delete</button>
                    </div>

                </div>)
            })}



        </div>
    )
}
export default TodoData;