import { useState } from 'react';
import { useRouter } from 'next/router';
import {
    Box,
    Button,
    FormControl,
    Input
} from '@mui/material';

const SearchBar = () => {
    const router = useRouter();
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (search !== '') {
            const encodedSearch = encodeURIComponent(search.toLowerCase())
            router.push(`/search/${encodedSearch}`)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                overflow: 'hidden',
                borderRadius: '30px',
                backgroundColor: 'white',
                pl: '20px',
                height: '46px',
            }}
            >
                <FormControl
                    fullWidth
                >
                    <Input
                        type="text"
                        disableUnderline
                        value={search}
                        onChange={handleChange}
                        placeholder="Search for a movie, tv show, person..."
                    />
                </FormControl>
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                        borderRadius: '30px',
                        height: '100%'
                    }}
                    type="submit"
                >
                    Search
                </Button>
            </Box>
        </form>
    );
};

export default SearchBar;
