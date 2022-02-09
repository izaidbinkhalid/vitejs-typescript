import * as React from "react";
import * as yup from "yup";
import * as moment_ from "moment";
import { useFormik } from "formik";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Avatar, Grid, Typography } from "@material-ui/core";
import PhoneInput, { Value as phoneInputType } from "react-phone-number-input";
import { Country, State, City } from "country-state-city";
import Select, { MultiOptions, Options } from "Components/Form/Select";
import Button from "Components/Button";
import TextInput from "Components/Form/TextInput";
import DatePicker from 'Components/Form/DatePicker';
import TextArea from "Components/Form/TextArea";
import MuiIcons from "Components/Icons";
import AddImageModal from "Components/AddImage/AddImageModal";
import { StepperContext } from "Context/StepperContext";
import { useCheckUsername } from "Hooks/useSignUp";

const moment = moment_;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(4, 20)
      },
      [theme.breakpoints.down("xs")]: {
        padding: theme.spacing(2)
      }
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
    phoneInput: {
      background: "#FFFFFF",
      border: "1px solid #E3E3E3",
      boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.03)",
      borderRadius: "10px",
      padding: theme.spacing(0, 1),
      "& input": {
        background: "#FFFFFF",
        border: "#f5f8fa",
        width: "100%",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "15px",
        lineHeight: "22px",
        display: "flex",
        alignItems: "center",
        color: "#5e6278",
        outline: "none",
        height: "40px",
        padding: theme.spacing(1.5),
        "&:focus": {
          color: "#5e6278"
        }
      },
      "&.PhoneInputCountrySelectArrow": {
        fontSize: "20px"
      }
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
    }
  })
);

const validationSchemaForIndividual = yup.object({
  first_name: yup
    .string()
    .required("Required")
    .min(4, "First Name should be of minimum 4 characters length"),
  last_name: yup
    .string()
    .required("Required")
    .min(4, "Last Name should be of minimum 4 characters length"),
  username: yup
    .string()
    .required("Required")
    .min(3, "Username should be of minimum 3 characters length"),
  about: yup.string(),
  date_of_birth: yup
    .string()
    .required("Date of Birth is required")
    .test("date_of_birth", "Required age is 16", value => {
      return moment().diff(moment(value), "years") >= 16;
    }),
  country: yup.object().shape({
    label: yup.string(),
    value: yup.string(),
    countryCode: yup.string(),
  }).required("Country is Required"),
  state: yup.object().shape({
    label: yup.string(),
    value: yup.string(),
    countryCode: yup.string(),
  }).required("State is Required"),
  city: yup.object().shape({
    label: yup.string(),
    value: yup.string(),
    countryCode: yup.string(),
  }),
  address: yup.string().min(8, "Address should be of minimum 8 characters length"),
  phone_number: yup.string().min(8, "Minimum 7 digits required").required("Phone Number is Required")
});

const validationSchemaForInstitution = yup.object({
  company_name: yup
    .string()
    .required("Required")
    .min(4, "Company Name should be of minimum 4 characters length"),
  company_type: yup
    .string()
    .required("Required")
    .min(4, "Company Name should be of minimum 4 characters length"),
  username: yup
    .string()
    .required("Required")
    .min(3, "Username should be of minimum 3 characters length"),
  about: yup.string(),
  date_of_birth: yup
    .string()
    .required("Date of Birth is required")
    .test("date_of_birth", "Required age is 16", value => {
      return moment().diff(moment(value), "years") >= 16;
    }),
  country: yup.object().shape({
    label: yup.string().required(),
    value: yup.string().required(),
    countryCode: yup.string().required(),
  }).required("Country is Required"),
  state: yup.object().shape({
    label: yup.string().required(),
    value: yup.string().required(),
    countryCode: yup.string().required(),
  }).required("State is Required"),
  city: yup.object().shape({
    label: yup.string().required(),
    value: yup.string().required(),
    countryCode: yup.string().required(),
  }),
  address: yup.string().min(8, "Address should be of minimum 8 characters length"),
  phone_number: yup.string().min(8, "Minimum 7 digits required").required("Phone Number is Required")
});

