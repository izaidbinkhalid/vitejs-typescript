
export interface SignUpResponse {
    message: string;
    email: string;
    id: string;
    account_type: string;
    verified: boolean;
    access_token: string;
    refresh_token: string;
    status?: number | undefined;
}

export type AccountDetails = {
    account_type: 'Individual' | "Institution";
    email: string;
    password: string;
    confirmPassword?: string;
};

export type UserDetails = {
    image: string;
    company_name?: string;
    company_type?: string;
    first_name?: string;
    last_name?: string;
    username: string;
    about: string;
    date_of_birth: Date | null;
    country: {
        label: string,
        value: string,
        countryCode: string
    };
    state: {
        label: string,
        value: string,
        countryCode: string
    };
    city: {
        label: string,
        value: string,
        countryCode: string
    };
    address: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    phone_number: any;
};

export type JobDetails = {
    company_size: string;
    company_email?: string;
    year_of_incorporation?: string | number;
    industry: {
        label: string,
        value: string,
    };
    profession?: string;
    skills: string[];
    companyType?: string
};
type Email = {
    email: string;
    account_type: 'Individual' | "Institution";

};

export type Conatct = {
    name: string;
    link: string;
};

export type CardDetails = {
    image: string;
    fullname: string;
    title: string;
    about: string;
    background: string;
    contactInformation: Conatct[];
};

export interface CreateProfile extends JobDetails, UserDetails, Email { }

export interface CheckUsername {
    username: string;
}
export interface CheckOtp {
    code: string;
}
export interface CheckUsernameResponse {
    statusCode: number;
    message: string;
    error: string;
}
export interface CheckUsernameResponse {
    statusCode: number;
    message: string;
    error: string;
}

export interface CheckOtpResponse {
    statusCode?: number;
    message?: string;
    error?: string;
    verified?: boolean
}

