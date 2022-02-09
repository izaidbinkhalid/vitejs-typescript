import * as React from "react";
import * as yup from "yup";
import * as moment_ from "moment";
import { useFormik } from "formik";
import { makeStyles, Theme, createStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import { Country, State, City } from "country-state-city";
import MuiIcons from "Components/Icons";
import Select, { MultiOptions, Options } from "Components/Form/Select";
import NumberOfEmployees from "Components/SignUpStepper/Components/NumberOfEmployees";
import TextInput from "Components/Form/TextInput";
import TextArea from "Components/Form/TextArea";
import { Industries, CompanyTypes, CompanySizes } from "Components/SignUpStepper/Data/Data";
import DatePicker from 'Components/Form/DatePicker';
import { DrawerContext } from "Context/DrawerContext";
import Button from "Components/Button"

const moment = moment_;

interface Props {
  accountType: 'Individual' | "Institution";
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2, 0, 2),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(2)
      },
    },
    container: {
      minHeight: "400px"
    },
    inputContainer: {
      padding: "0px 2rem 2rem 2rem"
    },
    stepHeading: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "30px",
      lineHeight: "45px",
      color: "#455154",
      [theme.breakpoints.down("sm")]: {
        fontSize: "18px"
      }
    },
    labelButton: {
      border: "none",
      boxShadow: "none",
      background: "none",
      width: "-webkit-fill-available"
    },
    actionsContainer: {
      marginBottom: theme.spacing(2)
    },
    actionButtons: {
      display: "flex",
      justifyContent: "space-between",
      padding: theme.spacing(5, 0, 0, 0)
    },
    actionIcons: {
      color: "#E4E9EA"
    },
    arrowIcons: {
      fontSize: "15px",
      margin: "0px 3px"
    },
    inputLabel: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "27px",
      color: "#58696D"
    },

    editImageContainer: {
      position: "relative",
      "&:hover $addImage": {
        opacity: 0.8,
        zIndex: 1
      },
      "&:hover $editAndDelete": {
        opacity: 0.8,
        zIndex: 1
      }
    },
    addImage: {
      position: "absolute",
      width: " 125px",
      height: "125px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "rgba(255,255,255,0.7)",
      borderRadius: "6px",
      cursor: "pointer",
      opacity: 0,
      transition: "all .3s"
    },
    editAndDelete: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "125px",
      height: "45px",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      background: "#58696D33",
      backdropFilter: "blur(26px)",
      borderRadius: "6px",
      cursor: "pointer",
      opacity: 0,
      transition: "all .3s",
      [theme.breakpoints.down("sm")]: {
        opacity: 0.8,
        zIndex: 1,
        height: "35px"
      }
    },
    userProfilePic: {
      width: "125px",
      height: "125px",
      margin: "auto",
      marginRight: "5px",
      borderRadius: "10px"
    },
    icons: {
      color: "#E4E9EA"
    },
    redText: {
      color: "red"
    },
    userinfo: {
      padding: theme.spacing(2, 1),
      border: `1px solid ${theme.palette.gray[600]}`,
      boxSizing: "border-box",
      filter: "drop-shadow(0px 31px 51px rgba(0, 0, 0, 0.03))",
      borderRadius: "10px"
    },
    selectIcon: {
      color: theme.palette.gray[400],
      [theme.breakpoints.down("md")]: {
        fontSize: "14px"
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "16px"
      }
    },
    deleteIcon: {
      color: "#414546"
    },
    selectLink: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: theme.spacing(1),
      [theme.breakpoints.down("md")]: {
        justifyContent: "space-between !important"
      }
    },
    addButton: {
      background: theme.palette.gray[100],
      border: `1px solid ${theme.palette.gray[600]}`,
      borderRadius: "40px",
      display: "flex",
      alignItems: "center",
      fontSize: "14px",
      padding: theme.spacing(1),
      marginTop: theme.spacing(2),
      cursor: "pointer",
      width: "100px",
      justifyContent: "center"
    },
    settingLabel: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "25px",
      lineHeight: "27px",
      color: "#58696D",
      margin: theme.spacing(2, 0, 4, 0)
    },
    icon: {
      color: theme.palette.secondary.light,
      cursor: "pointer",
      margin: theme.spacing(2, 0, 4, 0)
    },
    flex: {
      justifyContent: "flex-start",
      display: "flex",
      alignItems: "center"
    },
    changeBtn: {
      width: "100%",
      background: theme.palette.gray[700],
      borderRadius: "56px",
      fontWeight: 500,
      fontSize: "15px",
      color: theme.palette.secondary.dark,
      paddingLeft: theme.spacing(2.5),
      paddingRight: theme.spacing(2.5),
      padding: theme.spacing(1)
    },
  })
);

const validationSchema = yup.object({
  date_of_birth: yup
    .string()
    .required("Date of Birth is required")
    .test("date_of_birth", "Required age is 16", value => {
      return moment().diff(moment(value), "years") >= 16;
    })
});

