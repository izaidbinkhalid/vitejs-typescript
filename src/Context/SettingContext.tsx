import * as React from "react";

interface ISettingContext {
  settingModalOpen: boolean;
  setSettingModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
}

export const SettingContext = React.createContext<ISettingContext>({} as ISettingContext);

export const SettingProvider: React.FC = ({ children }) => {
  const [settingModalOpen, setSettingModalOpen] = React.useState<boolean>(false);

  const handleClose = () => {
    setSettingModalOpen(!settingModalOpen);
  };

  return (
    <SettingContext.Provider
      value={{ settingModalOpen, setSettingModalOpen, handleClose }}
    >
      {children}
    </SettingContext.Provider>
  );
};
