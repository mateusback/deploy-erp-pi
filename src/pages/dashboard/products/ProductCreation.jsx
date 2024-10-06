import React, { useState } from 'react';
import { styled } from '@mui/system';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import { InputLabel } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Select } from '@mui/material';
import { TextField } from '@mui/material';
import style from '../Index.module.css';

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
    const [imagePreview, setImagePreview] = useState(null);

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

    return (
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
                        <Grid item xs={6}>
                            <InputLabel><strong>Nome</strong></InputLabel>
                            <TextField
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <InputLabel><strong>Código</strong></InputLabel>
                            <TextField
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <InputLabel id="category-form"><strong>Categoria</strong></InputLabel>
                            <Select
                                fullWidth
                                labelId="category-label"
                                variant="outlined"
                                defaultValue=""
                            >
                                <MenuItem value=""><em><strong>Selecionar</strong></em></MenuItem>
                                <MenuItem value={10}>Categoria 1</MenuItem>
                                <MenuItem value={20}>Categoria 2</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={6}>
                            <InputLabel><strong>Detalhes</strong></InputLabel>
                            <TextField
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <InputLabel><strong>Preço</strong></InputLabel>
                            <TextField
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: 'R$ ',
                                }}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <FormControlLabel sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}
                                control={<Checkbox />}
                                label="Ativo"
                            />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
                        <Button
                            className={style.saveNewProductButton}>
                            Salvar
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    );
}

export default ProductCreation;
