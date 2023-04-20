import React from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
const StockCard = () => {
  return (
    <div>
      <div>
        <Grid container>
          <Grid item xs={6}>
            <Card />
          </Grid>
          <Grid item xs={6}>
            <Card />
          </Grid>
          <Grid item xs={6}>
            <Card />
          </Grid>
          <Grid item xs={6}>
            <Card />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default StockCard
