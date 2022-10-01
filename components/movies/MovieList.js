import Link from 'next/link';
import {
    Box,
    Card,
    CardMedia,
    Container,
    Typography,
} from '@mui/material';
import {
    Star as StarIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const RatingDisplay = styled(Box)(({ theme }) => ({
    position: 'absolute',
    left: 10,
    bottom: -20,
    borderRadius: '30px',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    display: 'flex',
    alignItems: 'center',
    padding: '5px 10px',
    border: '2px solid white'
}));

const HorizontalScrollContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    overflowY: 'auto',
    paddingBottom: '12px',
    '&::-webkit-scrollbar': {
        background: 'transparent',
        height: '8px'
    },
    '&::-webkit-scrollbar-thumb': {
        background: theme.palette.grey[300],
        borderRadius: '20px'
    }
}));

function MovieList({ results }) {
    return (
        <HorizontalScrollContainer disableGutters>
            {results?.map(({ id, title, release_date, vote_average, poster_path }) => {
                return (
                    <Link key={id} href={`/movies/${id}`}>
                            <Box sx={{ mx: '10px', cursor: 'pointer' }}>
                                <Box sx={{ position: 'relative', overflow: 'visible', marginBottom: '20px' }}>
                                    <Card sx={{ position: 'relative', height: '225px', width: '150px' }}>
                                        <CardMedia
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                right: 0,
                                                height: "100%",
                                                width: "100%"
                                            }}
                                            component="img"
                                            image={`https://image.tmdb.org/t/p/w500${poster_path}`}
                                            alt="Hero background cover"
                                        />
                                    </Card>
                                    <RatingDisplay>
                                        <StarIcon fontSize="small" sx={{ color: 'orange', marginRight: '5px' }} />
                                        <Typography variant="body2">
                                            {vote_average.toFixed(1)}
                                        </Typography>
                                    </RatingDisplay>
                                </Box>
                                <Box>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                        {title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {new Date(release_date).toLocaleDateString("en-US", {year: 'numeric', month: 'short', day: 'numeric'})}
                                    </Typography>
                                </Box>
                            </Box>
                    </Link>
                )
            })}
        </HorizontalScrollContainer>
    )
}

export default MovieList