const InstitutionInfo = () => {
  // initials
  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let typingTimer: any; //Don't know the type oftimer identifier
  const doneTypingInterval = 100;

  // States
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [checking, setChecking] = React.useState<boolean>(false);
  const [countries, setCountries] = React.useState<Options[] | MultiOptions[]>([]);
  const [states, setStates] = React.useState<Options[] | MultiOptions[]>([]);
  const [cities, setCities] = React.useState<Options[] | MultiOptions[]>([]);
  const [selectedCountry, setSelectedCountry] = React.useState<MultiOptions | Options>({ label: "Country", value: "Select Country", countryCode: "null" });
  const [selectedState, setSelectedState] = React.useState<MultiOptions>({ label: "State", value: "Select State", countryCode: "null" } as MultiOptions);
  const [selectedCity, setSelectedCity] = React.useState<MultiOptions | Options>({ label: "City", value: "Select City", countryCode: "null" } as MultiOptions);
  const [disableState, setDisableState] = React.useState<boolean>(true);
  const [disableCity, setDisableCity] = React.useState<boolean>(true);

  // context
  const { activeStep, setUserDetails, handleNext, handleBack, userDetails, accountDetails } = React.useContext(StepperContext);

  // mutation
  const { mutate: checkUserName, isError, error } = useCheckUsername();

  // Getting Country When Component Renders
  React.useEffect(() => {
    getCountry(); getStates(); getCity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry, selectedCity, selectedState]);

  const getCountry = () => {
    const newArr = Country.getAllCountries().map(country => { return { label: country.name, value: country.isoCode, countryCode: country.isoCode }; });
    setCountries(newArr);
  };

  const getStates = () => {
    const newArr = State.getStatesOfCountry(selectedCountry.value).map(state => { return { label: state.name, value: state.isoCode, countryCode: state.countryCode }; });
    setStates(newArr);
  };

  const getCity = () => {
    const newArr = City.getCitiesOfState(selectedState.countryCode, selectedState.value).map(city => { return { label: city.name, value: city.stateCode, countryCode: city.countryCode }; });
    setCities(newArr);
  };

  const formik = useFormik({
    initialValues: {
      image: userDetails.image,
      company_name: userDetails.company_name,
      company_type: userDetails.company_type,
      first_name: userDetails.first_name,
      last_name: userDetails.last_name,
      username: userDetails.username,
      about: userDetails.about,
      date_of_birth: userDetails.date_of_birth,
      country: userDetails.country,
      state: userDetails.state,
      city: userDetails.city,
      address: userDetails.address,
      phone_number: userDetails.phone_number
    },

    validationSchema: accountDetails?.account_type === "Individual" ? validationSchemaForIndividual : validationSchemaForInstitution,
    onSubmit: values => {
      setUserDetails(values);
    }
  });

  React.useEffect(() => {
    if (isError) formik.setFieldError("username", "Username already exists");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  const onSearchKeyUp = () => {
    formik.setFieldTouched("username", true);
    if (formik.values.username.length > 4) {
      setChecking(true);
      clearTimeout(typingTimer);
      typingTimer = setTimeout(doneTyping, doneTypingInterval);
    }
  };
  const onSearcKeyDown = () => {
    clearTimeout(typingTimer);
  };
  const doneTyping = () => {
    if (formik.values.username.length > 4) {
      checkUserName({
        username: formik.values.username
      });
      setTimeout(() => {
        setChecking(false);
      }, 700);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleValueChanges = (e: any) => {
    formik.handleChange(e)
    setUserDetails(formik.values);
  }


  const onContinue = () => {
    formik.handleSubmit();
    if (formik.isValid) {
      handleNext();
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDateChange = (date: any) => {
    const formattedDate = new Date(date).toISOString();
    formik.setFieldTouched('date_of_birth', true)
    formik.setFieldValue('date_of_birth', formattedDate, true)
    setUserDetails(formik.values);
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <div className={classes.root}>
        <Typography className={classes.stepHeading}>
          Enter your account details
        </Typography>
        <br />
        <br />

        <Grid className={classes.container} spacing={6} container justifyContent="space-between">
          <Grid item xs={12} md={6}>
            <label>
              <Typography className={classes.inputLabel}>Info:</Typography>
            </label>
            <br />
            <Grid container spacing={2} justifyContent="space-between">
              <Grid item xs={4} >
                <AddImageModal
                  openModal={openModal}
                  handleCloseModal={() => setOpenModal(false)}
                  handleSaveChanges={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                  formValues={formik.values}
                  setFormValues={formik.setValues}
                  setOpenModal={setOpenModal}
                />
                <div className={classes.editImageContainer}>
                  {formik.values.image !== "" ? (
                    <span className={classes.editAndDelete}>
                      <MuiIcons className={classes.actionIcons} icon="cancel" onClick={() => formik.setValues({ ...formik.values, image: "" })} fontSize="small"
                      />
                      <MuiIcons className={classes.actionIcons} onClick={() => setOpenModal(true)} icon="edit" fontSize="small"
                      />
                    </span>
                  ) : (
                    <span className={classes.addImage}>
                      <MuiIcons icon="addPhoto" fontSize="large" onClick={() => setOpenModal(true)}
                      />
                    </span>
                  )}
                  {/* <div> */}
                  <Avatar
                    src={formik.values.image ? formik.values.image : ""}
                    className={classes.userProfilePic}
                    variant="rounded"
                  />
                </div>
              </Grid>
              <Grid item xs={7} sm={8} md={7} lg={8}>
                {accountDetails.account_type === "Institution" ? (
                  <>
                    <TextInput
                      id="company_name"
                      name="company_name"
                      type="text"
                      placeholder={"Company name"}
                      value={formik.values.company_name}
                      onChange={(e) => handleValueChanges(e)}
                      error={formik.touched.company_name && Boolean(formik.errors.company_name)}
                      helperText={formik.touched.company_name && formik.errors.company_name}
                    />
                    <TextInput
                      id="company_type"
                      name="company_type"
                      type="text"
                      placeholder={"Company Type"}
                      value={formik.values.company_type}
                      onChange={(e) => handleValueChanges(e)}
                      error={formik.touched.company_type && Boolean(formik.errors.company_type)}
                      helperText={formik.touched.company_type && formik.errors.company_type}
                    />
                  </>
                ) : (
                  <>
                    <TextInput
                      id="first_name"
                      name="first_name"
                      type="text"
                      placeholder={"First name"}
                      value={formik.values.first_name}
                      onChange={(e) => handleValueChanges(e)}
                      error={formik.touched.first_name && Boolean(formik.errors.first_name)
                      }
                      helperText={formik.touched.first_name && formik.errors.first_name}
                    />
                    <TextInput
                      id="last_name"
                      name="last_name"
                      type="text"
                      placeholder={"Last name"}
                      value={formik.values.last_name}
                      onChange={(e) => handleValueChanges(e)}
                      error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                      helperText={formik.touched.last_name && formik.errors.last_name}
                    />
                  </>
                )}

                <TextInput
                  id="username"
                  name="username"
                  username={true}
                  type="text"
                  placeholder="Username"
                  value={formik.values.username}
                  onChange={(e) => handleValueChanges(e)}
                  onKeyUp={onSearchKeyUp}
                  onKeyDown={onSearcKeyDown}
                  loading={checking}
                  isValid={
                    formik.touched.username &&
                    !isError &&
                    Boolean(!formik.errors.username) &&
                    error === null
                  }
                  error={formik.touched.username && Boolean(formik.errors.username)}
                  helperText={formik.touched.username && formik.errors.username}
                />
              </Grid>
            </Grid>
            <br />
            <br />

            <Grid item xs={12}>
              <label>
                <Typography className={classes.inputLabel}>About:</Typography>
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
                id="about"
                name="about"
                placeholder="About you (optional)"
                value={formik.values.about}
                onChange={(e) => handleValueChanges(e)}
                error={formik.touched.about && Boolean(formik.errors.about)}
                helperText={formik.touched.about && formik.errors.about}
              />
              <br />
              <br />
              <Typography className={classes.inputLabel}>Phone Number:</Typography>
              <br />
              <PhoneInput
                id="phone_number"
                name="phone_number"
                className={classes.phoneInput}
                placeholder="+0123456789"
                value={formik.values.phone_number}
                limitMaxLength={true}
                onChange={(value: phoneInputType) =>
                  formik.setFieldValue("phone_number", value, true)
                }
              />
              <Grid item lg={12}>
                <Typography variant="body2" className={classes.redText}>
                  {" "}
                  &nbsp;&nbsp;
                  {formik.touched.phone_number && formik.errors.phone_number}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <label>
              <Typography className={classes.inputLabel}>Date of birth:</Typography>
            </label>
            <br />
            <DatePicker
              value={formik.values.date_of_birth}
              onChange={handleDateChange}
              name="date_of_birth"
              error={formik.touched.date_of_birth && Boolean(formik.errors.date_of_birth)}
              helperText={formik.touched.date_of_birth && formik.errors.date_of_birth} />
            <br />
            <br />

            <label>
              <Typography className={classes.inputLabel}>Address:</Typography>
            </label>
            <br />

            <Select
              id="listOfCountries"
              options={countries}
              value={formik.values.country}
              placeholder="Country"
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              setValue={(value: any) => {
                setSelectedCountry(value);
                formik.setFieldValue("country", value, true);
                setUserDetails({ ...userDetails, country: value })
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
                setDisableState(false);
                setDisableCity(true);
              }}
              error={formik.touched.country && Boolean(formik.errors.country)}
              helperText={formik.touched.country && formik.errors.country}
            />
            <br />

            <Select
              id="listOfStates"
              options={states}
              value={formik.values.state}
              disabled={disableState}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              setValue={(value: any) => {
                setSelectedState(value);
                formik.setFieldValue("state", value, true);
                setUserDetails({ ...userDetails, state: value })
                setSelectedCity({
                  label: "City",
                  value: "Select City",
                  countryCode: "null"
                });
                setDisableCity(false);
              }}
              error={formik.touched.state && Boolean(formik.errors.state)}
              helperText={formik.touched.state && formik.errors.state}
            />
            <br />

            <Select
              id="listOfCities"
              options={cities}
              value={formik.values.city}
              disabled={disableCity}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              setValue={(value: any) => {
                setSelectedCity(value);
                formik.setFieldValue("city", value, true);
                setUserDetails({ ...userDetails, city: value })
              }}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
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
              placeholder="Address (optional)"
              value={formik.values.address}
              onChange={(e) => handleValueChanges(e)}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid>
        </Grid>

        <Grid container className={classes.actionsContainer}>
          <Grid item xs={12}>
            <div className={classes.actionButtons}>
              <Button
                type="stepper"
                onClick={handleBack}
                text="Back"
                icon={
                  <MuiIcons
                    className={classes.arrowIcons}
                    icon="ArrowBackIosIcon"
                    fontSize="small"
                  />
                }
              />
              <Button
                disabled={formik.values.username === ""}
                type="stepper"
                onClick={() => onContinue()}
                text={activeStep === 4 ? "Finish" : "Next"}
                endIcon={
                  <MuiIcons
                    className={classes.arrowIcons}
                    icon="ArrowForwardIosIcon"
                    fontSize="small"
                  />
                }
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </form>
  );
};

export default InstitutionInfo;
