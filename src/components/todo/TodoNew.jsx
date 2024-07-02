import { useState } from "react";

const TodoNew = (props) => {
    const [valueInput, setValueInput] = useState("Hao Tran");
    const { addNewTodo } = props;
    // addNewTodo("Hao tran");
    const handleClick = () => {
        console.log(`>>> Check Value Input `, valueInput);
    }
    const handleOnChange = (name) => {

        setValueInput(name);
    }
    return (
        <div className='todo-new'>
            <input className='todo-Input' type="text" placeholder='  Enter Your Task'
                onChange={(event) => handleOnChange(event.target.value)} />
            <button className='btn-Add' onClick={handleClick}>Add</button>
            <div>
                My text input is = {valueInput}
            </div>
        </div>

    )
}
export default TodoNew;