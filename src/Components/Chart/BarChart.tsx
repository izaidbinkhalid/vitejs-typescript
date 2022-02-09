import * as React from "react";
import { VictoryBar } from "victory";

interface ChartData {
  x: number | string;
  y: number | string;
}

type Data = ChartData[];
interface Props {
  radius: number;
  width: number;
  padding?: number;
  data: Data;
  showLabel?: boolean;
}

export default function BarChart({ radius, width, padding, data, showLabel }: Props) {
  return (
    <div style={{ justifyContent: "center", textAlign: "center" }}>
      <VictoryBar
        domainPadding={padding}
        cornerRadius={radius}
        barWidth={width}
        style={{
          data: {
            fill: "#64B3DF",
            fillOpacity: 0.7
          }
        }}
        data={data}
        labels={showLabel === true ? ({ datum }) => datum.x : []}
      />
    </div>
  );
}
