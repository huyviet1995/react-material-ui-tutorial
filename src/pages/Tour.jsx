import { Container, Typography, Box, Paper, BottomNavigation } from "@mui/material";
import CustomizedAccordians from "../components/Accordian";
import StaticDateRangePickerDemo from "../components/DateRangePicker";
import ImageCollage from '../components/ImageCollage'
import BasicModal from "../components/Modal";

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
            <Box>
                <Typography variant="h6" component="h4" marginTop={3}>
                    About this ticket
                </Typography>
                <Typography variant="paragraph" component="p">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus praesentium quod aspernatur exercitationem nihil dolorum ratione alias, reiciendis, aliquid unde corporis, reprehenderit eum maiores cupiditate autem earum illum aut. Neque.
                </Typography>
            </Box>
            <Box marginBottom={10}>
                <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
                    Frequently asked questions
                </Typography>
                <CustomizedAccordians />
            </Box>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
                <BottomNavigation showLabels>
                    <BasicModal>
                        <StaticDateRangePickerDemo />
                    </BasicModal>
                </BottomNavigation>
            </Paper>
        </Container>
    )   
}

export default Tour;