import React, { useState } from 'react';
import { FormControl, IconButton, ClickAwayListener } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import { SearchOutlined, Close } from '@mui/icons-material';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './Content.css';

const CustomInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 10,
        position: 'relative',
        backgroundColor: '#F3F6F9',
        border: 'none',
        borderColor: '#E0E3E7',
        fontSize: 16,
        width: '100%',
        padding: '10px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}));

const Search = () => {
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleSearchClick = () => {
        setShowSearch(true);
    };

    const handleCloseSearch = () => {
        setShowSearch(false);
        setSearch('');
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <Box sx={{ width: '100%', ml: { xs: 0, md: 1 }, position: 'relative', justifyContent: 'center' }}>
            {isMobile && !showSearch ? (
                <IconButton onClick={handleSearchClick} aria-label="search">
                    <SearchOutlined />
                </IconButton>
            ) : null}

            {isMobile && showSearch && (
                // FORM FLUTUANTE DE BUSCA
                <ClickAwayListener onClickAway={handleCloseSearch}>
                    <Box
                        sx={{
                            position: 'fixed',
                            top: '5.5rem',
                            left: '16rem',
                            right: 0,
                            transform: 'translate(-50%, -50%)',
                            zIndex: 10,
                            backgroundColor: '#fff',
                            borderRadius: 2,
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            padding: '10px',
                            width: '90%',
                            maxWidth: '300px',
                        }}
                    >
                        <FormControl sx={{ width: '100%' }}>
                            <CustomInput
                                size="small"
                                placeholder="Buscar"
                                className='search-icon'
                                value={search}
                                onChange={handleSearchChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleCloseSearch}>
                                            <Close />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Box>
                </ClickAwayListener>
            )}

            {!isMobile && (
                <FormControl sx={{ width: { xs: '100%', md: 400 } }}>
                    <CustomInput
                        size="small"
                        placeholder="Buscar"
                        className='search-icon'
                        value={search}
                        onChange={handleSearchChange}
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton>
                                    <SearchOutlined />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            )}
        </Box>
    );
};

export default Search;
