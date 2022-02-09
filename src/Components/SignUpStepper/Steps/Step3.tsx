import * as React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Select, { Options, MultiOptions } from "Components/Form/Select";
import TextInput from "Components/Form/TextInput";
import MuiIcons from "Components/Icons";
import Button from "Components/Button";
import AddTag from "Components/AddTag";
import NumberOfEmployees from "Components/SignUpStepper/Components/NumberOfEmployees";
import { StepperContext } from "Context/StepperContext";
import { useCompleteSignUp } from "Hooks/useSignUp";
import { Industries, CompanyTypes, CompanySizes } from "../Data/Data";

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
    actionsContainer: {
      // marginBottom: theme.spacing(2)
    },
    actionButtons: {
      display: "flex",
      justifyContent: "space-between",
      // padding: theme.spacing(5, 0, 0, 0)
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
    arrowIcons: {
      fontSize: "15px",
      margin: "0px 3px"
    },
    heading: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "27px",
      color: "#58696D"
    }
  })
);

const ProfessionalInfo = () => {
  const classes = useStyles();
  // states
  const [, setIndustry] = React.useState<Options[] | MultiOptions[]>([{ label: "Select Your Industry", value: "Select" }]);
  const [companyType, setCompanyType] = React.useState<Options[] | MultiOptions[]>([{ label: "Select Company Type", value: "Select" }]);
  const { handleNext, handleBack, activeStep, jobDetails, setJobDetails, userDetails, accountDetails } = React.useContext(StepperContext);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [years, setYears] = React.useState<Options[] | MultiOptions[]>([]);
  const [yearOfIncorporation, setYearOfIncorporation] = React.useState([{ label: "YYYY", value: "YYYY" }]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [companySize, setCompanySize] = React.useState<string>("");

  // mutation
  const { mutate, isLoading, isSuccess } = useCompleteSignUp();

  // for individual account
  const IndividualValidationSchema = yup.object({
    industry: yup.object().shape({
      label: yup.string(),
      value: yup.string(),
    }).required("Select Industry"),
    profession: yup
      .string()
      .required("Profession or Job Title is required")
      .min(5, "Profession or Job Title should be of minimum 4 characters length")
      .max(20, "Profession or Job Title should be of maximum 10 characters length"),
    skills: yup.array().required("Skills are required").min(3, "Choose minimum 3 skills")
  });

  // for company accounts
  const InstitutionValidationSchema = yup.object({
    company_email: yup.string().email("Enter a valid email"),
    year_of_incorporation: yup.number().required("Please enter year"),
    industry: yup.object().shape({
      label: yup.string(),
      value: yup.string(),
    }).required("Select Industry"),
    companyType: yup
      .string()
      .required("Company Type is required"),
    skills: yup.array().required("Skills are required").min(3, "Choose minimum 3 skills")
  });

  const formik = useFormik({
    initialValues: {
      company_size: jobDetails.company_size,
      company_email: jobDetails.company_email,
      year_of_incorporation: jobDetails.year_of_incorporation,
      industry: jobDetails.industry,
      profession: jobDetails.profession,
      skills: jobDetails.skills,
      companyType: jobDetails.companyType
    },

    validationSchema: accountDetails?.account_type === 'Individual' ? IndividualValidationSchema : InstitutionValidationSchema,
    onSubmit: values => {
      mutate({
        email: accountDetails.email,
        account_type: accountDetails.account_type,
        ...userDetails,
        ...jobDetails
      });
    }
  });

  // move to next Screen
  React.useEffect(() => {
    if (isSuccess && formik.isValid) handleNext();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.isValid, isSuccess]);

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleValueChanges = (e: any) => {
    formik.handleChange(e)
    setJobDetails(formik.values);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleIndustry = (val: any) => {
    setIndustry(val);
    formik.setFieldValue("industry", val, true);
    setJobDetails(formik.values);
  };


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCompanyType = (val: any) => {
    setCompanyType(val);
    formik.setFieldValue("companyType", val.label, true);
    setJobDetails(formik.values);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleYear = (val: any) => {
    setYearOfIncorporation(val);
    formik.setFieldValue("year_of_incorporation", val.label, true);
    setJobDetails(formik.values);
  };


  const onSkillAdd = (skills: string[]) => {
    formik.setFieldValue("skills", skills, true);
    setJobDetails({ ...formik.values, skills: skills });
  }


  const onContinue = async () => {
    try {
      setJobDetails(formik.values);
      formik.handleSubmit();
    } catch (error) {
      throw new Error("Error in Sign up");
    }
  };

  const CompanySize = (value: string) => {
    formik.setFieldValue("company_size", value, true);
    setCompanySize(value);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={classes.root}>
        <Typography className={classes.stepHeading}>
          Enter your Proffesional info
        </Typography>
        <br />
        <br />

        <Grid className={classes.container} container justifyContent="space-between">
          <Grid item xs={12} md={5}>
            <Typography className={classes.heading}>Industry:</Typography>
            <br />
            <Select
              id="listOfIndustries"
              options={Industries}
              value={formik.values.industry}
              setValue={handleIndustry}
              error={formik.touched.industry && Boolean(formik.errors.industry)}
              helperText={formik.touched.industry && formik.errors.industry}
            />

            <br />
            <br />
            <Typography className={classes.heading}>
              {accountDetails.account_type === "Institution" ? "Specialities" : "Skills and tags"}
            </Typography>
            <br />
            <AddTag
              placeHolder="Press Enter To Add Skills and tags"
              data={formik.values.skills}
              error={Boolean(formik.errors.skills)}
              helperText={formik.errors.skills}
              onAdd={onSkillAdd}
            />
            <br />
            {accountDetails.account_type === "Institution" && (
              <>
                <Typography className={classes.heading}>Company Email:</Typography>
                <br />
                <TextInput
                  id="company_email"
                  name="company_email"
                  type="email"
                  autoFocus={true}
                  placeholder="Company Email (Optional)"
                  value={formik.values.company_email}
                  onChange={(e) => handleValueChanges(e)}
                  error={formik.touched.company_email && Boolean(formik.errors.company_email)}
                  helperText={formik.touched.company_email && formik.errors.company_email}
                />
                <br />
              </>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography className={classes.heading}> {accountDetails?.account_type === 'Individual' ? "Proffesion" : "Company Type"}:</Typography>
            <br />
            {accountDetails?.account_type === 'Individual' ? <TextInput
              style={{ width: "90%" }}
              id="profession"
              name="profession"
              type="text"
              placeholder="Profession"
              value={formik.values.profession}
              onChange={(e) => handleValueChanges(e)}
              error={formik.touched.profession && Boolean(formik.errors.profession)}
              helperText={formik.touched.profession && formik.errors.profession}
            /> :
              <div style={{ width: "90%" }}>
                <Select
                  options={CompanyTypes}
                  value={companyType}
                  setValue={handleCompanyType}
                  error={formik.touched.companyType && Boolean(formik.errors.companyType)}
                  helperText={formik.touched.companyType && formik.errors.companyType}
                />
              </div>}


            <br />
            {accountDetails.account_type === "Institution" && (
              <>
                <br />
                <Typography className={classes.heading}>Number of Employees:</Typography>
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
                <br />
              </>
            )}

            {accountDetails.account_type === "Institution" && (
              <>
                <Typography className={classes.heading}>
                  Year of Incorporation:
                </Typography>
                <br />
                <div style={{ width: "30%" }}>
                  <Select
                    id="listOfYears"
                    options={years}
                    value={yearOfIncorporation}
                    setValue={handleYear}
                    error={
                      formik.touched.year_of_incorporation &&
                      Boolean(formik.errors.year_of_incorporation)
                    }
                    helperText={
                      formik.touched.year_of_incorporation &&
                      formik.errors.year_of_incorporation
                    }
                  />
                </div>
              </>
            )}
          </Grid>
        </Grid>
      </div>

      <br />

      <div className={classes.actionsContainer}>
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
            loading={isLoading}
            disabled={!formik.isValid}
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
      </div>
    </form>
  );
};

export default ProfessionalInfo;
