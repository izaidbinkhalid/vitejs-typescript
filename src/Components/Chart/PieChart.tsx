import * as React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// import { VictoryPie, VictoryLabel } from "victory";

// interface ChartData {
//   x: number | string;
//   y: number | string;
// }

// type Data = ChartData[];

interface Props {
  percentage: number;
  width?: string;
}

// export default function PieChart({ data }: Props) {
//   const [pieText] = React.useState<number>(80);

//   return (
//     <div style={{ justifyContent: "center", textAlign: "center" }}>
//       <svg viewBox="0 0 350 350" width="100%" height="100%">
//         <VictoryPie
//           standalone={false}
//           width={400}
//           height={400}
//           data={data}
//           innerRadius={120}
//           cornerRadius={25}
//           labels={() => null}
//           style={{
//             data: {
//               fill: ({ datum }) => {
//                 const color = datum.y > 30 ? "steelblue" : "red";
//                 return datum.x === 1 ? color : "transparent";
//               }
//             }
//           }}
//         />
//         <VictoryLabel
//           textAnchor="middle"
//           verticalAnchor="middle"
//           x={200}
//           y={200}
//           text={`${Math.round(pieText)}%`}
//           style={{ fontSize: 60 }}
//         />
//       </svg>
//     </div>
//   );
// }

export default function PieChart({ percentage, width }: Props) {
  return (
    <div style={width ? { width: `${width}` } : { width: "100%" }}>
      <CircularProgressbar
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          // rotation: 0.25,

          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          // strokeLinecap: "butt",

          // Text size
          // textSize: "16px",

          // How long animation takes to go from one percentage to another, in seconds
          // pathTransitionDuration: 0.5,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors
          pathColor: `rgba(95, 177, 223, ${percentage / 100})`
          // textColor: "#f88",
          // trailColor: "#d6d6d6",
          // backgroundColor: "#3e98c7"
        })}
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={10}
      />
    </div>
  );
}
