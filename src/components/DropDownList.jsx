import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDownList() {
  const [ITEMS, setItem] = React.useState('');

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">ITEMS</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={ITEMS}
          label="ITEMS"
          onChange={handleChange}
        >
          <MenuItem value={"CONSOLAS"}>CONSOLAS</MenuItem>
          <MenuItem value={"JUEGOS"}>JUEGOS</MenuItem>
          <MenuItem value={"ACCESORIOS"}>ACCESORIOS</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}



