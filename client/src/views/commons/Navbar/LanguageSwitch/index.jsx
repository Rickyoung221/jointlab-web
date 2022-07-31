
import { MDBIcon } from "mdb-react-ui-kit";
import i18n from "../../../../i18n";
import React, { useState, Fragment } from "react";
import Select from 'react-select';
import { languageOptions } from "@api/languageOptions";
import './LanguageSwitch.css';

export default function LanguageSwitch(){
    const [lang, setLang] = useState('en')
    const changeLanguage = (e) => {
        setLang(e.target.value)
        i18n.changeLanguage(e.target.value)
    }

    const customStyles = {
      container:() => ({
        width: 200,
      }),
      option: (provided, state) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        color: state.isSelected ? 'red' : 'blue',
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
        
        display: 'flex',

        }
      }),

      menu: base => ({
        ...base,
        // override border radius to match the box
        borderRadius: 2,
        // kill the gap
        marginTop: 0,
      }),
      menuList: base => ({
        ...base,
        // kill the white space on first and last option
        padding: 0,
      })
  
    };
  
    return(
      <>
      <div className="languageSwitch">
        <select value={lang} onChange={(e)=>changeLanguage(e)} className="form-select minimal" id="language-switcher">
          <option value="zh"> <MDBIcon flag='china' /> 中文 </option>
          <option value="en"> <MDBIcon flag='united-states' /> ENGLISH </option>
          <option value="ar"> <MDBIcon flag='saudi-arabia' /> العربية </option>
        </select>
      </div>
      </>
      
      
    )
}


