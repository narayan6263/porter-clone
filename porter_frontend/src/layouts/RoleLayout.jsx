import DashboardShell from "../components/layout/DashboardShell";

export default function RoleLayout({ role = "user", title, subtitle, cards, highlights }) {
  return (
    <DashboardShell
      role={role}
      title={title}
      subtitle={subtitle}
      cards={cards}
      highlights={highlights}
    />
  );
}
