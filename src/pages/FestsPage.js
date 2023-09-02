import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Container, Stack, Typography } from '@mui/material';
// components
import { ProductSort, ProductFilterSidebar } from '../sections/@dashboard/fest&clubs';
import FestList from '../sections/@dashboard/fest&clubs/FestList';

import Fests from '../_mock/fests.json';



export default function FestsPage() {
  
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
        <title> Dashboard: Fests | Minimal UI </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Fests
        </Typography>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 3 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack>
       
        <FestList Fests={Fests} />
        {/* here I will Pass my fests */}
        {/* side card */}
      </Container>
    </>
  );
}
