import React , {useContext} from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Element from "../Element";
import { ElementContext } from "../../../storage/elements-context";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
let cx = classNames.bind(styles);
const Sort = ({handleCategory,category}) => {


  return (
    <div className={cx("display")}>
    <label>Change Display Style</label>
    <Select
      value={category || ""}
      onChange={handleCategory}
      displayEmpty
      className={cx("selector")}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={"Nonmetal"}>Nonmetal</MenuItem>
      <MenuItem value={"Noble Gas"}>Noble Gas</MenuItem>
      <MenuItem value={"Alkali Metal"}>Alkali Metals</MenuItem>
      <MenuItem value={"Post-transition Metal"}>Post-Transition Metals</MenuItem>
      <MenuItem value={"Transition Metal"}>Transition Metals</MenuItem>
      <MenuItem value={"Alkaline earth metal"}>Alkaline Earth Metals</MenuItem>
      <MenuItem value={"Metalloid"}>Metalloid</MenuItem>
      <MenuItem value={"Halogen"}>Halogen</MenuItem>
      <MenuItem value={"Lanthanide"}>Lanthanide</MenuItem>
      <MenuItem value={"Actinide"}>Actinide</MenuItem>
    </Select>
  </div>
  )
}

export default Sort