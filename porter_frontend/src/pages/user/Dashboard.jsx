import RoleLayout from "../../layouts/RoleLayout";

const cards = [
  {
    title: "Next scheduled trip",
    value: "08:30 AM",
    note: "Bengaluru City → Whitefield",
  },
  {
    title: "Payment method",
    value: "UPI • Saved",
    note: "Last payment cleared successfully",
  },
  {
    title: "Recent order status",
    value: "On the way",
    note: "Driver is reaching in 4 minutes",
  },
  {
    title: "Trip score",
    value: "4.9 / 5",
    note: "Great service rating this week",
  },
];

const highlights = [
  {
    title: "Active support ticket",
    value: "1 open request",
    tag: "Priority",
    note: "Your refund request has been reviewed and is being processed.",
  },
  {
    title: "Rewards earned",
    value: "180 bonus points",
    tag: "New",
    note: "Use your bonus points on your next premium ride.",
  },
];

export default function Dashboard() {
  return (
    <RoleLayout
      role="user"
      title="User Dashboard"
      subtitle="A cleaner, more premium ride-booking experience for everyday travel."
      cards={cards}
      highlights={highlights}
    />
  );
}