const TodoNew = (props) => {
    console.log(`check props: `, props);
    const { addNewTodo } = props;
    // addNewTodo("Hao tran");
    const handleClick = () => {
        alert(`Click me`)
    }
    const handleOnChange = (name) => {
        console.log(`>> Check on Change`, name);
    }
    return (
        <div className='todo-new'>
            <input className='todo-Input' type="text" placeholder='  Enter Your Task'
                onChange={(event) => handleOnChange(event.target.value)} />
            <button className='btn-Add' onClick={handleClick}>Add</button>
        </div>
    )
}
export default TodoNew;