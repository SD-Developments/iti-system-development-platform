const TechnicalGrid = ({ dark = false }) => (
  <div
    className="pointer-events-none absolute inset-0"
    style={{
      backgroundImage: dark
        ? 'radial-gradient(rgba(0,176,176,0.12) 1px, transparent 1px), radial-gradient(rgba(224,53,49,0.08) 1px, transparent 1px)'
        : 'radial-gradient(var(--sd-navy) 1px, transparent 1px)',
      backgroundSize: dark ? '32px 32px' : '24px 24px',
      backgroundPosition: dark ? '0 0, 16px 16px' : '0 0',
      opacity: dark ? 0.3 : 0.07,
    }}
  />
);

export default TechnicalGrid;
