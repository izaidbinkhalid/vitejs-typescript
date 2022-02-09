import * as React from "react";
interface Props {
  readonly noColor?: boolean;
}

export const AppleIcon: React.FC<Props> = ({ noColor }: Props) => {
  return (
    <svg
      width="33"
      height="28"
      viewBox="0 0 33 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.4419 20.7135C27.4231 17.514 28.8741 15.1027 31.8042 13.3247C30.1654 10.9791 27.686 9.68899 24.4178 9.44035C21.3233 9.1964 17.9377 11.2418 16.698 11.2418C15.3879 11.2418 12.392 9.52479 10.0348 9.52479C5.17 9.59985 0 13.3998 0 21.131C0 23.4157 0.41792 25.7754 1.25376 28.2055C2.37135 31.4049 6.40028 39.2441 10.603 39.1174C12.8006 39.0658 14.3549 37.5599 17.2146 37.5599C19.9897 37.5599 21.4266 39.1174 23.8778 39.1174C28.1181 39.0564 31.7619 31.9303 32.8232 28.7215C27.1366 26.0428 27.4419 20.8777 27.4419 20.7135ZM22.5067 6.40509C24.8874 3.58094 24.6714 1.01012 24.601 0.0859375C22.4973 0.207911 20.0649 1.51678 18.6796 3.12589C17.1535 4.85228 16.2566 6.98681 16.4492 9.39344C18.7219 9.56701 20.7974 8.39889 22.5067 6.40509Z"
        fill="#455154"
      />
    </svg>
  );
};