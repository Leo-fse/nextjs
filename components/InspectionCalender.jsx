import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

export const InspectionCalender = () => {
  const startDate = new Date("2021-01-01");
  const endDate = new Date("2022-3-31");

  return (
    <>
      <p className="mt-2">プラントA</p>
      <CalendarHeatmap
        startDate={startDate}
        endDate={endDate}
        horizontal
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-scale-${value.count}`;
        }}
        values={[
          { date: "2021-04-01", count: 1 },
          { date: "2021-04-02", count: 1 },
          { date: "2021-04-03", count: 1 },
          { date: "2021-04-04", count: 1 },
          { date: "2021-04-05", count: 1 },
          { date: "2021-04-06", count: 1 },
          { date: "2021-04-07", count: 1 },
          { date: "2021-04-08", count: 1 },
          { date: "2021-04-09", count: 1 },
          { date: "2021-04-10", count: 1 },
          { date: "2021-05-15", count: 10 },
          { date: "2021-05-16", count: 10 },
          { date: "2021-05-17", count: 10 },
          { date: "2021-05-18", count: 10 },
          { date: "2021-05-19", count: 10 },
          { date: "2021-05-20", count: 10 },
          { date: "2021-05-21", count: 10 },
          { date: "2021-05-22", count: 10 },
          { date: "2021-05-23", count: 10 },
          { date: "2021-05-24", count: 10 },
          { date: "2021-05-25", count: 10 },
          { date: "2021-05-26", count: 10 },
          { date: "2021-05-27", count: 10 },
          { date: "2021-05-28", count: 10 },
          { date: "2021-05-29", count: 10 },
          { date: "2021-05-30", count: 10 },
          { date: "2021-05-31", count: 10 },
          { date: "2021-06-01", count: 10 },
          { date: "2021-07-01", count: 20 },
          { date: "2021-07-02", count: 20 },
          { date: "2021-07-03", count: 20 },
          { date: "2021-07-04", count: 20 },
          { date: "2021-07-05", count: 20 },
          { date: "2021-07-06", count: 20 },
          { date: "2021-07-07", count: 20 },
          { date: "2021-07-08", count: 20 },
          { date: "2021-07-09", count: 20 },
          { date: "2021-07-10", count: 20 },
          { date: "2021-07-11", count: 20 },
          { date: "2021-07-12", count: 20 },
          { date: "2021-07-13", count: 20 },
          { date: "2021-07-14", count: 20 },
          { date: "2021-07-15", count: 20 },
          { date: "2021-07-16", count: 20 },
          { date: "2021-07-17", count: 20 },
          { date: "2021-07-18", count: 20 },
          { date: "2021-07-19", count: 20 },
          { date: "2021-07-20", count: 20 },
          { date: "2021-07-21", count: 20 },
          { date: "2021-07-22", count: 20 },
          { date: "2021-07-23", count: 20 },
          { date: "2021-07-24", count: 20 },
          { date: "2021-07-25", count: 20 },
          { date: "2021-07-26", count: 20 },
          { date: "2021-07-27", count: 20 },
          { date: "2021-07-28", count: 20 },
          { date: "2021-07-29", count: 20 },
          { date: "2021-07-30", count: 20 },
        ]}
      />
      <p>プラントB</p>
      <CalendarHeatmap
        startDate={startDate}
        endDate={endDate}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-scale-${value.count}`;
        }}
        values={[
          { date: "2021-04-11", count: 10 },
          { date: "2021-04-12", count: 10 },
          { date: "2021-04-13", count: 10 },
          { date: "2021-04-14", count: 10 },
          { date: "2021-04-15", count: 10 },
          { date: "2021-04-16", count: 10 },
          { date: "2021-04-17", count: 10 },
          { date: "2021-04-18", count: 10 },
          { date: "2021-04-19", count: 10 },
          { date: "2021-04-20", count: 10 },
          { date: "2021-04-21", count: 10 },
          { date: "2021-04-22", count: 10 },
          { date: "2021-04-23", count: 10 },
          { date: "2021-04-24", count: 10 },
          { date: "2021-04-25", count: 10 },
          { date: "2021-04-26", count: 10 },
          { date: "2021-04-27", count: 10 },
          { date: "2021-04-28", count: 10 },
          { date: "2021-04-29", count: 10 },
          { date: "2021-05-21", count: 1 },
          { date: "2021-05-22", count: 1 },
          { date: "2021-05-23", count: 1 },
          { date: "2021-05-24", count: 1 },
          { date: "2021-05-25", count: 1 },
          { date: "2021-05-26", count: 1 },
          { date: "2021-05-27", count: 1 },
          { date: "2021-05-28", count: 1 },
          { date: "2021-05-29", count: 1 },
          { date: "2021-05-30", count: 1 },
          { date: "2021-05-31", count: 1 },
          { date: "2021-06-01", count: 1 },
          { date: "2021-06-02", count: 1 },
          { date: "2021-06-03", count: 1 },
          { date: "2021-06-04", count: 1 },
          { date: "2021-06-05", count: 1 },
          { date: "2021-06-06", count: 1 },
          { date: "2021-06-07", count: 1 },
          { date: "2021-06-08", count: 1 },
          { date: "2021-06-09", count: 1 },
          { date: "2021-06-10", count: 1 },
          { date: "2021-07-10", count: 20 },
          { date: "2021-07-11", count: 20 },
          { date: "2021-07-12", count: 20 },
          { date: "2021-07-13", count: 20 },
          { date: "2021-07-14", count: 20 },
          { date: "2021-07-15", count: 20 },
          { date: "2021-07-16", count: 20 },
          { date: "2021-07-17", count: 20 },
          { date: "2021-07-18", count: 20 },
          { date: "2021-07-19", count: 20 },
          { date: "2021-07-20", count: 20 },
          { date: "2021-07-21", count: 20 },
          { date: "2021-07-22", count: 20 },
          { date: "2021-07-23", count: 20 },
          { date: "2021-07-24", count: 20 },
          { date: "2021-07-25", count: 20 },
          { date: "2021-07-26", count: 20 },
          { date: "2021-07-27", count: 20 },
          { date: "2021-07-28", count: 20 },
          { date: "2021-07-29", count: 20 },
          { date: "2021-07-30", count: 20 },
          { date: "2021-07-31", count: 20 },
          { date: "2021-08-01", count: 20 },
          { date: "2021-08-02", count: 20 },
          { date: "2021-08-03", count: 20 },
          { date: "2021-08-04", count: 20 },
          { date: "2021-08-05", count: 20 },
          { date: "2021-08-06", count: 20 },
          { date: "2021-08-07", count: 20 },
          { date: "2021-08-08", count: 20 },
          { date: "2021-08-09", count: 20 },
          { date: "2021-08-10", count: 20 },
          { date: "2021-08-20", count: 10 },
          { date: "2021-08-21", count: 10 },
          { date: "2021-08-22", count: 10 },
          { date: "2021-08-23", count: 10 },
          { date: "2021-08-24", count: 10 },
          { date: "2021-08-25", count: 10 },
          { date: "2021-08-26", count: 10 },
          { date: "2021-08-27", count: 10 },
          { date: "2021-08-28", count: 10 },
          { date: "2021-08-29", count: 10 },
          { date: "2021-08-30", count: 10 },
        ]}
      />
      <p>プラントC</p>
      <CalendarHeatmap
        startDate={startDate}
        endDate={endDate}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-scale-${value.count}`;
        }}
        values={[
          { date: "2021-06-15", count: 10 },
          { date: "2021-06-16", count: 10 },
          { date: "2021-06-17", count: 10 },
          { date: "2021-06-18", count: 10 },
          { date: "2021-06-19", count: 10 },
          { date: "2021-06-20", count: 10 },
          { date: "2021-06-21", count: 10 },
          { date: "2021-06-22", count: 10 },
          { date: "2021-06-23", count: 10 },
          { date: "2021-06-24", count: 10 },
          { date: "2021-06-25", count: 10 },
          { date: "2021-06-26", count: 10 },
          { date: "2021-06-27", count: 10 },
          { date: "2021-06-28", count: 10 },
          { date: "2021-06-29", count: 10 },
          { date: "2021-06-30", count: 10 },
          { date: "2021-08-01", count: 1 },
          { date: "2021-08-02", count: 1 },
          { date: "2021-08-03", count: 1 },
          { date: "2021-08-04", count: 1 },
          { date: "2021-08-05", count: 1 },
          { date: "2021-08-06", count: 1 },
          { date: "2021-08-07", count: 1 },
          { date: "2021-08-08", count: 1 },
          { date: "2021-08-09", count: 1 },
          { date: "2021-08-10", count: 1 },
        ]}
      />
      <p>プラントD</p>
      <CalendarHeatmap
        startDate={startDate}
        endDate={endDate}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-scale-${value.count}`;
        }}
        values={[
          { date: "2021-04-15", count: 1 },
          { date: "2021-04-16", count: 1 },
          { date: "2021-04-17", count: 1 },
          { date: "2021-04-18", count: 1 },
          { date: "2021-04-19", count: 1 },
          { date: "2021-04-20", count: 1 },
          { date: "2021-04-21", count: 1 },
          { date: "2021-04-22", count: 1 },
          { date: "2021-04-23", count: 1 },
          { date: "2021-04-24", count: 1 },
          { date: "2021-04-25", count: 1 },
          { date: "2021-04-26", count: 1 },
          { date: "2021-04-27", count: 1 },
          { date: "2021-04-28", count: 1 },
          { date: "2021-04-29", count: 1 },
          { date: "2021-04-30", count: 1 },
          { date: "2021-05-01", count: 1 },
          { date: "2021-05-02", count: 1 },
          { date: "2021-05-03", count: 1 },
          { date: "2021-05-04", count: 1 },
          { date: "2021-06-02", count: 20 },
          { date: "2021-06-03", count: 20 },
          { date: "2021-06-04", count: 20 },
          { date: "2021-06-05", count: 20 },
          { date: "2021-06-06", count: 20 },
          { date: "2021-06-07", count: 20 },
          { date: "2021-06-08", count: 20 },
          { date: "2021-06-09", count: 20 },
          { date: "2021-06-10", count: 20 },
          { date: "2021-06-11", count: 20 },
          { date: "2021-06-12", count: 20 },
          { date: "2021-06-13", count: 20 },
          { date: "2021-06-14", count: 20 },
          { date: "2021-06-15", count: 20 },
          { date: "2021-06-16", count: 20 },
          { date: "2021-06-17", count: 20 },
          { date: "2021-06-18", count: 20 },
          { date: "2021-06-19", count: 20 },
          { date: "2021-06-20", count: 20 },
          { date: "2021-07-16", count: 10 },
          { date: "2021-07-17", count: 10 },
          { date: "2021-07-18", count: 10 },
          { date: "2021-07-19", count: 10 },
          { date: "2021-07-20", count: 10 },
          { date: "2021-07-21", count: 10 },
          { date: "2021-07-22", count: 10 },
          { date: "2021-07-23", count: 10 },
          { date: "2021-07-24", count: 10 },
          { date: "2021-07-25", count: 10 },
          { date: "2021-07-26", count: 10 },
          { date: "2021-07-27", count: 10 },
          { date: "2021-07-28", count: 10 },
          { date: "2021-07-29", count: 10 },
          { date: "2021-07-30", count: 10 },
          { date: "2021-07-31", count: 10 },
          { date: "2021-08-01", count: 10 },
          { date: "2021-08-02", count: 10 },
          { date: "2021-08-03", count: 10 },
          { date: "2021-08-04", count: 10 },
          { date: "2021-08-05", count: 10 },
          { date: "2021-08-06", count: 10 },
          { date: "2021-08-07", count: 10 },
          { date: "2021-08-08", count: 10 },
          { date: "2021-08-09", count: 10 },
          { date: "2021-08-10", count: 10 },
        ]}
      />
    </>
  );
};
