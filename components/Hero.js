import {
    Container,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: theme.palette.secondary.contrastText,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    padding: '30px 40px',
}));

import SearchBar from './SearchBar';

const Hero = () => {
    return (
        <Container disableGutters>
            <Card sx={{ position: 'relative', height: '300px', borderRadius: 0 }}>
                <CardMedia
                    sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        height: "100%",
                        width: "100%",
                    }}
                    component="img"
                    image="/assets/images/hero.jpeg"
                    alt="Hero background cover"
                />
                <CustomBox>
                    <Box sx={{ paddingBottom: 4 }}>
                        <Typography variant="h3">
                            Welcome
                        </Typography>
                        <Typography variant="h6">
                            Millions of movies, TV shows and people to discover. Explore now.
                        </Typography>
                    </Box>
                    <SearchBar />
                </CustomBox>
            </Card>
        </Container>
    );
};

export default Hero;
