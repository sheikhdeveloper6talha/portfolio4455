import useCountUp from "../../hooks/useCountUp";

export default function StatItem({ stat }) {
  const [ref, value] = useCountUp(stat.value, 1500);

  return (
    <div className="stat" ref={ref}>
      <h3>
        {value}
        {stat.suffix}
      </h3>
      <p>{stat.label}</p>
    </div>
  );
}
