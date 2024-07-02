const TodoNew = (props) => {
    console.log(`check props: `, props);
    const { addNewTodo } = props;
    addNewTodo("Hao tran");
    return (
        <div className='todo-new'>
            <input className='todo-Input' type="text" placeholder='  Enter Your Task' />
            <button className='btn-Add'>Add</button>
        </div>
    )
}
export default TodoNew;