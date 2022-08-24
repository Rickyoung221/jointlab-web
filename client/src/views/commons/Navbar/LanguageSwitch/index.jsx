import i18n from "../../../../i18n";
import React, { useState, Fragment } from "react";

import { languageOptions } from "@api/languageOptions";
import "./LanguageSwitch.css";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select,  { SelectChangeEvent } from '@mui/material/Select';

export default function LanguageSwitch() {
  const [lang, setLang] = useState("en");
  const changeLanguage = (e) => {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
  };
  const [age, setAge] = React.useState('en');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  
  const styles = theme => ({
    root: {
      background: "white",
      backgroundColor: "white"
    }
  });

  
  const customStyles = {
    container: () => ({
      width: 200,
    }),
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "red" : "blue",
    }),
    control: (base, state) => ({
      ...base,
      background: "transparent",
      // match with the menu
      borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "#1F4E79" : "#1F4E79",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? null : null,

        display: "flex",
      },
    }),

    menu: (base) => ({
      ...base,
      // override border radius to match the box
      borderRadius: 2,
      // kill the gap
      marginTop: 0,
    }),
    menuList: (base) => ({
      ...base,
      // kill the white space on first and last option
      padding: 0,
    }),
  };

  const classes = styles();


  return (
    <>
     
      <div className="languageSwitch">
        <select
          value={lang}
          onChange={(e) => changeLanguage(e)}
          className="form-select minimal"
          id="language-switcher"
        >
          <option className="MuiSelect-root" value="zh"> 中文 </option>
          <option value="en"> ENGLISH </option>
          <option value="ar"> العربية </option>
        </select>
      </div>

      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select
        
          value={lang}
          onChange={changeLanguage}
          displayEmpty

          autoWidth

        >
          <MenuItem classes={{ paper: classes.menuPaper }} value="zh">中文</MenuItem>
          <MenuItem value="en">ENGLISH </MenuItem>
          <MenuItem value="ar">العربية </MenuItem>
        </Select>
        </FormControl>
    </>
  );
}
