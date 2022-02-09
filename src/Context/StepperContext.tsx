import * as React from "react";
import { AccountDetails, JobDetails, UserDetails } from "Interfaces/SignUp";

interface IStepperContext {
  modalOpen: boolean;
  setModelOpen: React.Dispatch<React.SetStateAction<boolean>>;
  subModalOpen: boolean;
  setSubModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  accountDetails: AccountDetails;
  setAccountDetails: React.Dispatch<React.SetStateAction<AccountDetails>>;
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  selectedType: string;
  setSelectedType: React.Dispatch<React.SetStateAction<string>>;
  userDetails: UserDetails;
  setUserDetails: React.Dispatch<React.SetStateAction<UserDetails>>;
  jobDetails: JobDetails;
  setJobDetails: React.Dispatch<React.SetStateAction<JobDetails>>;
  handleNext: () => void;
  handleBack: () => void;
  handleFinish: () => void;
  handleSubcriptionModal: () => void;
}

const initialAccountDetails: AccountDetails = {
  account_type: "Individual",
  email: "",
  password: "",
  confirmPassword: ""
}

const initialuserDetails: UserDetails = {
  image: "",
  company_name: "",
  company_type: "",
  first_name: "",
  last_name: "",
  username: "",
  about: "",
  date_of_birth: null,
  country: {
    label: "Country",
    value: "null",
    countryCode: "null"
  },
  state: {
    label: "State",
    value: "null",
    countryCode: "null"
  },
  city: {
    label: "City",
    value: "null",
    countryCode: "null"
  },
  address: "",
  phone_number: ""
}

const initialjobDetails: JobDetails = {
  company_size: "",
  company_email: "",
  year_of_incorporation: "",
  industry: {
    label: "Select Industry",
    value: "null",
  },
  profession: "",
  skills: [],
  companyType: "",
}

export const StepperContext = React.createContext<IStepperContext>({} as IStepperContext);

export const StepperProvider: React.FC = ({ children }) => {
  const [modalOpen, setModelOpen] = React.useState<boolean>(false);
  const [subModalOpen, setSubModalOpen] = React.useState<boolean>(false);
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [selectedType, setSelectedType] = React.useState<string>("");
  const [accountDetails, setAccountDetails] = React.useState<AccountDetails>(initialAccountDetails);
  const [userDetails, setUserDetails] = React.useState<UserDetails>(initialuserDetails);
  const [jobDetails, setJobDetails] = React.useState<JobDetails>(initialjobDetails);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleFinish = () => {
    setActiveStep(0);
    setModelOpen(false);
    setAccountDetails(initialAccountDetails)
    setUserDetails(initialuserDetails)
    setJobDetails(initialjobDetails)
  };

  const handleSubcriptionModal = () => {
    setSubModalOpen(true);
  };

  return (
    <StepperContext.Provider
      value={{
        modalOpen,
        setModelOpen,
        subModalOpen,
        setSubModalOpen,
        drawerOpen,
        setDrawerOpen,
        accountDetails,
        setAccountDetails,
        activeStep,
        setActiveStep,
        selectedType,
        setSelectedType,
        userDetails,
        setUserDetails,
        jobDetails,
        setJobDetails,
        handleNext,
        handleBack,
        handleFinish,
        handleSubcriptionModal
      }}
    >
      {children}
    </StepperContext.Provider>
  );
};
