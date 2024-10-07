import React, { useState } from 'react';
import { styled } from '@mui/system';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { Alert, Box, Checkbox, FormControlLabel, Snackbar, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import { InputLabel } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Select } from '@mui/material';
import { TextField } from '@mui/material';
import style from '../Index.module.css';
import { ArrowBackIosOutlined } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { save } from '../../../services/ProductService';

const UploadBox = styled(Box)({
    border: '2px dashed #dbdbdb',
    borderRadius: '50%',
    width: '170px',
    height: '170px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    backgroundColor: '#f5f5f5',
    position: 'relative',
    overflow: 'hidden',
});

const ProductCreation = () => {
    const navigate = useNavigate();
    const [imagePreview, setImagePreview] = useState(null);
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [category, setCategory] = useState('');
    const [details, setDetails] = useState('');
    const [price, setPrice] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [alert, setAlert] = useState({ severity: '', message: '' });

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleNavigateBack = () => {
        navigate(-1);
    }

    const handleSaveClick = async () => {
        const productData = {
            name,
            code,
            category,
            details,
            price,
            isActive,
        };

        try {
            await save(productData);
            setAlert({ severity: 'success', message: 'Produto salvo com sucesso!' });
            navigate('/produtos');
        } catch (error) {
            console.error("Erro ao salvar o produto:", error);
            setAlert({ severity: 'error', message: 'Erro ao salvar o produto!' });
        }
    }

    return (
        <>
            {alert.message && (
                <Snackbar
                    open={Boolean(alert.message)}
                    autoHideDuration={5000}
                    onClose={() => setAlert({ severity: '', message: '' })}
                >
                    <Alert
                        severity={alert.severity}
                        onClose={() => setAlert({ severity: '', message: '' })}
                        className={style.alert}
                    >
                        {alert.message}
                    </Alert>
                </Snackbar>
            )}
            <Link onClick={handleNavigateBack} underline="none" className={style.backLink}>
                <ArrowBackIosOutlined fontSize="small" /> Voltar
            </Link>
            <Box className={style.newproductContainer}>
                < p className={style.productTitle}> Novo Produto</p>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Box className={style.uploadContainer}>
                            <UploadBox sx={{ mb: 5 }} onClick={() => document.getElementById('imageUpload').click()}>
                                {imagePreview ? (
                                    <img src={imagePreview} alt="Prévia" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                ) : (
                                    <AddAPhotoIcon fontSize="large" sx={{ color: '#9e9e9e' }} />
                                )}
                            </UploadBox>
                            <input
                                type="file"
                                id="imageUpload"
                                style={{ display: 'none' }}
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                            <Typography color="textSecondary" className={style.specifications}>
                                <p>Formatos</p>
                                <strong>JPG, JPEG e PNG</strong>
                            </Typography>
                            <Typography color="textSecondary" className={style.specifications}>
                                <p>Tamanho</p>
                                <strong>2MB</strong>
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={16} md={8}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <InputLabel><strong>Nome</strong></InputLabel>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <InputLabel><strong>Código</strong></InputLabel>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <InputLabel id="category-form"><strong>Categoria</strong></InputLabel>
                                <Select
                                    fullWidth
                                    labelId="category-label"
                                    variant="outlined"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <MenuItem value=""><em><strong>Selecionar</strong></em></MenuItem>
                                    <MenuItem value={10}>Categoria 1</MenuItem>
                                    <MenuItem value={20}>Categoria 2</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <InputLabel><strong>Detalhes</strong></InputLabel>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    value={details}
                                    onChange={(e) => setDetails(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <InputLabel><strong>Preço</strong></InputLabel>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    InputProps={{
                                        startAdornment: 'R$ ',
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControlLabel
                                    className={style.ActiveCheckbox}
                                    control={<Checkbox checked={isActive} onChange={(e) => setIsActive(e.target.checked)} />}
                                    label="Ativo"
                                />
                            </Grid>
                        </Grid>

                    </Grid>

                    <Grid item xs={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
                            <Button
                                className={style.saveNewProductButton}
                                onClick={handleSaveClick}
                            >
                                Salvar
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box >
        </>

    );
}

export default ProductCreation;
