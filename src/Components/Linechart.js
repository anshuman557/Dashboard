import React from "react";
import { Chart } from "react-google-charts";
const jsonData = {
  monthly: [
    {
      year: 2023,
      month: "December",
      debits: {
        total_amount: 17020.0,
        // "total_amount": 1030590.0,
        total_transactions: 2,
      },
      credits: {
        total_amount: 10000.0,
        // "total_amount": 1031000.0,
        total_transactions: 2,
      },
      balances: 19836.3589339716,
      expense_categories: [
        {
          name: "fashion",
          value: 0.0,
          percentage: 0.0,
        },
        {
          name: "travel",
          value: 0.0,
          percentage: 0.0,
        },
      ],
      increase_in_spends: 25.0,
      money_transfer_mode: [
        {
          upi: 1000.0,
        },
        {
          neft: 0.0,
        },
        {
          rtgs: 0.0,
        },
        {
          other: 1030000.0,
        },
      ],
    },
    {
      year: 2024,
      month: "January",
      debits: {
        total_amount: 17520.0,
        total_transactions: 2,
      },
      credits: {
        total_amount: 20008.0,
        total_transactions: 2,
      },
      balances: 19836.3589339716,
      expense_categories: [
        {
          name: "fashion",
          value: 0.0,
          percentage: 0.0,
        },
        {
          name: "travel",
          value: 0.0,
          percentage: 0.0,
        },
      ],
      increase_in_spends: 25.0,
      money_transfer_mode: [
        {
          upi: 20000.0,
        },
        {
          neft: 0.0,
        },
        {
          rtgs: 0.0,
        },
        {
          other: 8.0,
        },
      ],
    },
    {
      year: 2024,
      month: "February",
      debits: {
        total_amount: 16520.71,
        total_transactions: 2,
      },
      credits: {
        total_amount: 17000.0,
        total_transactions: 1,
      },
      balances: 14877.269200478702,
      expense_categories: [
        {
          name: "fashion",
          value: 0.0,
          percentage: 0.0,
        },
        {
          name: "travel",
          value: 0.0,
          percentage: 0.0,
        },
      ],
      increase_in_spends: 18.75,
      money_transfer_mode: [
        {
          upi: 17000.0,
        },
        {
          neft: 0.0,
        },
        {
          rtgs: 0.0,
        },
        {
          other: 0.0,
        },
      ],
    },
    {
      year: 2024,
      month: "March",
      debits: {
        total_amount: 16520.47,
        total_transactions: 3,
      },
      credits: {
        total_amount: 17001.0,
        total_transactions: 2,
      },
      balances: 24795.4486674645,
      expense_categories: [
        {
          name: "fashion",
          value: 0.0,
          percentage: 0.0,
        },
        {
          name: "travel",
          value: 0.0,
          percentage: 0.0,
        },
      ],
      increase_in_spends: 31.25,
      money_transfer_mode: [
        {
          upi: 17000.0,
        },
        {
          neft: 1.0,
        },
        {
          rtgs: 0.0,
        },
        {
          other: 0.0,
        },
      ],
    },
  ],
};
const transformedData = [
  ["Month", "Total Debits", "Total Credits", "Balances"],
  ...jsonData.monthly.map((item) => [
    `${item.month} ${item.year}`,
    item.debits.total_amount,
    item.credits.total_amount,
    item.balances,
  ]),
];
export const options = {
  chart: {
    title: "Box Office Earnings in First Two Weeks of Opening",
    subtitle: "in millions of dollars (USD)",
  },
};
export default function Linechart() {
  return (
    <Chart
      chartType="Line"
      width="100%"
      height="400px"
      data={transformedData}
      options={options}
    />
  );
}
