import { Container, Typography, Box } from "@mui/material";
import ImageCollage from '../components/ImageCollage'

const Tour = () => {
    return (
        <Container sx={{ width: 800 }}>
            <Typography variant="h3" component="h1">
                Explore the World in Vegas
            </Typography>
            <Box marginTop={3} sx={{ display: 'flex', width: '100%' }}>
                <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="breakfast" height={325} />
                <ImageCollage></ImageCollage>
            </Box>
        </Container>
    )   
}

export default Tour;