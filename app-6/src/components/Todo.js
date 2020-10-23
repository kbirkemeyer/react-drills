import React from 'react';


function Todo({tasks}) {
    let taskItem = tasks.map((element, index) => {
        return <li key={index}>{element}</li>
    })
    return (
        <div>
            <ul>{taskItem}</ul>
        </div>
    )
}

export default Todo;