import React from "react";
import Navbar from "../../components/Navbar";
import Menu from "../../components/Menu";
import {Card, Button, Grid} from "@mui/material";

function CadaProduto(props){
    const [quantidade, alterarQuantidade] = React.useState(1);

    const add = () => {
        alterarQuantidade(quantidade + 1);
    }

    const remove = () => {
        alterarQuantidade(quantidade - 1);
    }

    return(
        
            <Card>
                
                {props.produto} (R$ {props.valor})
                <Button disabled={quantidade === 1} onClick={remove}>-</Button>
                {quantidade}
                <Button onClick={add}>+</Button>
                <hr />

                TOTAL: R$ {props.valor * quantidade}
            </Card>
    )
}

export default function Produtos(){

    return(
        <div>
            <Navbar />
            <Menu />
            <br />
            <Grid container spacing={3}>
                <Grid item>
                    <CadaProduto produto="pratinho" valor="9" />
                </Grid>
                <Grid item>
                    <CadaProduto produto="coxinha" valor="6" />
                </Grid>
                <Grid item>
                    <CadaProduto produto="coca-cola" valor="8" />
                </Grid>
                <Grid item>
                    <CadaProduto produto="pizza" valor="10" />
                </Grid>
                <Grid item>
                    <CadaProduto produto="lasanha" valor="18" />
                </Grid>
            </Grid>
        </div>
    )
}