import { sdStats } from '@/constants';

const SdStats = () => {
  return (
    <>
      <section className="bg-sd-bg-light py-14">
        <div className="mx-auto grid max-w-[1340px] gap-5 px-6 md:grid-cols-4">
          {sdStats.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-sd-red"
            >
              <div className="text-3xl font-extrabold text-sd-navy">{item.value}</div>

              <div className="mt-3 font-semibold text-sd-navy">{item.title}</div>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SdStats;
