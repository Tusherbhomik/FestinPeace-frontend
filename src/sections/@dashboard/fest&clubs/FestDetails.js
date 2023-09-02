import * as React from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EventIcon from '@mui/icons-material/Event';
import { Box, FormControl, InputLabel, MenuItem, Select, Grid,InputAdornment } from '@mui/material';
import festivals from '../../../_mock/fests.json';

function FestDetails() {
  const { festid } = useParams();

  const festival = festivals[festid - 1];

  const [selectedEvent, setSelectedEvent] = React.useState('');

  const handleEventChange = (event) => {
    setSelectedEvent(event.target.value);
  };

  if (!festival) {
    return <div>Festival not found</div>;
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card sx={{ width: 800 }}>
        <CardMedia sx={{ height: 300 }} image={festival.image} title={festival.title} />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography gutterBottom variant="h5" component="div">
                {festival.title}
              </Typography>
              <Typography>{festival.duration}</Typography>
              <Typography>{festival.location}</Typography>
              <Typography>{festival.platinumSponsor}</Typography>
              <Typography>{festival.organizedBy}</Typography>
            </Grid>
            <Grid item xs={4}>
              <FormControl  varient ="outlined" sx={{ minWidth: 120 }}>
                <InputLabel>Events</InputLabel>
                <Select
                  value={selectedEvent}
                  onChange={handleEventChange}
                  startAdornment={
                    <InputAdornment position="start">
                      <EventIcon />
                    </InputAdornment>
                  }
                >
                  {festival.events.map((event, index) => (
                    <MenuItem key={index} value={event}>
                      {event}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default FestDetails;
