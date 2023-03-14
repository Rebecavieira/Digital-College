import React from 'react'
import Navbar from "../../components/Navbar";
import Menu from "../../components/Menu";
import Carousel from "../../components/Carousel";
import ColecoesDestaque from "../../components/ColecoesDestaque";
import Produto from "../../components/Produto";
import Footer from "../../components/Footer";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

export default function Home(){

        const [listaProdutos, setListaProdutos] = React.useState([]);
        function buscarProdutos(){
          fetch("https://63388a25383946bc7fe9a891.mockapi.io/digital-store-users")
                .then(res => res.json())
                    .then(lista => {
                        setListaProdutos(lista)
                    });
        }
        React.useEffect(() => {
            buscarProdutos();
    
        }, [])

    return(
        <div>

            <Navbar />
            <Menu />
            <Carousel />
            <ColecoesDestaque />
            {listaProdutos.length}
            <Container>
                <Grid container spacing={3}>
                        {
                            listaProdutos.map((cadaProduto) => {
                                return(
                                    <Grid item md={3.5}>
                                        <Produto nome={cadaProduto.nome} categoria={cadaProduto.categoria} imagem={cadaProduto.imgUrl} />
                                    </Grid>
                                );
                            })
                        }
                </Grid>
            </Container>
            <Footer />
        </div>
    )
} 