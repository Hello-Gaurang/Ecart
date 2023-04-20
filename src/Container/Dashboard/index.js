/* eslint-disable react-hooks/exhaustive-deps */
// import { ToastContainer, toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { getProduct } from '../../Redux/Product/action'
import { eCart } from '../../Redux/Cart/action'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from '../../Components/Header'
import { Button } from '../../Components/Form'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Spin } from 'antd'
import { v4 as uuid } from 'uuid'
import './style.css'

const Dashboard = () => {
  const dispatch = useDispatch()
  // const notify = () => toast('Wow so easy!')
  const productList = useSelector((item) => item.product.productlist.products)
  const data = useSelector((item) => item.categoryReducer.listItem?.products)
  const [products, setProducts] = useState([])
  const loading = useSelector((state) => state.product.loading)
  console.log(loading)

  useEffect(() => {
    dispatch(getProduct())
  }, [data])

  useEffect(() => {
    const seleceData = data ? data : productList
    setProducts(seleceData)
  }, [productList])

  const singleProduct = (icart) => {
    const unique_id = uuid()
    const newCart = { ...icart, tabId: unique_id }
    dispatch(eCart(newCart))
  }

  return (
    <div>
      <Spin spinning={loading}>
        <Navbar />
        <Grid container spacing={4}>
          {Array.isArray(products) &&
            products.map((list, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Card>
                  <CardMedia
                    component="img"
                    height="250"
                    image={list.thumbnail}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {list.title}
                    </Typography>
                    <div>
                      {'Price: '}
                      <span className="greaColor">${list.price}</span>
                    </div>
                    <div>
                      <Button
                        className="cart-btn"
                        variant="contained"
                        onClick={() => singleProduct(list)}
                      >
                        Add to cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Spin>
    </div>
  )
}

export default Dashboard
