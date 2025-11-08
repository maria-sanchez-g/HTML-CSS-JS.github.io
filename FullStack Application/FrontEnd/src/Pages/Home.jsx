import { useNavigate} from 'react-router-dom'
import { Grid } from '@mui/material';

export default function Home() {
    const navigate = useNavigate(); //Built in hook. This creates a constant called navigate.
    return (
        <div className="HomePage">
        <h1>Home Page</h1> 
        <Grid container spacing={2}>
            <Grid size={8}>
                <Item>size=8</Item>
            </Grid>
            <Grid size={4}>
                <Item>size=4</Item>
            </Grid>
            <Grid size={4}>
                <Item>size=4</Item>
            </Grid>
            <Grid size={8}>
                <Item>size=8</Item>
            </Grid>
        </Grid>
    );
}