export const AccountSetting: React.FC<Props> = props => {
  // INITIALS
  const classes = useStyles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { handleClose, setDrawerOpen, setShowSettingsTab } = React.useContext(DrawerContext);

  // States
  const [, setCompanySize] = React.useState<string>("");
  const [industry, setIndustry] = React.useState<Options[] | MultiOptions[]>([{ label: "Select Your Industry", value: "Select" }]);
  const [countries, setCountries] = React.useState<Options[] | MultiOptions[]>([]);
  const [states, setStates] = React.useState<Options[] | MultiOptions[]>([]);
  const [cities, setCities] = React.useState<Options[] | MultiOptions[]>([]);
  const [selectedCountry, setSelectedCountry] = React.useState<MultiOptions | Options>({ label: "Country", value: "Select Country", countryCode: "null" });
  const [selectedState, setSelectedState] = React.useState<MultiOptions>({ label: "State", value: "Select State", countryCode: "null" } as MultiOptions);
  const [selectedCity, setSelectedCity] = React.useState<MultiOptions | Options>({ label: "City", value: "Select City", countryCode: "null" } as MultiOptions);
  const [companyType, setCompanyType] = React.useState<Options[] | MultiOptions[]>([{ label: "Select Company Type", value: "Select" }]);
  const [years, setYears] = React.useState<Options[] | MultiOptions[]>([]);
  const [yearOfIncorporation, setYearOfIncorporation] = React.useState([{ label: "YYYY", value: "YYYY" }]);

  // USEEFFECTS
  React.useEffect(() => {
    getCountry();
    getStates();
    getCity();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry, selectedCity, selectedState]);

  // setting years from today
  React.useEffect(() => {
    const maxOffset = 60;
    const thisYear = new Date().getFullYear();
    const allYears = [];
    for (let x = 0; x <= maxOffset; x++) {
      allYears.push({
        label: (thisYear - x).toString(),
        value: (thisYear - x).toString()
      });
    }
    setYears(allYears);
  }, []);

  // FUNCTIONS
  const getCountry = () => {
    const newArr = Country.getAllCountries().map(country => {
      return {
        label: country.name,
        value: country.isoCode,
        countryCode: country.isoCode
      };
    });
    setCountries(newArr);
  };

  const getStates = () => {
    const newArr = State.getStatesOfCountry(selectedCountry.value).map(state => {
      return {
        label: state.name,
        value: state.isoCode,
        countryCode: state.countryCode
      };
    });
    setStates(newArr);
  };

  const getCity = () => {
    const newArr = City.getCitiesOfState(
      selectedState.countryCode,
      selectedState.value
    ).map(city => {
      return {
        label: city.name,
        value: city.stateCode,
        countryCode: city.countryCode
      };
    });
    setCities(newArr);
  };

  const CompanySize = (value: string) => {
    formik.setFieldValue("company_size", value, true);
    setCompanySize(value);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handeIndustry = (val: any) => {
    setIndustry(val);
    formik.setFieldValue("industry", val.label, true);
  };

  const formik = useFormik({
    initialValues: {
      industry: "",
      profession: "",
      date_of_birth: new Date('08/11/1999'), // MM//DD//YYYY
      country: "",
      state: "",
      city: "",
      address: "",
      company_size: "",
      company_email: ""
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      // eslint-disable-next-line no-console
      console.log(values);
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCompanyType = (val: any) => {
    setCompanyType(val);
    // formik.setFieldValue("companyType", val.label, true);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleYear = (val: any) => {
    setYearOfIncorporation(val);
    formik.setFieldValue("year_of_incorporation", val.label, true);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDateChange = (date: any) => {
    formik.setFieldTouched('date_of_birth', true)
    formik.setFieldValue('date_of_birth', date, true)
  }

  const handleBackArrow = () => {
    handleClose()
    setDrawerOpen(true)
    setShowSettingsTab(true)
  }

  return (
    <div className={classes.root}>
      <Grid className={classes.container} container justifyContent="space-between">
        {smallScreen &&
          <Grid item xs={12}>
            <div className={classes.flex}>
              <MuiIcons icon="backArrow" className={classes.icon} fontSize="medium" onClick={handleBackArrow} />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Typography className={classes.settingLabel}>Account Settings</Typography>
            </div>
          </Grid>
        }
        <Grid item xs={12} md={6}>
          <div style={!smallScreen ? { width: "90%" } : {}}>
            <Typography className={classes.inputLabel}>Industry:</Typography>
            <br />
            <Select
              id="listOfIndustries"
              options={Industries}
              value={industry}
              setValue={handeIndustry}
              error={formik.touched.industry && Boolean(formik.errors.industry)}
              helperText={formik.touched.industry && formik.errors.industry}
            />
          </div>
          <br />
          <label>
            <Typography className={classes.inputLabel}>
              {props.accountType === "Institution" ? "Company Type" : "Profession"}
              :
            </Typography>
          </label>
          <br />
          {props.accountType === "Institution" ?
            <div style={!smallScreen ? { width: "90%" } : {}}>
              <Select
                options={CompanyTypes}
                value={companyType}
                setValue={handleCompanyType}
              // error={formik.touched.companyType && Boolean(formik.errors.companyType)}
              // helperText={formik.touched.companyType && formik.errors.companyType}
              />
            </div>
            :
            <TextInput
              style={!smallScreen ? { width: "90%" } : {}}
              id="profession"
              name="profession"
              type="text"
              placeholder="Profession"
              value={formik.values.profession}
              onChange={formik.handleChange}
              error={formik.touched.profession && Boolean(formik.errors.profession)}
              helperText={formik.touched.profession && formik.errors.profession}
            />}
          {props.accountType === "Institution" && (
            <>
              <br />
              <Typography className={classes.inputLabel}>Number of Employees:</Typography>
              <br />
              <div style={{ display: "flex" }}>
                {CompanySizes.map((size, index) => (
                  <div key={index}>
                    <NumberOfEmployees
                      heading={size.heading}
                      type={size.type}
                      selectedType={formik.values.company_size}
                      setSelectedType={CompanySize}
                    />
                  </div>
                ))}
              </div>
            </>
          )}
          <br />
          <label>
            <Typography className={classes.inputLabel}>{props.accountType === "Institution" ? "Year of Incorporation:" : "Date of birth:"}</Typography>
          </label>
          <br />
          {props.accountType === "Institution" ?
            <div style={{ width: "30%" }}>
              <Select
                id="listOfYears"
                options={years}
                value={yearOfIncorporation}
                setValue={handleYear}
              />
            </div> :
            <div>
              <DatePicker
                openCalender={true}
                value={formik.values.date_of_birth}
                onChange={handleDateChange}
                name="date_of_birth"
                error={formik.touched.date_of_birth && Boolean(formik.errors.date_of_birth)}
                helperText={formik.touched.date_of_birth && formik.errors.date_of_birth} />
              <br />
            </div>
          }
          {props.accountType === "Institution" && (
            <>
              <br />
              <Typography className={classes.inputLabel}>Company Email:</Typography>
              <br />
              <TextInput
                style={!smallScreen ? { width: "90%" } : {}}
                id="company_email"
                name="company_email"
                type="email"
                autoFocus={true}
                placeholder="Company Email"
                value={formik.values.company_email}
                onChange={formik.handleChange}
                error={
                  formik.touched.company_email && Boolean(formik.errors.company_email)
                }
                helperText={formik.touched.company_email && formik.errors.company_email}
              />
              <br />
            </>
          )}
        </Grid>

        <Grid item xs={12} md={5}>
          <label>
            <Typography className={classes.inputLabel}>Country</Typography>
          </label>
          <br />

          <Select
            id="listOfCountries"
            options={countries}
            value={selectedCountry}
            placeholder="Country"
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            setValue={(value: any) => {
              setSelectedCountry(value);
              formik.setFieldValue("country", value.label, true);
              setSelectedState({
                label: "State",
                value: "Select State",
                countryCode: "null"
              });
              setSelectedCity({
                label: "City",
                value: "Select City",
                countryCode: "null"
              });
            }}
            error={formik.touched.country && Boolean(formik.errors.country)}
            helperText={formik.touched.country && formik.errors.country}
          />
          <br />
          <label>
            <Typography className={classes.inputLabel}>State:</Typography>
          </label>
          <br />

          <Select
            id="listOfStates"
            options={states}
            value={selectedState}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            setValue={(value: any) => {
              setSelectedState(value);
              formik.setFieldValue("state", value.label, true);
              setSelectedCity({
                label: "City",
                value: "Select City",
                countryCode: "null"
              });
            }}
            error={formik.touched.state && Boolean(formik.errors.state)}
            helperText={formik.touched.state && formik.errors.state}
          />
          <br />
          <label>
            <Typography className={classes.inputLabel}>City:</Typography>
          </label>
          <br />

          <Select
            id="listOfCities"
            options={cities}
            value={selectedCity}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            setValue={(value: any) => {
              setSelectedCity(value);
              formik.setFieldValue("city", value.label, true);
            }}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
          />
          <br />
          <label>
            <Typography className={classes.inputLabel}>Address:</Typography>
          </label>
          <br />

          <TextArea
            style={{
              minWidth: "100%",
              maxWidth: "-webkit-fill-available",
              maxHeight: "100px",
              minHeight: "100px"
              // margin: "0px 8px"
            }}
            rows={3}
            maxLength={300}
            columns={33}
            id="address"
            name="address"
            placeholder="Address"
            value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
          />
          <br />
          {props.accountType === "Individual" ?
            <div>
              <label>
                <Typography className={classes.inputLabel}>Upgrade:</Typography>
              </label>
              <br />
              <Grid item xs={12}>
                <Button text="Upgrade to Institutional Account" className={classes.changeBtn} />
              </Grid>
            </div> : ""}
        </Grid>
      </Grid>
    </div>
  );
};
