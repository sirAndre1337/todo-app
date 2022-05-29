import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";
import If from "../template/if";

export default props => (
    <div>
        <div role='form' className="todoForm">
            <Grid cols="12 9 10">
                <input className="form-control" placeholder="Adicione uma tarefa" id="description" />
            </Grid>
        </div>
        <Grid cols="12 3 2">
            <IconButton style="primary" icon="plus" />
        </Grid>
    </div>
)