import * as React from "react";

interface IDrawerContext {
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  createCardOpen: boolean;
  setCreateCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openSetting: boolean;
  setOpenSetting: React.Dispatch<React.SetStateAction<boolean>>;
  settingTab: number;
  setSettingTab: React.Dispatch<React.SetStateAction<number>>;
  // eslint-disable-next-line @typescript-eslint/ban-types
  handleTabChange: (event: React.ChangeEvent<{}>, newValue: number) => void
  settingModalOpen: boolean;
  setSettingModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  chatModalOpen: boolean;
  setChatModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  showSettingTabs: boolean;
  setShowSettingsTab: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
  handleCloseChat: () => void;
}

export const DrawerContext = React.createContext<IDrawerContext>({} as IDrawerContext);

export const DrawerProvider: React.FC = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
  const [createCardOpen, setCreateCardOpen] = React.useState<boolean>(false);
  const [openSetting, setOpenSetting] = React.useState<boolean>(false);
  const [settingTab, setSettingTab] = React.useState<number>(0);
  const [settingModalOpen, setSettingModalOpen] = React.useState<boolean>(false);
  const [chatModalOpen, setChatModalOpen] = React.useState<boolean>(false);
  const [showSettingTabs, setShowSettingsTab] = React.useState<boolean>(false)

  const handleClose = () => { setSettingModalOpen(!settingModalOpen); };

  const handleCloseChat = () => { setChatModalOpen(false); };

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => { setSettingTab(newValue); };

  return (
    <DrawerContext.Provider
      value={{
        drawerOpen,
        setDrawerOpen,
        createCardOpen,
        setCreateCardOpen,
        openSetting,
        setOpenSetting,
        settingTab,
        setSettingTab,
        handleTabChange,
        settingModalOpen,
        setSettingModalOpen,
        handleClose,
        showSettingTabs,
        setShowSettingsTab,
        chatModalOpen,
        setChatModalOpen,
        handleCloseChat
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
