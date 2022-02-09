/* eslint-disable @typescript-eslint/no-explicit-any */
export interface AuthResponse {
  readonly access_token: string;
  readonly refresh_token: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly email: string;
  readonly id: string;
}
export interface SocialAuthResponse {
  readonly access_token: string;
  readonly refresh_token: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly email: string;
  readonly id: string;
  readonly new_user: boolean;
}

export interface SocialCredential {
  email: string | any;
  first_name: string | any;
  last_name: string | any;
  profile_image: string | any;
  account_type?: string | any;
  social_account: string | any;
}
