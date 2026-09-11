function Metric({ value, label }) {
  return (
    <div>
      <div className="text-xl font-extrabold text-primary">{value}</div>
      <div className="mt-1 text-xs font-semibold text-muted-foreground">{label}</div>
    </div>
  );
}
export default Metric;
