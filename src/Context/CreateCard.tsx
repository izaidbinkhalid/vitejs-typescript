import * as React from "react";

// type Conatct = {
//   name: string;
//   link: string;
// };
interface ICreateCardContext {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  website: string;
  setWebsite: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  showCardInfo: boolean;
  setShowCardInfo: React.Dispatch<React.SetStateAction<boolean>>;
  comapnyType: string;
  setCompanyType: React.Dispatch<React.SetStateAction<string>>;
  showInstitution: boolean;
  setShowInstitution: React.Dispatch<React.SetStateAction<boolean>>;
  institutionButton: boolean;
  setInstitutionButton: React.Dispatch<React.SetStateAction<boolean>>;
  showCardType: string;
  setShowCardType: React.Dispatch<React.SetStateAction<string>>;
  createCardOpen: boolean;
  setCreateCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  handleNext: () => void;
  handleBack: () => void;
  handleFinish: () => void;
}

export const CreateCardContext = React.createContext<ICreateCardContext>(
  {} as ICreateCardContext
);

export const CreateCardProvider: React.FC = ({ children }) => {
  const [createCardOpen, setCreateCardOpen] = React.useState<boolean>(false);
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [comapnyType, setCompanyType] = React.useState<string>("");
  const [showCardInfo, setShowCardInfo] = React.useState<boolean>(false);
  const [showCardType, setShowCardType] = React.useState<string>("");
  const [showInstitution, setShowInstitution] = React.useState<boolean>(false);
  const [institutionButton, setInstitutionButton] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>("abc@email.com");
  const [website, setWebsite] = React.useState<string>("https://www.website.com");
  const [phone, setPhone] = React.useState<string>("tel:+1234567890");

  const handleNext = () => {
    if (activeStep === 1) {
      setCreateCardOpen(false);
      setActiveStep(0);
    } else {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleFinish = () => {
    setCreateCardOpen(false);
  };

  return (
    <CreateCardContext.Provider
      value={{
        createCardOpen,
        setCreateCardOpen,
        showCardInfo,
        setShowCardInfo,
        showCardType,
        setShowCardType,
        comapnyType,
        setCompanyType,
        showInstitution,
        setShowInstitution,
        institutionButton,
        setInstitutionButton,
        activeStep,
        setActiveStep,
        handleNext,
        handleBack,
        handleFinish,
        email,
        setEmail,
        website,
        setWebsite,
        phone,
        setPhone
      }}
    >
      {children}
    </CreateCardContext.Provider>
  );
};
