import React, { useEffect, useState } from 'react';
import { deleteProduct, getAllProducts } from '../../../services/ProductService';
import style from '../Index.module.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Delete, Edit } from '@mui/icons-material';
import { Button, ButtonGroup, Tooltip, Typography, IconButton, TableCell, CircularProgress } from '@mui/material';

const setStatusColor = (status) => {
    return status === 'Ativo' ? 'green' : 'red';
};

const ProductTable = () => {
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const products = await getAllProducts();
            setProdutos(products);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Tem certeza que deseja excluir este produto?");
        if (confirmDelete) {
            try {
                await deleteProduct(id);
                fetchProducts();
            } catch (error) {
                console.error('Erro ao excluir o produto:', error);
            }
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const renderTableContent = () => {
        if (loading) {
            return (
                <TableRow>
                    <TableCell colSpan={5} align="center">
                        <Box role="progressbar" sx={{ display: 'flex', justifyContent: 'center' }}>
                            <CircularProgress />
                        </Box>
                    </TableCell>
                </TableRow>
            );
        }

        if (produtos.length === 0) {
            return (
                <TableRow>
                    <TableCell colSpan={5} align="center">
                        <Typography variant="body1">Nenhum produto cadastrado.</Typography>
                    </TableCell>
                </TableRow>
            );
        }

        return produtos.map((produto) => (
            <TableRow key={produto.id}>
                <TableCell className={style.tableNameProduct} component="th" scope="row" style={{ color: produto.status === 'Oculto' ? 'red' : 'inherit' }}>
                    {produto.id}
                    <img src={produto.image} className={style.tableProductimg} alt={produto.product} />
                    {produto.product}
                </TableCell>
                <TableCell align="right">{produto.category}</TableCell>
                <TableCell align="right">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.price)}
                </TableCell>
                <TableCell align="right" style={{ color: setStatusColor(produto.status) }}>
                    {produto.status}
                </TableCell>
                <TableCell align="right">
                    <ButtonGroup disableElevation variant="contained" aria-label="Botões de ação">
                        <Tooltip title="Editar" arrow>
                            <Button aria-label="Botões de editar" className={style.tableButtonEdit}>
                                <Edit />
                            </Button>
                        </Tooltip>
                        <Tooltip title="Excluir" arrow>
                            <IconButton
                                aria-label={`Botão de deletar ${produto.product}`}
                                className={style.tableButtonDelete}
                                onClick={() => handleDelete(produto.id)}
                            >
                                <Delete />
                            </IconButton>
                        </Tooltip>
                    </ButtonGroup>
                </TableCell>
            </TableRow>
        ));
    };

    return (
        <TableContainer className={style.tableContainer} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="table">
                <TableHead className={style.tableHeader}>
                    <TableRow>
                        <TableCell>Produto</TableCell>
                        <TableCell align="right">Categoria</TableCell>
                        <TableCell align="right">Preço</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {renderTableContent()}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ProductTable;
