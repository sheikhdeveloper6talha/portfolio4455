import { stats } from "../../data/stats";
import "./Stats.css";
import StatItem from "./StatItem";

export default function Stats() {
  return (
    <section className="stats">
      {stats.map((stat) => (
        <StatItem key={stat.label} stat={stat} />
      ))}
    </section>
  );
}
