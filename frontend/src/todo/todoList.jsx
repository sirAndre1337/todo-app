import React from "react";
import IconButton from "../template/iconButton";


export default props => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descricao</th>
                    <th className="tableActions">Acoes</th>
                </tr>
            </thead>
            <tbody>
                {props.list.map(todo => (
                    <tr key={todo._id}>
                        <td className={todo.done ? 'markedAsDone' : ''}>
                            {todo.description}
                        </td>
                        <td>
                            <IconButton
                                style="success m-2"
                                icon='check'
                                onClick={() => props.handleMarkAsDone(todo)}
                                hide={todo.done}
                            />
                            <IconButton
                                style="warning"
                                icon='undo'
                                onClick={() => props.handleMarkAsPending(todo)}
                                hide={!todo.done}
                            />
                            <IconButton
                                style="danger"
                                icon='trash-o'
                                onClick={() => props.handleRemove(todo)}
                                hide={!todo.done}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}