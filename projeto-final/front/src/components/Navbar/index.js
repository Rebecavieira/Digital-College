import {Button, TextField, Alert} from "@mui/material";
import {Favorite, Group, ShoppingCart} from "@mui/icons-material";

export default function Navbar(){
    return(
        <div>
            Navbar
            <Favorite />
            <Group />
            <ShoppingCart />
            <Alert severity="error">Aqui vai a mensagem</Alert>

            <Button>Entrar</Button>

            <Button color="secondary" variant="contained">Entrar</Button>

            <TextField label="O que vc procura?"></TextField>
        </div>
    )
}