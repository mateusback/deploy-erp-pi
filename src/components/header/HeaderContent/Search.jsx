// IMPORT MUI COMPONENTS 
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import { SearchOutlined } from '@mui/icons-material';
import { InputLabel } from '@mui/material';

const Search = () => {
    return (
        <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }}>
            <FormControl sx={{ width: { xs: '100%', md: 400 } }}>
                <OutlinedInput
                    size="small"
                    id="header-search"
                    startAdornment={
                        <InputAdornment position="end" sx={{ mr: 1 }}>
                            <SearchOutlined />
                        </InputAdornment>
                    }
                    aria-describedby="header-search-text"
                    inputProps={{
                        'aria-label': 'weight'
                    }}
                    placeholder="Buscar..."
                />
            </FormControl>
        </Box>
    );
}

export default Search;