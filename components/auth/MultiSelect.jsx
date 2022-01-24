import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import { useField, useFormikContext } from 'formik';

const useStyles = makeStyles(() => ({
  formControl: {
    width: '100%' 
  },
  indeterminateColor: {
    color: "#f50057"
  },
  inputValue: {
    marginLeft: '10px'
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  },
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: "center",
    horizontal: "center"
  },
  transformOrigin: {
    vertical: "center",
    horizontal: "center"
  },
  variant: "menu"
};

const options = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder"
];

function MultiSelect({name, label, options, variant}) {
  const classes = useStyles();
  const [selected, setSelected] = useState([]);
  const { setFieldValue } = useFormikContext();

  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value)
    if (value[value.length - 1] === "all") {
      setSelected(selected.length === options.length ? [] : options);
      return;
    }
    setSelected(value);
    setFieldValue(name, value.join(', '));
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel className={classes.inputValue} id="mutiple-select-label">{label}</InputLabel>
      <Select
        labelId="mutiple-select-label"
        multiple
        value={selected}
        onChange={handleChange}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
        name={name}
        variant={variant || 'filled'}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            <ListItemIcon>
              <Checkbox checked={selected.indexOf(option) > -1} color={'primary'}/>
            </ListItemIcon>
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default MultiSelect;