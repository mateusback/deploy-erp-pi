// IMPORT MUI COMPONENTS 
import { FormControl } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import { SearchOutlined } from '@mui/icons-material';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import './Content.css';

const CunstomInput = styled(InputBase)(({ theme }) => ({
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
    return (
        <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }}>
            <FormControl sx={{ width: { xs: '100%', md: 400 } }}>
                <CunstomInput
                    size="small"
                    className='search-icon'
                    placeholder="Buscar"
                    endAdornment={
                        <InputAdornment sx={{ mr: 0.3 }}>
                            <SearchOutlined />
                        </InputAdornment>
                    }
                />
            </FormControl>
        </Box>
    );
}

export default Search;
