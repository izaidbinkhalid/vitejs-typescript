import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { BigCard } from "Components/Card/BigCard";
import { BigCardSimple } from "Components/Card/BigCardSimple";
import { Employer } from "./Employer";
import { Clicks } from "./Clicks";
import { HeaderCompany } from "./HeaderCompany";
import { HeaderSimple } from "./HeaderSimple";
import { Grid } from "@material-ui/core";
import { CardInfoContext } from "Context/CardInfo";
import { ARMarker } from "./ARMarker";
import { QRcode } from "./QRcode";

export interface IntialValues {
  readonly email: string;
  readonly website: string;
  readonly phone: string;
}

interface Props {
  readonly checked: boolean;
  readonly setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    removeOverflow: {
      overflow: "hidden"
    }
  })
);

const CardInfo: React.FC<Props> = Props => {
  const classes = useStyles();

  const intialValues = {
    email: "abc@email.com",
    website: "web@site.com",
    phone: "+123456789"
  };
  const [formValues, setFormValues] = React.useState<IntialValues>(intialValues);
  const [showHeader, setShowHeader] = React.useState<boolean>(false);
  const [headerImage, setHeaderImage] = React.useState<string>("");
  const [headerName, setHeaderName] = React.useState<string>("");
  const [headerTitle, setHeaderTitle] = React.useState<string>("");
  const [headerUsername, setHeaderUsername] = React.useState<string>("");
  const { showCardInfo, companyProfie } = React.useContext(CardInfoContext);

  return (
    <Grid container justifyContent="space-around" spacing={2}>
      {/* ---------------------------------- */}
      {/* Section Of Card Information */}
      {/* ---------------------------------- */}

      <Grid item xs={12} sm={12} md={4} lg={4}>
        {companyProfie !== "business" ? (
          <BigCardSimple
            checked={Props.checked}
            setChecked={Props.setChecked}
            showInfo={showCardInfo}
            headerImage={headerImage}
            headerName={headerName}
            headerTitle={headerTitle}
            headerUsername={headerUsername}
            showHeader={showHeader}
            about="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
            companyName="Company LLC"
            companyType="Designing Work"
            image="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            contactInfo={[
              {
                name: "facebook",
                link: ""
              }
            ]}
            background="#414546B2"
          />
        ) : (
          <BigCard
            checked={Props.checked}
            setChecked={Props.setChecked}
            showInfo={showCardInfo}
            about="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
            companyName="Company LLC"
            companyType="Designing Work"
            image="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            contactInfo={[
              {
                name: "facebook",
                link: ""
              }
            ]}
            background="#414546B2"
          />
        )}
      </Grid>

      {/* ---------------------------------- */}
      {/* Section Of QR Code | AR Marker | Header Change | Insight */}
      {/* ---------------------------------- */}

      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Grid className={classes.removeOverflow} container justifyContent="center">
          <Grid container style={{ display: "flex", justifyContent: "center" }}>
            <ARMarker />
            <QRcode value={"https://sailspad-client.vercel.app/"} />
          </Grid>
          {companyProfie === "business" ? (
            <HeaderCompany formValues={formValues} setFormValues={setFormValues} />
          ) : (
            <div>
              <HeaderSimple
                setHeaderImage={setHeaderImage}
                setHeaderName={setHeaderName}
                setHeaderTitle={setHeaderTitle}
                setHeaderUsername={setHeaderUsername}
                setShowHeader={setShowHeader}
                cards={[
                  {
                    image:
                      "https://images.unsplash.com/photo-1614231125961-38323d6c485b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
                    name: "Subsidiary company",
                    title: "Industry of things",
                    username: "Companyxyz",
                    email: "abc@gmail.com",
                    website: "web@site.com",
                    phone: "+1234567890"
                  },
                  {
                    image:
                      "https://images.unsplash.com/photo-1619551734325-81aaf323686c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80",
                    name: "Subsidiary company",
                    title: "Industry of things",
                    username: "Companyxyz",
                    email: "abc@gmail.com",
                    website: "web@site.com",
                    phone: "+1234567890"
                  },
                  {
                    image:
                      "https://images.unsplash.com/photo-1617727553252-65863c156eb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                    name: "Subsidiary company",
                    title: "Industry of things",
                    username: "Companyxyz",
                    email: "abc@gmail.com",
                    website: "web@site.com",
                    phone: "+1234567890"
                  }
                ]}
              />
            </div>
          )}

          <Employer percentage={86.5} profileVisits={1268} totalProfileVisits={690} />
        </Grid>
      </Grid>

      {/* ---------------------------------- */}
      {/* Section Of SocialClicks | Monthly Chart */}
      {/* ---------------------------------- */}

      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Grid container justifyContent="center">
          <Clicks />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CardInfo;
