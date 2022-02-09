import * as React from "react";

interface ICardInfoContext {
  cardInfoOpen: boolean;
  setCardInfoOpen: React.Dispatch<React.SetStateAction<boolean>>;
  showCardInfo: boolean;
  setShowCardInfo: React.Dispatch<React.SetStateAction<boolean>>;
  companyProfie: string;
  setCompanyProfie: React.Dispatch<React.SetStateAction<string>>;
}

export const CardInfoContext = React.createContext<ICardInfoContext>(
  {} as ICardInfoContext
);

export const CardInfoProvider: React.FC = ({ children }) => {
  const [cardInfoOpen, setCardInfoOpen] = React.useState<boolean>(false);
  const [showCardInfo, setShowCardInfo] = React.useState<boolean>(false);
  const [companyProfie, setCompanyProfie] = React.useState<string>("");

  return (
    <CardInfoContext.Provider
      value={{
        cardInfoOpen,
        setCardInfoOpen,
        showCardInfo,
        setShowCardInfo,
        companyProfie,
        setCompanyProfie
      }}
    >
      {children}
    </CardInfoContext.Provider>
  );
};
