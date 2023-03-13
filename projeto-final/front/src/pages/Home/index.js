import Navbar from "../../components/Navbar";
import Menu from "../../components/Menu";
import Carousel from "../../components/Carousel";
import ColecoesDestaque from "../../components/ColecoesDestaque";
import Produto from "../../components/Produto";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

export default function Home(){
    return(
        <div>

            <Navbar />
            <Menu />
            <Carousel />
            <ColecoesDestaque />
            <Container>
                <Grid container spacing={2}>
                    <Grid item md={3}>
                        <Produto />
                    </Grid>
                    <Grid item md={3}>
                        <Produto />
                    </Grid>
                    <Grid item md={3}>
                        <Produto />
                    </Grid>
                    <Grid item md={3}>
                        <Produto />
                    </Grid>
                    <Grid item md={3}>
                        <Produto />
                    </Grid>
                    <Grid item md={3}>
                        <Produto />
                    </Grid>
                    <Grid item md={3}>
                        <Produto />
                    </Grid>
                    <Grid item md={3}>
                        <Produto />
                    </Grid>
                </Grid>
            </Container>
            
        </div>
    )
} 