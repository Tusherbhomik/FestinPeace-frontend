import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

import { Container, Stack, Typography } from '@mui/material';
import { ProductSort, ProductFilterSidebar } from '../sections/@dashboard/fest&clubs';
import ClubList from '../sections/@dashboard/fest&clubs/ClubList';

import Clubs from '../_mock/Clubs.json';



export default function ClubsPage() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };
  

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  

  return (
    <>
      <Helmet>
        <title> Dashboard: Clubs | Minimal UI </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Clubs
        </Typography>

        {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 3 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack> */}
       
        <ClubList Clubs={Clubs} />
        {console.log(Clubs)}
        {/* here I will Pass my fests */}
        {/* side card */}
      </Container>
    </>
  );
}
