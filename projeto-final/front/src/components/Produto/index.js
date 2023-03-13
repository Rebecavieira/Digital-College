import { Paper } from "@mui/material";
import sapato from "./produto.png";
import { Stack } from "@mui/system";

export default function Produto(){
    return(
        <>
            <Stack>
                <Paper elevation={3}>
                    <img src={sapato}/>
                </Paper>
            
                <span>Categoria</span>
                <h4>Nome do produto</h4>
            </Stack>
           
        </>
    );
}