import PropTypes from 'prop-types';
// @mui
import { Grid } from '@mui/material';
import ShowFestCard from './FestCard';

// ----------------------------------------------------------------------

FestList.propTypes = {
  Fests: PropTypes.array.isRequired,
};

export default function FestList({Fests,...other}) {
  // console.log(Fests)
  
  return (
    <Grid container spacing={3}{...other} >
      {Fests.map((Fest) => (
        <Grid key={Fest.id} item xs={12} sm={6} md={3}>
          <ShowFestCard fest={Fest} path ={`/festdetails/${Fest.id}`}/>
        </Grid>
      ))}
    </Grid>
  );
}
