import RoleLayout from "../../layouts/RoleLayout";

const cards = [
  {
    title: "Current availability",
    value: "12 rides open",
    note: "Three high-value requests are close to your area",
  },
  {
    title: "Today’s target",
    value: "₹2,000",
    note: "You are 78% of the way to your target",
  },
  {
    title: "Route accuracy",
    value: "96%",
    note: "Last delivery completed within SLA window",
  },
  {
    title: "Customer rating",
    value: "4.8 / 5",
    note: "Strong feedback this week from repeat riders",
  },
];

const highlights = [
  {
    title: "Weekly earnings",
    value: "₹6,800",
    tag: "Growing",
    note: "Earnings improved compared to the previous week.",
  },
  {
    title: "New dispatch alerts",
    value: "4 pending",
    tag: "Live",
    note: "Respond fast to stay ahead of demand spikes.",
  },
];

export default function Dashboard() {
  return (
    <RoleLayout
      role="driver"
      title="Driver Dashboard"
      subtitle="Manage trips, earnings, and delivery flow from one smart workspace."
      cards={cards}
      highlights={highlights}
    />
  );
}