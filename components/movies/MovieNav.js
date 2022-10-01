import {
    Typography,
    Box,
    Button,
} from '@mui/material';

export default function MovieNav({ categories, active, handleClick }) {
    return (
        <nav>
            <Box sx={{ display: 'flex' }}>
                {categories.map(category => {
                    const isActive = category.id === active
                    return (
                        <Button
                            key={category.id}
                            variant="contained"
                            color="secondary"
                            onClick={() => handleClick(category.id)}
                        >
                            {category.displayName}
                        </Button>
                    )
                })}
            </Box>
        </nav>
    )
}
