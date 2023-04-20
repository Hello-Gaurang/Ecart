/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useDispatch, useSelector } from 'react-redux'
import { category, aLLcategory } from '../../Redux/Category/action'

export default function MultipleSelect() {
  const disptach = useDispatch()
  const list = useSelector((state) => state.categoryReducer.allItem)
  useEffect(() => {
    disptach(aLLcategory())
  }, [])

  const handleChange = (event) => {
    let categoryList = event.target.value
    disptach(category(categoryList))
  }

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label" variant="outlined">
          Category
        </InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
        >
          {list?.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
