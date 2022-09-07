import  React,{useContext} from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { multiStepContext } from "../../ContextApi/StepContext";
import PersonalInformationData from "../ycw/StepperFormComponent.js/PersonalInformationData";
import AddressInformation from "../ycw/StepperFormComponent.js/AddressInformation";


const steps = [
  "PERSONAL DATA",
  "ADDRESS DATA",
  "SKILL DATA",
  "JOB DATA",
  "BANK DATA",
  "HOUSEHOLD DATA",
  "DOCUMENT DATA",
];

function YcwStepper() {
    const {currentSteps} = useContext(multiStepContext)

    function showSteps(steps){
        switch(steps){
            case 1 : return <PersonalInformationData/>
            case 2 : return <AddressInformation/>
        }
        
    }
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={currentSteps-1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      {showSteps(currentSteps)}
    </div>
  );
}

export default YcwStepper;
