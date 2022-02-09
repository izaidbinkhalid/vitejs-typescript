export interface User {
  readonly firstName?: string;
  readonly lastName?: string;
  readonly email?: string;
  readonly id?: string;
  readonly accessToken?: string;
}
export interface Card {
  profilePic: string;
  name: string;
  description: string;
  live: boolean;
  business?: boolean;
  username?: string;
}
export interface Company {
  profilePic: string;
  name: string;
  description: string;
  live: boolean;
  business?: boolean;
  cards?: Card[];
}

export interface ChatRowProps {
  avatar?: string
  name?: string
  date?: string
  isOnline?: boolean
  unreadMessageCount?: number
  lastMessage: string
  onClick?: () => void
}