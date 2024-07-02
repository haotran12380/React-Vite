const TodoData = (props) => {
    console.log(`>>> check props: `, props);
    const { name, age, data } = props;
    return (
        <div className='todo-data'>
            <div>Learning React </div>
            <div>Watching Youtube {JSON.stringify(data)} </div>
            <div>
                {JSON.stringify(props.todoList)}
            </div>



        </div>
    )
}
export default TodoData;