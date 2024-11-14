import React, { useState, useEffect } from "react";
import Search from "../../components/header/HeaderContent/Search";
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { getAllProducts } from "../../services/ProductService";

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
        <>
            <div>
                <h2>Adicionar Item</h2>
                <Search />
            </div>

            <div>
                <h3>Produtos</h3>
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
        </>
    );
};

export default NewItem;
