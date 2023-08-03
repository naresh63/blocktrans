import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';



const selectStyle = {
    '& .MuiSelect-selectMenu': {
      minHeight: '40px', // Adjust the height as needed
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
      padding: '8px 12px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      backgroundColor: '#fff',
      color: '#333',
      cursor: 'pointer',
    },
  };

  const menuItemStyle = {
    borderBottom: '1px solid blue',
    color: 'black',
    '&.Mui-selected': {
    //   backgroundColor: 'transparent', // Customize the selected option background color
    //   color: '#fff', // Customize the selected option text color
    },
    '&.Mui-selected:hover': {
      backgroundColor: 'transparent', // Customize the selected option background color on hover
    },
    '&:hover': {
    //   backgroundColor: '#f3f3f3', // Customize the background color of options on hover
    },
    '&:last-child': {
        borderBottom: '1px solid transparent',  
        backgroundColor: 'transparent',
    },
  };
  

  const MyCustomSelect = () => {
    const [selectedValue, setSelectedValue] = React.useState('');
  
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  
    return (
      <FormControl fullWidth variant="outlined" sx={selectStyle}>
        <InputLabel>Custom Select</InputLabel>
        <Select value={selectedValue} onChange={handleChange} label="Custom Select">
        <MenuItem value="option1" sx={menuItemStyle}>
          Option 1
        </MenuItem>
        <MenuItem value="option2" sx={menuItemStyle}>
          Option 2
        </MenuItem>
        <MenuItem value="option3" sx={menuItemStyle}>
          Option 3
        </MenuItem>
          {/* Add more menu items as needed */}
        </Select>
      </FormControl>
    );
  };

  export default MyCustomSelect;