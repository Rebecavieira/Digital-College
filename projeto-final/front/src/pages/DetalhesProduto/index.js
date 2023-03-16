import React from 'react'
import { Card, Grid, Stack, Button, Container, Fab } from '@mui/material';
import { useParams } from 'react-router-dom';
import bone01 from './img/bone01.webp';
import bone02 from './img/bone02.webp';
import bone03 from './img/bone03.webp';
import bone04 from './img/bone04.webp';
import bone05 from './img/bone05.webp';
import { ChevronLeft, ChevronRight, Height, Star, StarOutline } from '@mui/icons-material';
import "./styles.scss";


export default function DetalhesProduto(){
        const {id} = useParams();
        const[atual, setAtual] = React.useState(0);
        const[color, setColor] = React.useState();

        const imagens = [
            bone01,
            bone02,
            bone03,
            bone04,
            bone05,
        ];

        const Items = () => {

            return imagens.map((cada, posicao) => {
                return (
                    <Grid item xs={2.4}>
                        <Card onClick={() => setAtual(posicao)} sx={(atual === posicao) && {border: "2px solid red"}}>
                            <img src={cada} width="100%" alt="" />
                        </Card>
                    </Grid>
                );
                
            });

        }

        function anterior(){
            if(atual === 0){
                setAtual(imagens.length - 1);
            } else {
                setAtual(atual - 1);
            }
        }

        function proximo(){
            if(atual < imagens.length - 1){
                setAtual(atual + 1);
            } else {
                setAtual(0)
            }
            
        }

        // const [nome, setNome] = React.useState();

        React.useEffect(() => {
            let intervalo = setInterval(proximo, 3000);

            return() => clearInterval(intervalo);
        });


        return (
            <div className="product-details">
                 {id}
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={7}>
                            <Card align="center">
                                <Stack direction="row" sx={{justifyContent: "space-between", alignItems: "center"}}>
                                    <ChevronLeft sx={{fontSize: "60px"}} onClick={anterior}/>
                                        <img className='main' width="400px" src={imagens[atual]} alt="" />
                                    <ChevronRight sx={{fontSize: "60px"}} onClick={proximo}/>
                                </Stack>
                            </Card>
                           
                            <Grid container spacing={2}>
                                <Items />
                            </Grid>
                        </Grid>
                        <Grid item xs={5}>
                           <div className='title'>
                                Tenis Nike
                           </div>
                           <div className='ref'>
                                Casual Nike
                            </div>
                           <div className='reviews'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <StarOutline />
                            </div>
                            <div className='valor'>
                                R$219,00
                            </div>
                            <div>
                                <p className='titulo-descricao-produto'>Descrição do produto</p>
                                <p className='descricao-texto-produto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            </div>
                            <div>
                                Tamanho
                            </div>
                            <div>
                                <p>Cor: <small>{color}</small></p>
                                <Fab sx={{width: "35px", height: "20px"}} onClick={() => setColor('Azul')} color="primary"></Fab>
                                <Fab sx={{width: "35px", height: "20px"}} onClick={() => setColor('Roxo')} color="sencondary"></Fab>
                                <Fab sx={{width: "35px", height: "20px"}} onClick={() => setColor('Verde')} color="success"></Fab>
                                <Fab sx={{width: "35px", height: "20px"}} onClick={() => setColor('Vermelho')} color="error"></Fab>
                            </div>
                            <div>
                                <Button className='buy' variant="contained">COMPRAR</Button>
                            </div>
                            
                        </Grid>
                    </Grid>
                </Container>                   
            </div>
        )
}
 
