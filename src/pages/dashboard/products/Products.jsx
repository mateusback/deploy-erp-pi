import './Products.css';
import React from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Products = () => {
    return (
        <div className='products-header'>
            <p>Produtos</p>
            <div className='products-buttons'>
                <Button className='products-button-filter' startIcon={<FilterAltIcon />}>Filtro</Button>
                <Button className='products-button-create' startIcon={<AddIcon />}>Adicionar Produto</Button>            </div>
        </div>
    );
}

export default Products;