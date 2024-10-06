import { CustomInput } from '../headerStyles';
import style from '../Header.module.css';
import React, { useState } from 'react';
import { FormControl, IconButton, ClickAwayListener } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import { SearchOutlined, Close } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

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
                <ClickAwayListener onClickAway={handleCloseSearch}>
                    <Box className={style.searchInput} >
                        <FormControl sx={{ width: '100%' }}>
                            <CustomInput
                                size="small"
                                placeholder="Buscar"
                                className={style.searchIcon}
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
                <FormControl sx={{ width: { xs: '100%', md: 600 } }}>
                    <CustomInput
                        size="small"
                        placeholder="Buscar"
                        className={style.searchIcon}
                        value={search}
                        onChange={handleSearchChange}
                        endAdornment={(
                            <InputAdornment position="end">
                                <IconButton className={style.searchIconButton}>
                                    <SearchOutlined />
                                </IconButton>
                            </InputAdornment>
                        )}
                    />
                </FormControl>
            )}
        </Box>
    );
};

export default Search;
