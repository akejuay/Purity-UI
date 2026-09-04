"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import * as React from "react";
import { Progress } from "@/components/ui/progress";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 95, mobile: 140 },
  { month: "July", desktop: 160, mobile: 80 },
  { month: "August", desktop: 305, mobile: 200 },
  { month: "September", desktop: 400, mobile: 120 },
];

const userInfo = [
  {
    icon: "wallet-3-line",
    title: "User",
    numbers: "32,984",
    progress: 70,
  },
  {
    icon: "space-ship-2-line",
    title: "Clicks",
    numbers: "2.42m",
    progress: 90,
  },
  {
    icon: "shopping-cart-2-line",
    title: "Sales",
    numbers: "$2,400",
    progress: 40,
  },
  {
    icon: "wrench-line",
    title: "Items",
    numbers: "320",
    progress: 65,
  },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#FFFFFf",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export function UserChart() {
  return (
    <div className="space-y-6 shadow shadow-gray-200 p-4 rounded-2xl">
      <BarCHART />
      <div>
        <h4 className="text-xl font-medium text-gray-700">Active Users</h4>
        <p className="text-gray-400 text-sm">
          <span className="text-green-600 text-base font-semibold">(+23%)</span>{" "}
          than a week
        </p>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {userInfo.map((items) => (
          <div key={items.icon}>
            <div className="flex items-center gap-4 mb-4">
              <i
                className={`ri-${items.icon} bg-teal-300 px-3 py-2 rounded-2xl text-lg text-white`}
              ></i>
              <p className="text-gray-500 mb-1 font-medium text-sm">
                {items.title}
              </p>
            </div>
            <h4 className="font-semibold text-gray-700 text-lg mb-2">
              {items.numbers}
            </h4>
            <div className="bg-gray-200 rounded-2xl h-0.5 w-full">
              <div
                className={`bg-teal-400 h-0.5 rounded-2xl`}
                style={{
                  width: `${items.progress}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BarCHART() {
  return (
    <ChartContainer
      config={chartConfig}
      className="bg-linear-to-r from-[#313860] to-[#151928] p-6 rounded-2xl"
    >
      <BarChart accessibilityLayer data={chartData}>
        {/* <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        /> */}
        <YAxis
          axisLine={false}
          tickLine={false}
          ticks={[0, 100, 200, 300, 400, 500]}
          tick={{ fill: "#A0AEC0", fontSize: 12 }}
        />
        {/* <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} /> */}
        <Bar
          dataKey="desktop"
          fill="var(--color-desktop)"
          radius={[10, 10, 10, 10]}
          barSize={12}
        />
        {/* <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} /> */}
      </BarChart>
    </ChartContainer>
  );
}
