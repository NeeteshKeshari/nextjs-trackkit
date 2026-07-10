type BadgeProps = {
  children: React.ReactNode;
  tone?: "blue" | "green" | "purple";
};

const toneClassName = {
  blue: "badge badge-blue",
  green: "badge badge-green",
  purple: "badge badge-purple",
};

export function Badge({ children, tone = "blue" }: BadgeProps) {
  return <span className={toneClassName[tone]}>{children}</span>;
}
