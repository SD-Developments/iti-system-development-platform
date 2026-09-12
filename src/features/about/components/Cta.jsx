import { NavLink } from 'react-router';

const Cta = () => {
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-20 md:px-6 lg:py-24">
        <div className="relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl bg-linear-to-r from-primary via-primary/80 to-sd-navy p-8 text-white shadow-2xl md:p-14 lg:flex-row">
          <div className="relative z-10 flex max-w-xl flex-col gap-3">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-white/90 backdrop-blur-md">
              INTAKE 45 ADMISSIONS NOW PREVIEWING
            </div>

            <h2 className="mt-1 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Build the Future of Software?
            </h2>

            <p className="text-sm leading-relaxed text-white/90 sm:text-base">
              Explore our specialized diplomas, intensive 4-month bootcamps, and nationwide tracks.
              Admissions open cyclically across all 11 Egyptian branches.
            </p>
          </div>

          <div className="relative z-10 flex w-full shrink-0 flex-col items-center gap-4 sm:flex-row lg:w-auto">
            <NavLink
              to="/tracks"
              className="w-full rounded-xl bg-white px-8 py-4 text-center text-sm font-bold text-sd-navy shadow-lg transition-all hover:bg-sd-white sm:w-auto"
            >
              Explore All Tracks
            </NavLink>

            <NavLink
              to="/programs"
              className="w-full rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-center text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 sm:w-auto"
            >
              View Programs & Diplomas
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
