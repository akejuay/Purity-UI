"use client";

import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "A stacked area chart";

const chartData = [
  { month: "Jan", desktop: 200, mobile: 500 },
  { month: "Feb", desktop: 200, mobile: 500 },
  { month: "Mar", desktop: 220, mobile: 170 },
  { month: "Apr", desktop: 350, mobile: 280 },
  { month: "May", desktop: 360, mobile: 220 },
  { month: "Jun", desktop: 470, mobile: 210 },
  { month: "Jul", desktop: 420, mobile: 260 },
  { month: "Aug", desktop: 320, mobile: 230 },
  { month: "Sep", desktop: 300, mobile: 110 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#46ecd5",
  },
  mobile: {
    label: "Mobile",
    color: "#A0AEC0",
  },
} satisfies ChartConfig;

import React from "react";

export default function SalesOverview() {
  return (
    <div className="shadow p-4 shadow-gray-200 rounded-2xl">
      <h4 className="text-xl font-medium text-gray-700">Sales Overview</h4>
      <p className="text-gray-400 mb-8 text-sm">
        <span className="text-green-600 text-base font-semibold">
          (+5) more
        </span>{" "}
        in 2021
      </p>
      <ChartAreaStacked />
    </div>
  );
}

// function ChartAreaStacked() {
//   return (
//     // <div className="h-full w-full">
//     //   <CardContent>
//     //     <ChartContainer config={chartConfig}>
//     //       <AreaChart
//     //         accessibilityLayer
//     //         data={chartData}
//     //         margin={{
//     //           left: 12,
//     //           right: 12,
//     //         }}
//     //       >
//     //         <CartesianGrid vertical={false} />
//     //         <XAxis
//     //           dataKey="month"
//     //           tickLine={false}
//     //           axisLine={false}
//     //           tickMargin={8}
//     //           tickFormatter={(value) => value.slice(0, 3)}
//     //         />
//     // <YAxis
//     //   axisLine={false}
//     //   tickLine={false}
//     //   ticks={[0, 100, 200, 300, 400, 500]}
//     //   tick={{ fill: "#A0AEC0", fontSize: 12 }}
//     // />
//     //         <ChartTooltip
//     //           cursor={false}
//     //           content={<ChartTooltipContent indicator="dot" />}
//     //         />
//     //         <Area
//     //           dataKey="mobile"
//     //           type="natural"
//     //           fill="var(--color-mobile)"
//     //           strokeWidth={3}
//     //           fillOpacity={0.4}
//     //           stroke="var(--color-mobile)"
//     //           stackId="a"
//     //         />
//     //         <Area
//     //           dataKey="desktop"
//     //           type="natural"
//     //           fill="var(--color-desktop)"
//     //           fillOpacity={0.4}
//     //           strokeWidth={3}
//     //           stroke="var(--color-desktop)"
//     //           stackId="a"
//     //         />
//     //       </AreaChart>
//     //     </ChartContainer>
//     //   </CardContent>
//     // </div>

//     <div>
//       <CardHeader>
//         <CardTitle>Sales Chart</CardTitle>
//         <CardDescription>
//           Showing total sales for the last 12 months
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <ChartContainer config={chartConfig}>
//           <AreaChart
//             accessibilityLayer
//             data={chartData}
//             margin={{
//               left: 12,
//               right: 12,
//             }}
//           >
//             <CartesianGrid vertical={false} />
//             <XAxis
//               dataKey="month"
//               tickLine={false}
//               axisLine={false}
//               tickMargin={8}
//               tickFormatter={(value) => value.slice(0, 3)}
//             />

//             <ChartTooltip
//               cursor={false}
//               content={<ChartTooltipContent indicator="line" />}
//             />
//             <Area
//               dataKey="mobile"
//               type="natural"
//               fill="var(--color-mobile)"
//               fillOpacity={0.4}
//               stroke="var(--color-mobile)"
//               stackId="a"
//               strokeWidth={3}
//             />
//             <Area
//               dataKey="desktop"
//               type="natural"
// fill="var(--color-desktop)"
// fillOpacity={0.4}
//               stroke="var(--color-desktop)"
//               stackId="a"
//               strokeWidth={3}
//             />
//             <ChartLegend content={<ChartLegendContent />} />
//           </AreaChart>
//         </ChartContainer>
//       </CardContent>
//       {/* <CardFooter>
//         <div className="flex w-full items-start gap-2 text-sm">
//           <div className="grid gap-2">
//             <div className="flex items-center gap-2 leading-none font-medium">
//               Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
//             </div>
//             <div className="flex items-center gap-2 leading-none text-muted-foreground">
//               November - December 2026
//             </div>
//           </div>
//         </div>
//       </CardFooter> */}
//     </div>
//   );
// }

export function ChartAreaStacked() {
  return (
    <ChartContainer config={chartConfig}>
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
          strokeWidth={3}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          ticks={[0, 100, 200, 300, 400, 500]}
          tick={{ fill: "#A0AEC0", fontSize: 12 }}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Line
          dataKey="desktop"
          type="monotone"
          stroke="var(--color-desktop)"
          strokeWidth={4}
          dot={false}
        />
        <Line
          dataKey="mobile"
          type="monotone"
          stroke="var(--color-mobile)"
          strokeWidth={4}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
