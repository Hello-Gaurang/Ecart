import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from '../../Components/Header'
import { removeCart } from '../../Redux/Cart/action'
import { Button } from '../../Components/Form'

import './style.css'

const ECart = () => {
  const data = useSelector((state) => state.EcartReducer)
  const [cart, setCart] = useState(data)
  const dispatch = useDispatch()
  console.log(data)
  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.tabId !== id)
    setCart(newCart)
    dispatch(removeCart(newCart))
  }
  const duplicates = data.reduce((acc, item, index, arr) => {
    const duplicatedItemIndex = arr.findIndex(
      (innerItem, innerIndex) =>
        innerIndex === index && innerItem.id === item.id,
    )

    if (
      duplicatedItemIndex !== -1 &&
      !acc.some((accItem) => accItem.id === item.id)
    ) {
      const count = arr.filter((innerItem) => innerItem.id === item.id).length
      acc.push({ ...item, count })
    }
    return acc
  }, [])

  console.log(duplicates)
  console.log(duplicates.length)
  return (
    <div className="Cart-Div">
      <Navbar />
      <div className="cart-Total">
        <div className="cart-Heading">
          <label className="lab">Cart Details</label>
          <hr />
          {duplicates?.map((item, i) => (
            <div className="first-Map">
              <p className="abc">{item.title}</p>
              <p className="abc">Rs: {item.price}</p>
              <p className="abc">Item: {item.count}</p>
              <p className="abc">Total = {item.count * item.price}</p>
              <img className="cart-img" src={item.thumbnail} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="cart-Detail">
        {cart?.map((list, index) => (
          <div className="Mdiv" key={list.tabId}>
            <div className="cart-Map">
              <h4 className="title">{list?.title}</h4>
            </div>
            <div>
              <h5>Rs: {list?.price}</h5>
            </div>
            <div>
              <h5>Discount: {list?.discountPercentage}%</h5>
            </div>
            <div>
              <Button
                variant="contained"
                className="list-btn"
                onClick={() => removeItem(list.tabId)}
              >
                Remove-Item
              </Button>
            </div>
            <img className="img" src={list?.thumbnail} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ECart
