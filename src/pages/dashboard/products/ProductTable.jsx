import AlertDelete from './ConfirmDeleteBox';
import { getAllProducts } from '../../../services/ProductService';
import React, { useEffect, useState } from 'react';
import style from '../Index.module.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Delete, Edit } from '@mui/icons-material';
import { ButtonGroup, Tooltip, Typography, IconButton, TableCell, CircularProgress } from '@mui/material';
import PaginationTable from './PaginationTable';

const setStatusColor = (status) => {
    return status === 'Ativo' ? 'green' : 'red';
};

const ProductTable = () => {
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [productToDelete, setProductToDelete] = useState(null);
    const [openAlert, setOpenAlert] = useState(false);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const products = await getAllProducts();
            setProdutos(products.content);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDeleteClick = (id, product) => {
        setProductToDelete({ id, product });
        setOpenAlert(true);
    };

    const handleCloseAlert = () => {
        setOpenAlert(false);
        setProductToDelete(null);
    };

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
                                <IconButton className={style.tableButtonEdit}>
                                    <Edit />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Excluir" arrow>
                                <IconButton
                                    aria-label={`Botão de deletar ${produto.product}`}
                                    className={style.tableButtonDelete}
                                    onClick={() => handleDeleteClick(produto.id, produto.product)}
                                >
                                    <Delete />
                                </IconButton>
                            </Tooltip>
                        </ButtonGroup>
                    </TableCell>
                </TableRow >
        ));
    };

    return (
        <React.Fragment>
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
                    <TableBody>{renderTableContent()}</TableBody>
                </Table>
                <PaginationTable />
            </TableContainer>

            {productToDelete && (
                <AlertDelete
                    id={productToDelete.id}
                    product={productToDelete.product}
                    fetchProducts={fetchProducts}
                    open={openAlert}
                    onClose={handleCloseAlert}
                />
            )}
        </React.Fragment>
    );
};

export default ProductTable;
