import React from 'react'
// import CardActions from '@mui/material/CardActions'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
// import { useSelector } from 'react-redux'

const StockCard = () => {
  // const productList = useSelector((item) => item.product.productlist.products)
  return (
    <div style={{ display: 'flex', widht: '100%' }}>
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
  )
}

export default StockCard
