import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Grid, TextField, InputAdornment, IconButton, Box, Button, Tooltip } from '@mui/material';
import { getAllProducts } from "../../services/ProductService";
import { Search, Delete, Edit } from "@mui/icons-material";
import style from './command.module.css'

const ProdutoCard = ({ nome, preco, imagem }) => (
    <Card sx={{ minWidth: 200 }}>
        <CardContent>
            <CardMedia
                component="img"
                sx={{ width: 50, height: 50, margin: '0 auto' }}
                image={imagem || 'https://via.placeholder.com/150'}
                alt="Ícone do produto"
            />
            <Typography variant="body1" gutterBottom>
                {nome}
            </Typography>
            <Typography variant="body2" color={preco === 'Calculando preço...' ? 'orange' : 'green'}>
                {preco ? `R$ ${preco.toFixed(2)}` : 'Calculando preço...'}
            </Typography>
        </CardContent>
    </Card>
);

const ResumoComanda = () => (
    <Box className={style.boxTickets}>
        <Typography className={style.tickeTittle} sx={{ mb: 1 }} variant="h6">Comanda 4</Typography>
        <Box className={style.boxItens}>
            <Grid container alignItems="center" spacing={2}>
                <Grid item xs={1}>
                    <Typography variant="body2" color="#f50057">1x</Typography>
                </Grid>
                <Grid item xs={7}>
                    <Typography variant="body2">Cento</Typography>
                    <Typography variant="caption" color="textSecondary">+ Frango</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="body2" align="right">R$ 48,00</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Box display="flex" justifyContent="center" gap={1}>
                        <Tooltip title="Editar" arrow>
                            <IconButton size="small" color="primary">
                                <Edit />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Deletar" arrow>
                            <IconButton size="small" className={style.buttonDelete}>
                                <Delete />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        <Box>
            <Typography variant="subtitle1" gutterBottom><strong>Subtotal: </strong>R$ 48,00</Typography>
            <TextField
                fullWidth
                size="small"
                placeholder="Digite alguma observação no pedido"
                sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
                InputProps={{ style: { color: '#333' } }}
            />
            <Button variant="contained" className={style.buttonSend} fullWidth>
                Colocar na Comanda
            </Button>
        </Box>
    </Box >
);

const NewItem = () => {
    const [produtos, setProdutos] = useState([]);

    const fetchProducts = async () => {
        try {
            const productsData = await getAllProducts();
            setProdutos(productsData.content || []);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <Grid container spacing={2} sx={{ p: 2 }}>
            <Grid item xs={12} md={7}>
                <div>
                    <Typography variant="h5" gutterBottom>Adicionar Item</Typography>
                    <TextField
                        fullWidth
                        id="outlined-size-small"
                        size="small"
                        placeholder="digite o nome ou código do produto"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton>
                                        <Search />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        sx={{ mb: 2 }}
                    />
                </div>

                <div>
                    <Typography variant="h6" gutterBottom>Produtos</Typography>
                    <Grid container spacing={2}>
                        {produtos.map((produto) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={produto.idProduto}>
                                <ProdutoCard
                                    nome={produto.nome}
                                    preco={produto.preco}
                                    imagem={produto.imagem}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </Grid>
            {/* CONTAINER PARA A COMANDA */}
            <Grid item xs={12} md={5} mb={5}>
                <ResumoComanda />
            </Grid>
        </Grid>
    );
};

export default NewItem;
