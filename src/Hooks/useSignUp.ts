/* eslint-disable no-console */
import { useMutation } from "react-query";
import {
    SignUpResponse,
    AccountDetails,
    CreateProfile,
    CheckUsername,
    CheckUsernameResponse,
    CheckOtp,
    CheckOtpResponse
} from "Interfaces/SignUp";
import { API_URL, getAccessToken } from "./api";

export const useSignUp = () => {
    return useMutation<SignUpResponse, Error, AccountDetails>(
        "signup-user",
        async (variables: AccountDetails) => {
            // don't need confirm password
            // delete variables.confirmPassword;

            const response = await fetch(`${API_URL}/auth/signup`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(variables)
            });
            //   if (!response.ok) {
            //     throw new Error("Error in Signing Up");
            //   }
            return response.json();
        }
    );
};
export const useCompleteSignUp = () => {
    const accessToken = getAccessToken();
    return useMutation<SignUpResponse, Error, CreateProfile>(
        "signup-user-complete",
        async (variables: CreateProfile) => {
            // formatting the payload

            const payload = {
                email: variables.email,
                first_name: variables.first_name,
                last_name: variables.last_name,
                phone_number: variables.phone_number,
                skills: variables.skills,
                about: variables.about,
                address: variables.address,
                city: variables.city.label,
                state: variables.state.label,
                country: variables.country.label,
                date_of_birth: variables.date_of_birth,
                profession: variables.profession,
                username: variables.username,
                year_of_incorporation: variables.year_of_incorporation,
                industry: variables.industry.label,
                companyType: variables.companyType,
                company_email: variables.company_email,
                company_name: variables.company_name,
                company_size: variables.company_size,
                company_type: variables.company_type,
                account_type: variables.account_type
            }
            const response = await fetch(`${API_URL}/auth/post-user-details`, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json",
                    Authorization: accessToken
                },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                throw new Error("Error in Signing Up");
            }

            return response.json();
        }
    );
};
export const useCheckUsername = () => {
    return useMutation<CheckUsernameResponse, Error, CheckUsername>(
        "check-username",
        async (variables: CheckUsername) => {
            const response = await fetch(`${API_URL}/auth/check-username`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(variables)
            });
            if (!response.ok) {
                throw new Error("Username already exists!");
            }
            return response.json();
        }
    );
}

export const useVerifyEmail = () => {
    return useMutation<CheckOtpResponse, Error, CheckOtp>(
        "check-otp",
        async (variables: CheckOtp) => {
            const response = await fetch(`${API_URL}/auth/verify-email`, {
                method: "POST",
                headers: { "Content-type": "application/json", },
                body: JSON.stringify(variables)
            });

            if (!response.ok) throw new Error("Code was not valid");

            return response.json();
        }
    );
};