import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

export default props => {

    const keyHandle = (e) => {
        if(e.key === 'Enter') {
            props.handleAdd();
        }
    }

    return (
        <div>
            <div role='form' className="todoForm">
                <Grid cols="12 9 10">
                    <input
                        className="form-control"
                        placeholder="Adicione/Pesquise uma tarefa"
                        id="description"
                        value={props.description}
                        onChange={props.handleChange}
                        onKeyUp={keyHandle}
                    />
                </Grid>
                <Grid cols="12 3 2">
                    <IconButton style="primary" icon="plus" onClick={props.handleAdd} />
                </Grid>
            </div>
        </div>
    )
}