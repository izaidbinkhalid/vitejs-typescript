import * as React from "react";
interface Props {
  readonly noColor?: boolean;
}

export const FacebookIcon: React.FC<Props> = ({ noColor }: Props) => {
  return (
    <svg
      width="35"
      height="26"
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38.0884 19.3174C38.0884 8.80792 29.6191 0.287109 19.1731 0.287109C8.72714 0.287109 0.257812 8.80792 0.257812 19.3174C0.257812 28.8167 7.17451 36.6889 16.2176 38.1161V24.8187H11.4147V19.3158H16.2176V15.126C16.2176 10.3573 19.0423 7.7216 23.3629 7.7216C25.4309 7.7216 27.5967 8.09428 27.5967 8.09428V12.7773H25.2102C22.86 12.7773 22.1271 14.2442 22.1271 15.7492V19.3174H27.3729L26.5343 24.8203H22.1271V38.1177C31.1717 36.6889 38.0884 28.8151 38.0884 19.3174Z"
        fill="#455154"
      />
    </svg>
  );
};