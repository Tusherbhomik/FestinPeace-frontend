import PropTypes from 'prop-types';
// @mui
import { Grid } from '@mui/material';
import ShowClubCard from './ClubCard';

// ----------------------------------------------------------------------

ClubList.propTypes = {
  Clubs: PropTypes.array.isRequired,
};

export default function ClubList({Clubs,...other}) {
  console.log(Clubs)
  
  return (
    <Grid container spacing={3}{...other} >
      {Clubs.map((Club) => (
        <Grid key={Club.id} item xs={12} sm={6} md={3}>
          <ShowClubCard club={Club} />
        </Grid>
      ))}
    </Grid>
  );
}
