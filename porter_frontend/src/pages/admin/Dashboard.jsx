import RoleLayout from "../../layouts/RoleLayout";

const cards = [
  {
    title: "Fleet health",
    value: "98.2%",
    note: "Vehicle uptime is stable across all active zones",
  },
  {
    title: "Revenue summary",
    value: "₹24.8k",
    note: "This is the highest 24-hour revenue week so far",
  },
  {
    title: "Driver approval",
    value: "16 queued",
    note: "KYC and verification checks are in progress",
  },
  {
    title: "Service incidents",
    value: "02",
    note: "Two low-severity issues are being monitored",
  },
];

const highlights = [
  {
    title: "Platform growth",
    value: "+12.5%",
    tag: "Trending",
    note: "Daily bookings are increasing across city hotspots.",
  },
  {
    title: "Audit status",
    value: "All cleared",
    tag: "Stable",
    note: "Operations and compliance checks are complete for this cycle.",
  },
];

export default function Dashboard() {
  return (
    <RoleLayout
      role="admin"
      title="Admin Dashboard"
      subtitle="A central control hub for drivers, users, revenue, and platform insights."
      cards={cards}
      highlights={highlights}
    />
  );
}