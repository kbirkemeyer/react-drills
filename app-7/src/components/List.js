import React from 'react';
import Todo from './Todo';


export default function List({tasks}) {
    let taskItem = tasks.map((element, index) => {
        return <Todo taskItem={element} key={index}></Todo>
    })
    return (
        <div>
            <ul>{taskItem}</ul>
        </div>
    )
}