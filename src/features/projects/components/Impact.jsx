import ImpactItem from './ImpactItem';

const Impact = () => {
  return (
    <>
      <section className="border-b border-border bg-sd-bg-light py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:divide-x-2 md:divide-border">
            <ImpactItem
              number="340+"
              title="Projects Shipped"
              description="To government agencies, global startups, and production users."
              color="primary"
            />

            <ImpactItem
              number="27"
              title="Sovereign Domains"
              description="Covering health, finance, agriculture, transit, and edge robotics."
              color="teal"
            />

            <ImpactItem
              number="4,500+"
              title="Engineers Graduated"
              description="Leading engineering organizations across Europe, MENA, and the US."
              color="red"
            />

            <ImpactItem
              number="100%"
              title="Live Oral Defense"
              description="Every capstone is publicly audited with zero unexamined lines of code."
              color="primary"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Impact;
