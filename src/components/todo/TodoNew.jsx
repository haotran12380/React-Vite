import { useState } from "react";

const TodoNew = (props) => {
    const [valueInput, setValueInput] = useState("Hao Tran");
    const { addNewTodo } = props;
    // addNewTodo("Hao tran");
    const handleClick = () => {
        addNewTodo(valueInput);
        setValueInput("")

    }
    const handleOnChange = (name) => {

        setValueInput(name);
    }
    return (
        <div className='todo-new'>
            <input className='todo-Input' type="text" placeholder='  Enter Your Task'
                onChange={(event) => handleOnChange(event.target.value)} value={valueInput} />
            <button className='btn-Add' onClick={handleClick}>Add</button>
            <div className="test-Input">
                My text input is = {valueInput}
            </div>
        </div>

    )
}
export default TodoNew;