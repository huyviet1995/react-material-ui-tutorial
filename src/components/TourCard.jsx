import { Grid, Paper, Typography, Box, Rating } from "@mui/material";
import { AccessTime } from "@mui/icons-material";

const itemData = [
    {
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        title: "Breakfast",
        rows: 2,
        cols: 2,
    },
    {
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        title: "Burger",
    },
    {
        img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
        title: "Camera",
    },
    {
        img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
        title: "Coffee",
        cols: 2,
    },
    {
        img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
        title: "Hats",
        cols: 2,
    },
    {
        img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
        title: "Honey",
        author: "@arwinneil",
        rows: 2,
        cols: 2,
    },
    {
        img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
        title: "Basketball",
    },
    {
        img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
        title: "Fern",
    },
];

const TourCard = () => {
    return (
        <Grid item xs={3}>
            <Paper elevation={3} className="paper">
                <img
                    src={itemData[0].img}
                    alt="first"
                    className="img"
                />
                <Box paddingX={1}>
                    <Typography variant="subtitle1" component="h2">
                        Immerse into the fall.
                    </Typography>
                    <Box display={'flex'} sx={{ alignItems: 'center' }}>
                        <AccessTime sx={{ width: 12.5 }} />
                        <Typography variant="body2" component="paragraph" marginLeft={.5}>5 hours</Typography>
                    </Box>
                    <Box
                        display={'flex'}
                        sx={{ alignItems: 'center' }}
                        marginTop={3}
                    >
                        <Rating
                            value={4.5}
                            readOnly
                            precision={.5}
                            size="small"
                        />
                        <Typography variant="body2" component="paragraph" marginLeft={0.5}>
                            4.5
                        </Typography>
                        <Typography variant="body3" component="paragraph" marginLeft={0.5}>
                            (665 reviews)
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" component="h3" marginTop={0}>
                            From C $147
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    )
}

export default TourCard;