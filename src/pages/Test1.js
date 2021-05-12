import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ReactDOM from "react-dom";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";

// Free Material-UI Template
// https://react.school/material-ui/templates

const CustomColorCheckbox = withStyles({
  root: {
    color: "#13c552",
    "&$checked": {
      color: "black"
    }
  },
  checked: {}
})

((props) => <Checkbox color="default" {...props} />);

function Test1() {
  // Checkbox
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  // Checkbox Group
  const [flavors, setFlavors] = React.useState({
    chocolate: true,
    vanilla: false,
    strawberry: false
  });

  const { chocolate, vanilla, strawberry } = flavors;

  const handleFlavorChange = (event) => {
    setFlavors({ ...flavors, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      {/* <Typography variant="h5">Default Checkbox</Typography>
      <Checkbox checked={checked} onChange={handleChange} />

      <Typography variant="h5">Checkbox Primary Color</Typography>
      <Checkbox color="primary" checked={checked} onChange={handleChange} />

      <Typography variant="h5">Checkbox Disabled</Typography>
      <Checkbox
        disabled
        color="primary"
        checked={checked}
        onChange={handleChange}
      /> */}

      {/* <Typography variant="h5">Checkbox Custom Color</Typography>
      <CustomColorCheckbox checked={checked} onChange={handleChange} />

      <Typography variant="h5">Checkbox disableRipple</Typography>
      <Checkbox disableRipple checked={checked} onChange={handleChange} /> */}

      <Typography variant="h5">Checkbox small</Typography>
      <Checkbox size="small" checked={checked} onChange={handleChange} />

      <Typography variant="h5" gutterBottom>
        Checkbox with label
      </Typography>
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={handleChange} />}
        label="Check me"
      />

      {/* <Typography variant="h5" gutterBottom>
        Required Checkbox
      </Typography> */}

      {/* <form>
        <FormGroup>
          <FormControl>
            <FormControlLabel
              control={
                <Checkbox checked={checked} onChange={handleChange} required />
              }
              label="I agree to the terms"
            />
          </FormControl>
          <FormControl>
            <Button type="submit">Submit</Button>
          </FormControl>
        </FormGroup>
      </form> */}

      {/* <Typography variant="h5" gutterBottom>
        Checkbox Group
      </Typography>

      <FormControl component="fieldset">
        <FormLabel component="legend">Pick flavors</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={chocolate}
                onChange={handleFlavorChange}
                name="chocolate"
              />
            }
            label="Chocolate"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={vanilla}
                onChange={handleFlavorChange}
                name="vanilla"
              />
            }
            label="Vanilla"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={strawberry}
                onChange={handleFlavorChange}
                name="strawberry"
              />
            }
            label="Strawberry"
          />
           <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleChange}
                name="strawberry2"
              />
            }
            label="Strawberry2"
          />
        </FormGroup>
        <FormHelperText>
          Ice cream may be harmful, consult your doctor.
        </FormHelperText>
      </FormControl> */}
    </div>
  );
}

export default Test1;
