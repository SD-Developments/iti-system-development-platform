const HeroSectionBackPattern = () => {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
      absolute
      -right-10
      top-1/2
      -translate-y-1/2
      select-none
      font-black
      leading-none
      tracking-[-0.08em]
      text-[260px]
      text-white/[0.018]
      sm:text-[360px]
      lg:text-[460px]
    "
        >
          SD
        </div>

        {/* =======================================================
      02 — LARGE CONSTRUCTION CIRCLE
  ======================================================== */}

        <div
          className="
      absolute
      -left-[260px]
      -top-[280px]
      h-[760px]
      w-[760px]
      rounded-full
      border
      border-sd-teal/[0.10]
    "
        />

        <div
          className="
      absolute
      -left-[180px]
      -top-[200px]
      h-[600px]
      w-[600px]
      rounded-full
      border
      border-dashed
      border-sd-teal/[0.08]
    "
        />

        <div
          className="
      absolute
      -left-[90px]
      -top-[110px]
      h-[420px]
      w-[420px]
      rounded-full
      border
      border-sd-teal/[0.06]
    "
        />

        {/* =======================================================
      03 — RIGHT CONSTRUCTION CIRCLE
  ======================================================== */}

        <div
          className="
      absolute
      -right-[300px]
      -top-[240px]
      h-[700px]
      w-[700px]
      rounded-full
      border
      border-sd-red/[0.09]
    "
        />

        <div
          className="
      absolute
      -right-[200px]
      -top-[150px]
      h-[520px]
      w-[520px]
      rounded-full
      border
      border-dashed
      border-sd-red/[0.07]
    "
        />

        {/* =======================================================
      04 — DIAGONAL CONSTRUCTION LINES
  ======================================================== */}

        <div
          className="
      absolute
      left-0
      top-[18%]
      h-px
      w-[55%]
      rotate-[18deg]
      bg-gradient-to-r
      from-transparent
      via-sd-teal/[0.12]
      to-transparent
    "
        />

        <div
          className="
      absolute
      right-0
      top-[62%]
      h-px
      w-[45%]
      -rotate-[16deg]
      bg-gradient-to-r
      from-transparent
      via-sd-red/[0.10]
      to-transparent
    "
        />

        <div
          className="
      absolute
      left-[45%]
      top-0
      h-[55%]
      w-px
      rotate-[25deg]
      bg-gradient-to-b
      from-transparent
      via-white/[0.04]
      to-transparent
    "
        />

        {/* =======================================================
      05 — TECHNICAL MEASUREMENT LINE
  ======================================================== */}

        <div
          className="
      absolute
      left-[7%]
      top-[24%]
      hidden
      h-32
      w-px
      bg-slate-400/[0.12]
      lg:block
    "
        />

        <div
          className="
      absolute
      left-[6.6%]
      top-[24%]
      hidden
      h-px
      w-3
      bg-sd-teal/40
      lg:block
    "
        />

        <div
          className="
      absolute
      left-[6.6%]
      top-[50%]
      hidden
      h-px
      w-3
      bg-sd-teal/30
      lg:block
    "
        />

        <span
          className="
      absolute
      left-[4.5%]
      top-[36%]
      hidden
      rotate-90
      font-mono
      text-[7px]
      tracking-[0.3em]
      text-slate-500/50
      lg:block
    "
        >
          042 / 760
        </span>

        {/* =======================================================
      06 — TECHNICAL CROSSHAIR
  ======================================================== */}

        <div
          className="
      absolute
      left-[18%]
      top-[18%]
      hidden
      h-8
      w-8
      lg:block
    "
        >
          <span className="absolute left-1/2 top-0 h-full w-px bg-sd-teal/25" />
          <span className="absolute left-0 top-1/2 h-px w-full bg-sd-teal/25" />

          <span
            className="
        absolute
        left-1/2
        top-1/2
        h-1.5
        w-1.5
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-sd-teal/70
      "
          />
        </div>

        {/* =======================================================
      07 — SECOND CROSSHAIR
  ======================================================== */}

        <div
          className="
      absolute
      right-[16%]
      bottom-[18%]
      hidden
      h-7
      w-7
      lg:block
    "
        >
          <span className="absolute left-1/2 top-0 h-full w-px bg-sd-red/20" />
          <span className="absolute left-0 top-1/2 h-px w-full bg-sd-red/20" />

          <span
            className="
        absolute
        left-1/2
        top-1/2
        h-1.5
        w-1.5
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-sd-red/60
      "
          />
        </div>

        {/* =======================================================
      08 — TECHNICAL NODE NETWORK
  ======================================================== */}

        <svg
          className="
      absolute
      right-[8%]
      top-[28%]
      h-[220px]
      w-[300px]
      opacity-30
    "
          viewBox="0 0 300 220"
          fill="none"
        >
          <path
            d="M20 40H100L145 85H220L280 30"
            stroke="var(--sd-teal)"
            strokeWidth="1"
            strokeOpacity="0.3"
          />

          <path
            d="M70 190L120 140H190L240 185"
            stroke="var(--sd-teal)"
            strokeWidth="1"
            strokeOpacity="0.2"
          />

          <path d="M145 85V140" stroke="var(--sd-red)" strokeWidth="1" strokeOpacity="0.25" />

          <circle cx="20" cy="40" r="3" fill="var(--sd-teal)" fillOpacity="0.6" />

          <circle cx="145" cy="85" r="3" fill="var(--sd-red)" fillOpacity="0.7" />

          <circle cx="220" cy="85" r="3" fill="var(--sd-teal)" fillOpacity="0.5" />

          <circle cx="280" cy="30" r="2.5" fill="var(--sd-teal)" fillOpacity="0.5" />

          <circle cx="120" cy="140" r="2.5" fill="var(--sd-red)" fillOpacity="0.5" />
        </svg>

        {/* =======================================================
      09 — MICRO DOT FIELD
  ======================================================== */}

        <div
          className="
      absolute
      right-[34%]
      top-[16%]
      h-1
      w-1
      rounded-full
      bg-sd-teal/60
    "
        />

        <div
          className="
      absolute
      right-[39%]
      top-[23%]
      h-1
      w-1
      rounded-full
      bg-white/20
    "
        />

        <div
          className="
      absolute
      left-[38%]
      bottom-[18%]
      h-1
      w-1
      rounded-full
      bg-sd-red/60
    "
        />

        <div
          className="
      absolute
      left-[44%]
      bottom-[28%]
      h-1.5
      w-1.5
      rounded-full
      bg-sd-teal/50
    "
        />

        {/* =======================================================
      10 — TECHNICAL LABELS
  ======================================================== */}

        <span
          className="
      absolute
      left-[9%]
      top-[14%]
      hidden
      font-mono
      text-[8px]
      uppercase
      tracking-[0.35em]
      text-slate-500/50
      lg:block
    "
        >
          SD / 04
        </span>

        <span
          className="
      absolute
      right-[8%]
      top-[52%]
      hidden
      font-mono
      text-[8px]
      uppercase
      tracking-[0.35em]
      text-slate-500/40
      lg:block
    "
        >
          SYSTEM / ACTIVE
        </span>

        <span
          className="
      absolute
      bottom-[12%]
      left-[12%]
      hidden
      font-mono
      text-[8px]
      uppercase
      tracking-[0.3em]
      text-slate-500/40
      lg:block
    "
        >
          PEOPLE · TECHNOLOGY · IMPACT
        </span>

        {/* =======================================================
      11 — SMALL RED ACCENT BAR
  ======================================================== */}

        <div
          className="
      absolute
      right-[11%]
      bottom-[15%]
      hidden
      h-px
      w-16
      bg-gradient-to-r
      from-transparent
      via-sd-red/50
      to-sd-red
      lg:block
    "
        />

        {/* =======================================================
      12 — ATMOSPHERIC LIGHT
  ======================================================== */}

        <div
          className="
      absolute
      left-[20%]
      top-[20%]
      h-[500px]
      w-[500px]
      rounded-full
      bg-sd-teal/[0.035]
      blur-[140px]
    "
        />

        <div
          className="
      absolute
      right-[10%]
      top-0
      h-[400px]
      w-[400px]
      rounded-full
      bg-sd-red/[0.025]
      blur-[140px]
    "
        />
      </div>
    </>
  );
};

export default HeroSectionBackPattern;
