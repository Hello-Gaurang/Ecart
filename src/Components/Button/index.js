import React from 'react'
import { Button } from '@mui/material'

const StockButton = ({ children, onClick, ...props }) => {
  return (
    <div>
      <Button {...props} onClick={onClick}>
        {children}
      </Button>
    </div>
  )
}

export default StockButton
