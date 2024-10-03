import './Products.css';
import React from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useNavigate } from 'react-router-dom';
import ProductTable from './ProductTable';

const Products = () => {

    const navigate = useNavigate();

    const handleCreateProduct = () => {
        navigate('/new-product')
    }

    return (
        <>
            <div className='product-header'>
                <p className='product-title'>Produtos</p>
                <div className='product-buttons'>
                    <Button className='product-button-filter' startIcon={<FilterAltIcon />}>Filtro</Button>
                    <Button className='product-button-create' startIcon={<AddIcon />} onClick={handleCreateProduct}>Adicionar Produto</Button>
                </div>
            </div>

            <div className='list-container'>
                <ProductTable />
            </div>
        </>
    );
}

export default Products;