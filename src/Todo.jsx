import React, { useState, useRef } from 'react';

function Todo() {
    const [data, setData] = useState([]);
    const refer = useRef();

    function handleClick() {
        // Adding the task entered in the input field to the data array
        setData([...data, { task: refer.current.value }]);
        refer.current.value = ""; // Clear the input field after adding
    }

    return (
        <div>
            <input ref={refer} type="text" />
            <button onClick={handleClick}>Save</button>
            <ul>
                {data.map((i, index) => (
                    <li key={index}>{i.task}</li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
