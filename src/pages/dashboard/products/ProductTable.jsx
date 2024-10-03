import './Products.css';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(numero, imagem, produto, categoria, preco, status) {
    return { numero, imagem, produto, categoria, preco, status };
}

const rows = [
    createData('01', 'https://encurtador.com.br/RXpGl', 'Hamburguer', 'Sobremesa', 159, 'Ativo'),
    createData('02', 'https://encurtador.com.br/feUuQ', 'Pizza Doce', 'Sobremesa', 237, 'Oculto'),
    createData('03', 'https://encurtador.com.br/umvSl', 'Bomba de Chocolate', 'Sobremesa', 262, 'Ativo'),
    createData('04', 'https://encurtador.com.br/dvkYI', 'Bolo de Chocolate', 'Sobremesa', 262, 'Oculto'),
];

const setStatusColor = (status) => {
    return status === 'Ativo' ? 'green' : 'red';
}

const ProductTable = () => {
    return (
        <TableContainer className='table-container' component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="table">
                <TableHead className='table-header' >
                    <TableRow>
                        <TableCell>Produto</TableCell>
                        <TableCell align="right">Categoria</TableCell>
                        <TableCell align="right">Preço</TableCell>
                        <TableCell align="right">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.numero}>
                            <TableCell
                                className='table-products'
                                component="th"
                                scope="row"
                                style={{ color: row.status === 'Oculto' ? 'red' : 'inherit' }}>
                                {row.numero}
                                <img src={row.imagem} className='table-product-img' alt={row.produto} />
                                {row.produto}
                            </TableCell>
                            <TableCell align="right">{row.categoria}</TableCell>
                            <TableCell align="right">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(row.preco)}</TableCell>
                            <TableCell align="right" style={{ color: setStatusColor(row.status) }}> {row.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ProductTable;
