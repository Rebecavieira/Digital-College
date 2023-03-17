import { Paper } from "@mui/material";
import sapato from "./produto.png";
import { Stack } from "@mui/system";

export default function Produto(props){
    return(
        <>
            <Stack>
                <Paper elevation={3}>
                    <img src={props.imagem} style={{width: "100%"}}/>
                </Paper>
            
                <span>{props.categoria}</span>
                <h4>{props.nome}</h4>
            </Stack>
           
        </> 
    );
}