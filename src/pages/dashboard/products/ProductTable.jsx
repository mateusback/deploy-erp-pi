import style from '../Index.module.css';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id, image, product, category, price, status) {
    return { id, image, product, category, price, status };
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
        <TableContainer className={style.tableContainer} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="table">
                <TableHead className={style.tableHeader} >
                    <TableRow>
                        <TableCell>Produto</TableCell>
                        <TableCell align="right">Categoria</TableCell>
                        <TableCell align="right">Preço</TableCell>
                        <TableCell align="right">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell
                                className={style.tableNameProduct}
                                component="th"
                                scope="row"
                                style={{ color: row.status === 'Oculto' ? 'red' : 'inherit' }}>
                                {row.id}
                                <img src={row.image} className={style.tableProductimg} alt={row.product} />
                                {row.product}
                            </TableCell>
                            <TableCell align="right">{row.category}</TableCell>
                            <TableCell align="right">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(row.price)}</TableCell>
                            <TableCell align="right" style={{ color: setStatusColor(row.status) }}> {row.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ProductTable;
