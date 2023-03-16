import { Paper } from "@mui/material";
import { Stack } from "@mui/system";

export default function Produto(props){
    return(
        <>
            <Stack>
                <Paper elevation={3}>
                    <img src={props.imagem} style={{width: "100%"}} alt=""/>
                </Paper>
            
                <span>{props.categoria}</span>
                <h4>{props.nome}</h4>
            </Stack>
           
        </>
    );
}