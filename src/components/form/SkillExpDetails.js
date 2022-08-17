import React from "react";
import { Box, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Cuisines, JobType, Language } from "../../AlllData";


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function SkillExpDetails() {
  const [age, setAge] = React.useState("");
  const [primarySkill, setPrimarySkill] = React.useState("");
  const [secondarySkill, setSecondarySkill] = React.useState("");
  const [tertiarySkill, setTertiarySkill] = React.useState("");
  const [skillRemarks, setSkillRemarks] = React.useState("");
  const [vegNonveg, setVegNonveg] = React.useState("");
  const [cuisinesKnown, setCuisinesKnown] = React.useState([]);
  const [primaryLanguage, setPrimaryLanguage] = React.useState();
  const [otherLanguages, setOtherLanguages] = React.useState();
  const [totalExp, setTotalExp] = React.useState();
  const [experienceRemarks, setExperienceRemarks] = React.useState();
  const [lastJobType, setLastJobType] = React.useState();
  const [lastJobDuration, setLastJobDuration] = React.useState();
  const [ReasonLeaving, setReasonLeaving] = React.useState();

  console.log("cusins is ", cuisinesKnown);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box marginTop={7}   
    sx={{
      display: "grid",
      gap: 1,
    }}>
      <h5 >Skill and Experience Details</h5>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          rowGap: "30px",
          justifyContent:"space-between"

        }}
      >
        <FormControl sx={{  minWidth: 120, width:"48.5%" }} size="small">
          <InputLabel id="demo-select-small">Primary Skill</InputLabel>
          <Select
            sx={{ width:"100%"}}
            labelId="demo-select-small"
            id="demo-select-small"
            label="Primary Skill"
            onChange={(e) => {
              setPrimarySkill(e.target.value);
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {JobType.map((items)=>(
              <MenuItem value={items.job}>{items.job}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{  minWidth: 120, width:"48.5%" }} size="small">
          <InputLabel id="demo-select-small">Secondary Skill</InputLabel>
          <Select
            sx={{ width: "100%" }}
            labelId="demo-select-small"
            id="demo-select-small"
            label="Secondary Skill"
            onChange={(e) => {
              setSecondarySkill(e.target.value);
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {JobType.map((items)=>(
              <MenuItem value={items.job}>{items.job}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 120, width:"48.5%" }} size="small">
          <InputLabel id="demo-select-small">Tertiary Skill</InputLabel>
          <Select
            sx={{ width: "100%" }}
            labelId="demo-select-small"
            id="demo-select-small"
            label="Tertiary Skill"
            onChange={(e) => {
              setTertiarySkill(e.target.value);
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {JobType.map((items)=>(
              <MenuItem value={items.job}>{items.job}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          sx={{ width:"48.5%", }}
          size="small"
          id="outlined-basic"
          label="Skill Remarks"
          variant="outlined"
          onChange={(e) => {
            setSkillRemarks(e.target.value);
          }}
        />

        <FormControl sx={{ minWidth: 120, width:"48.5%" }} size="small">
          <InputLabel id="demo-select-small">Can Cook Veg/Non-veg?</InputLabel>
          <Select
            sx={{ width: "100%" }}
            labelId="demo-select-small"
            id="demo-select-small"
            label="Can Cook Veg/Non-veg?"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Only Veg"}>Only Veg</MenuItem>
            <MenuItem value={"Both Veg & Non-veg"}>Both Veg & Non-Veg</MenuItem>
          </Select>
        </FormControl>

        <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={Cuisines}
          disableCloseOnSelect
          getOptionLabel={(option) => option.dish}
          onChange={(event, newValue) => {
            setCuisinesKnown([...newValue]);
          }}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.dish}
            </li>
          )}
          style={{ width: "48.5%" }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Cuisines"
              placeholder="Favorites"
              size="small"
            />
          )}
        />

        <FormControl sx={{ minWidth: 120, width:"31.5%" }} size="small">
          <InputLabel id="demo-select-small">Primary Language</InputLabel>
          <Select
            sx={{ width: "100%" }}
            labelId="demo-select-small"
            id="demo-select-small"
            label="Primary Language"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {Language.map((items) => (
              <MenuItem value={items.language}>{items.language}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={Language}
          disableCloseOnSelect
          getOptionLabel={(option) => option.language}
          onChange={(event, newValue) => {
            setOtherLanguages([...newValue]);
          }}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.language}
            </li>
          )}
          style={{ width: "31.5%" }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Other Languages"
              placeholder="Favorites"
              size="small"
            />
          )}
        />

        <TextField
          sx={{ width: "31.5%" }}
          size="small"
          id="outlined-basic"
          label="Total Experience"
          variant="outlined"
          onChange={(e) => {
            setTotalExp(e.target.value);
          }}
        />

<TextField
          sx={{ width: "48.5%" }}
          size="small"
          id="outlined-basic"
          label="Experience Remarks"
          variant="outlined"
          onChange={(e) => {
            setExperienceRemarks(e.target.value);
          }}
        />

<Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={JobType}
          disableCloseOnSelect
          getOptionLabel={(option) => option.job}
          onChange={(event, newValue) => {
            setLastJobType([...newValue]);
          }}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.job}
            </li>
          )}
          style={{ width: "48.5%" }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Last Job Type"
              placeholder="Type..."
              size="small"
            />
          )}
        />


    <TextField
          sx={{ width: "48.5%" }}
          size="small"
          id="outlined-basic"
          label="Last Job Duration(in months)"
          placeholder="mm.."
          variant="outlined"
          onChange={(e) => {
            setLastJobDuration(e.target.value);
          }}
        />

           <TextField
          sx={{ width: "48.5%" }}
          size="small"
          id="outlined-basic"
          label="Reason For Leaving Last Job"
          variant="outlined"
          onChange={(e) => {
            setReasonLeaving(e.target.value);
          }}
        />
      </Box>
    </Box>
  );
}

export default SkillExpDetails;
