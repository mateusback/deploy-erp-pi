import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { deleteProduct } from '../../../services/ProductService';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function Alert({ id, product, fetchProducts, open, onClose }) {
    const handleDelete = async () => {
        try {
            await deleteProduct(id);
            <Alert severity="success" onClose={() => { }}>Produto deletado com sucesso!</Alert>
            fetchProducts();
        } catch (error) {
            <Alert severity="error" onClose={() => { }}> Erro ao excluir o produto!</Alert>
            console.error('Erro ao excluir o produto:', error);
        } finally {
            onClose();
        }
    };

    return (
        <BootstrapDialog onClose={onClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                Confirmar Exclusão
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={onClose}
                sx={(theme) => ({
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500],
                })}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent dividers>
                <Typography gutterBottom>
                    Tem certeza que deseja deletar o produto <strong>{product}</strong>?
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancelar</Button>
                <Button color="error" onClick={handleDelete}>
                    Deletar
                </Button>
            </DialogActions>
        </BootstrapDialog>
    );
}
