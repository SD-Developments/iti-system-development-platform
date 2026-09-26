import { useState } from 'react';
import { tracks } from '@/features/tracks/data';

const BranchHubsSection = () => {
  const [selectedBranch, setSelectedBranch] = useState('Smart Village');

  const selectedTracks = tracks.filter((track) => track.branches?.includes(selectedBranch));

  const branchDisplayNames = {
    'Smart Village': 'Smart Village',
    Alexandria: 'Alexandria',
    'Suez Canal': 'Suez Canal / Ismailia',
    Assiut: 'Assiut',
    'Mid-South': 'Minya / Sohag / Qena',
    Aswan: 'Aswan',
    Delta: 'Nile Delta',
  };

  return (
    <>
      <section className="w-full border-b border-border bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* ==================================================
              HEADER
          ================================================== */}

          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
            <span className="mb-2 inline-block font-mono text-[10px] font-bold uppercase tracking-widest text-sd-teal sm:text-xs">
              Synchronized Digital Fabric
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              One Engineering Community. Many Hubs.
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              A synchronized network connecting Cairo, Alexandria, the Delta, and Upper Egypt into
              one collaborative software ecosystem.
            </p>
          </div>

          {/* ==================================================
              DARK NETWORK PANEL
          ================================================== */}

          <div className="relative overflow-hidden rounded-3xl border border-sd-navy bg-linear-to-br from-sd-navy to-[#051D2A] p-5 text-white shadow-2xl sm:p-8 lg:p-12">
            <div
              className="pointer-events-none absolute inset-0 opacity-15"
              style={{
                backgroundImage: 'radial-gradient(circle, var(--sd-teal) 0.7px, transparent 0.7px)',
                backgroundSize: '24px 24px',
              }}
            />

            <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              {/* ==================================================
                  SVG MAP
              ================================================== */}

              <div className="flex items-center justify-center lg:col-span-7">
                <div className="relative flex aspect-16/10 w-full max-w-140 items-center justify-center">
                  <svg
                    className="h-full w-full"
                    fill="none"
                    viewBox="0 0 540 340"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Nile */}
                    <path
                      d="M 230 40 Q 240 100 230 160 Q 220 230 250 310"
                      opacity="0.3"
                      stroke="var(--sd-teal)"
                      strokeDasharray="4 4"
                      strokeWidth="2"
                    />

                    {/* Mediterranean */}
                    <path
                      d="M 90 60 Q 230 45 420 70"
                      opacity="0.4"
                      stroke="var(--sd-gray)"
                      strokeDasharray="2 3"
                      strokeWidth="1.5"
                    />

                    {/* Network */}
                    <path
                      d="M 120 70 L 230 120"
                      opacity="0.7"
                      stroke="var(--sd-teal)"
                      strokeWidth="2.5"
                    />

                    <path
                      d="M 230 120 L 370 125"
                      opacity="0.7"
                      stroke="var(--sd-red)"
                      strokeWidth="2.5"
                    />

                    <path d="M 200 85 L 230 120" stroke="var(--sd-teal)" strokeWidth="2" />

                    <path
                      d="M 230 120 L 250 200"
                      opacity="0.85"
                      stroke="var(--sd-teal)"
                      strokeWidth="2.5"
                    />

                    <path
                      d="M 250 200 L 260 275"
                      opacity="0.85"
                      stroke="var(--sd-red)"
                      strokeWidth="2.5"
                    />

                    <path d="M 260 275 L 280 320" stroke="var(--sd-teal)" strokeWidth="2" />

                    {/* ==================================================
                        ALEXANDRIA
                    ================================================== */}

                    <g
                      onClick={() => setSelectedBranch('Alexandria')}
                      className="group cursor-pointer"
                    >
                      <circle
                        cx="120"
                        cy="70"
                        fill="var(--sd-teal)"
                        fillOpacity={selectedBranch === 'Alexandria' ? '0.35' : '0.2'}
                        r={selectedBranch === 'Alexandria' ? '18' : '14'}
                        className="transition-all duration-300 group-hover:r-[18]"
                      />

                      <circle
                        cx="120"
                        cy="70"
                        fill="var(--sd-teal)"
                        r={selectedBranch === 'Alexandria' ? '8' : '6'}
                        className="transition-all duration-300 group-hover:r-[8]"
                      />

                      <circle
                        cx="120"
                        cy="70"
                        r="10"
                        stroke="var(--sd-teal)"
                        strokeOpacity="0.6"
                        strokeWidth="1.5"
                        className="transition-all duration-300 group-hover:stroke-[2.5]"
                      />

                      <text
                        fill={selectedBranch === 'Alexandria' ? '#FFFFFF' : '#E7F2FF'}
                        fontFamily="'JetBrains Mono', monospace"
                        fontSize="11"
                        fontWeight="600"
                        x="50"
                        y="55"
                        className="transition-all duration-300"
                      >
                        Alexandria Hub
                      </text>

                      <text
                        fill="var(--sd-teal)"
                        fontFamily="'Plus Jakarta Sans', sans-serif"
                        fontSize="9"
                        x="65"
                        y="70"
                      >
                        Click to explore tracks
                      </text>
                    </g>

                    {/* ==================================================
                        DELTA
                    ================================================== */}

                    <g onClick={() => setSelectedBranch('Delta')} className="group cursor-pointer">
                      <circle
                        cx="200"
                        cy="85"
                        fill="var(--sd-teal)"
                        fillOpacity={selectedBranch === 'Delta' ? '0.35' : '0.2'}
                        r={selectedBranch === 'Delta' ? '16' : '12'}
                        className="transition-all duration-300 group-hover:r-[16]"
                      />

                      <circle
                        cx="200"
                        cy="85"
                        fill="var(--sd-teal)"
                        r={selectedBranch === 'Delta' ? '7' : '5'}
                        className="transition-all duration-300 group-hover:r-[7]"
                      />

                      <text
                        fill="#E7F2FF"
                        fontFamily="'JetBrains Mono', monospace"
                        fontSize="11"
                        fontWeight="600"
                        x="180"
                        y="65"
                      >
                        Nile Delta Belt
                      </text>

                      <text
                        fill="#CCD7DF"
                        fontFamily="'Plus Jakarta Sans', sans-serif"
                        fontSize="9"
                        x="185"
                        y="78"
                      >
                        Explore Branch
                      </text>
                    </g>

                    {/* ==================================================
                        SMART VILLAGE
                    ================================================== */}

                    <g
                      onClick={() => setSelectedBranch('Smart Village')}
                      className="group cursor-pointer"
                    >
                      <circle
                        cx="230"
                        cy="120"
                        fill="var(--sd-red)"
                        fillOpacity={selectedBranch === 'Smart Village' ? '0.4' : '0.25'}
                        r={selectedBranch === 'Smart Village' ? '28' : '24'}
                        className="transition-all duration-300 group-hover:r-[28]"
                      />

                      <circle
                        cx="230"
                        cy="120"
                        fill="var(--sd-red)"
                        r={selectedBranch === 'Smart Village' ? '12' : '10'}
                        className="transition-all duration-300 group-hover:r-[12]"
                      />

                      <circle
                        cx="230"
                        cy="120"
                        r="18"
                        stroke="var(--sd-red)"
                        strokeOpacity="0.7"
                        strokeWidth="2"
                      />

                      <text
                        fill="#FFFFFF"
                        fontFamily="'JetBrains Mono', monospace"
                        fontSize="13"
                        fontWeight="700"
                        x="250"
                        y="115"
                      >
                        CAIRO HQ (Smart Village)
                      </text>

                      <text
                        fill="#FFB4AC"
                        fontFamily="'Plus Jakarta Sans', sans-serif"
                        fontSize="10"
                        x="250"
                        y="130"
                      >
                        Click to view available tracks
                      </text>
                    </g>

                    {/* ==================================================
                        SUEZ CANAL / ISMAILIA
                    ================================================== */}

                    <g
                      onClick={() => setSelectedBranch('Suez Canal')}
                      className="group cursor-pointer"
                    >
                      <circle
                        cx="370"
                        cy="125"
                        fill="var(--sd-teal)"
                        fillOpacity={selectedBranch === 'Suez Canal' ? '0.35' : '0.2'}
                        r={selectedBranch === 'Suez Canal' ? '16' : '12'}
                        className="transition-all duration-300 group-hover:r-[16]"
                      />

                      <circle
                        cx="370"
                        cy="125"
                        fill="var(--sd-teal)"
                        r={selectedBranch === 'Suez Canal' ? '7' : '5'}
                        className="transition-all duration-300 group-hover:r-[7]"
                      />

                      <text
                        fill="#E7F2FF"
                        fontFamily="'JetBrains Mono', monospace"
                        fontSize="11"
                        fontWeight="600"
                        x="385"
                        y="125"
                      >
                        Suez Canal (Ismailia)
                      </text>

                      <text
                        fill="var(--sd-teal)"
                        fontFamily="'Plus Jakarta Sans', sans-serif"
                        fontSize="9"
                        x="385"
                        y="138"
                      >
                        Click to explore tracks
                      </text>
                    </g>

                    {/* ==================================================
                        ASSIUT
                    ================================================== */}

                    <g onClick={() => setSelectedBranch('Assiut')} className="group cursor-pointer">
                      <circle
                        cx="250"
                        cy="200"
                        fill="var(--sd-red)"
                        fillOpacity={selectedBranch === 'Assiut' ? '0.35' : '0.2'}
                        r={selectedBranch === 'Assiut' ? '22' : '18'}
                        className="transition-all duration-300 group-hover:r-[22]"
                      />

                      <circle
                        cx="250"
                        cy="200"
                        fill="var(--sd-red)"
                        r={selectedBranch === 'Assiut' ? '9' : '7'}
                        className="transition-all duration-300 group-hover:r-[9]"
                      />

                      <circle
                        cx="250"
                        cy="200"
                        r="13"
                        stroke="var(--sd-red)"
                        strokeOpacity="0.8"
                        strokeWidth="1.5"
                      />

                      <text
                        fill="#FFFFFF"
                        fontFamily="'JetBrains Mono', monospace"
                        fontSize="12"
                        fontWeight="700"
                        x="270"
                        y="200"
                      >
                        Assiut Tech Zone
                      </text>

                      <text
                        fill="#FFB4AC"
                        fontFamily="'Plus Jakarta Sans', sans-serif"
                        fontSize="10"
                        x="270"
                        y="214"
                      >
                        Click to explore tracks
                      </text>
                    </g>

                    {/* ==================================================
                        MID SOUTH
                    ================================================== */}

                    <g
                      onClick={() => setSelectedBranch('Mid-South')}
                      className="group cursor-pointer"
                    >
                      <circle
                        cx="260"
                        cy="275"
                        fill="var(--sd-teal)"
                        fillOpacity={selectedBranch === 'Mid-South' ? '0.35' : '0.2'}
                        r={selectedBranch === 'Mid-South' ? '14' : '10'}
                        className="transition-all duration-300 group-hover:r-[14]"
                      />

                      <circle
                        cx="260"
                        cy="275"
                        fill="var(--sd-teal)"
                        r={selectedBranch === 'Mid-South' ? '7' : '5'}
                        className="transition-all duration-300 group-hover:r-[7]"
                      />

                      <text
                        fill="#E7F2FF"
                        fontFamily="'JetBrains Mono', monospace"
                        fontSize="11"
                        fontWeight="600"
                        x="280"
                        y="275"
                      >
                        Mid-South (Minya / Sohag / Qena)
                      </text>

                      <text
                        fill="#CCD7DF"
                        fontFamily="'Plus Jakarta Sans', sans-serif"
                        fontSize="9"
                        x="280"
                        y="288"
                      >
                        Click to explore tracks
                      </text>
                    </g>

                    {/* ==================================================
                        ASWAN
                    ================================================== */}

                    <g onClick={() => setSelectedBranch('Aswan')} className="group cursor-pointer">
                      <circle
                        cx="280"
                        cy="320"
                        fill="var(--sd-teal)"
                        fillOpacity={selectedBranch === 'Aswan' ? '0.35' : '0.2'}
                        r={selectedBranch === 'Aswan' ? '14' : '10'}
                        className="transition-all duration-300 group-hover:r-[14]"
                      />

                      <circle
                        cx="280"
                        cy="320"
                        fill="var(--sd-teal)"
                        r={selectedBranch === 'Aswan' ? '7' : '5'}
                        className="transition-all duration-300 group-hover:r-[7]"
                      />

                      <text
                        fill="#E7F2FF"
                        fontFamily="'JetBrains Mono', monospace"
                        fontSize="11"
                        fontWeight="600"
                        x="300"
                        y="322"
                      >
                        Creativa Aswan
                      </text>

                      <text
                        fill="var(--sd-teal)"
                        fontFamily="'Plus Jakarta Sans', sans-serif"
                        fontSize="9"
                        x="300"
                        y="335"
                      >
                        Click to explore tracks
                      </text>
                    </g>
                  </svg>
                </div>
              </div>

              {/* ==================================================
                  INTERACTIVE BRANCH DETAILS
              ================================================== */}

              <div className="flex flex-col gap-5 lg:col-span-5">
                {/* Status */}
                <div className="inline-flex w-max items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono text-[10px] text-sd-teal sm:text-xs">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-sd-teal" />
                  INTERACTIVE BRANCH EXPLORER
                </div>

                {/* Main copy */}
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    Explore Tracks by Branch.
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
                    Select any highlighted point on the network map to discover the System
                    Development tracks currently associated with that ITI branch.
                  </p>
                </div>

                {/* Hint */}
                <div className="flex items-center gap-3 rounded-xl border border-sd-teal/20 bg-sd-teal/10 px-4 py-3">
                  <div className="relative flex h-8 w-8 shrink-0 items-center justify-center">
                    <span className="absolute h-5 w-5 animate-ping rounded-full bg-sd-teal/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-sd-teal" />
                  </div>

                  <div>
                    <div className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-sd-teal">
                      Map Interaction
                    </div>

                    <div className="mt-0.5 text-xs text-white/60">
                      Click a node to switch branch
                    </div>
                  </div>
                </div>

                {/* Selected Branch */}
                {/* Selected Branch */}
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                    <div>
                      <span className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-white/40">
                        Selected Branch
                      </span>

                      <h4 className="mt-1 text-lg font-bold text-white">
                        {branchDisplayNames[selectedBranch] || selectedBranch}
                      </h4>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sd-teal/10">
                      <span className="material-symbols-outlined text-[19px] text-sd-teal">
                        location_on
                      </span>
                    </div>
                  </div>

                  {/* Scrollable Tracks */}
                  <div className="max-h-[280px] overflow-y-auto p-4 pr-2">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-white/40">
                        Available Tracks
                      </span>

                      <span className="font-mono text-[9px] font-bold text-sd-teal">
                        {selectedTracks.length} {selectedTracks.length === 1 ? 'TRACK' : 'TRACKS'}
                      </span>
                    </div>

                    {selectedTracks.length > 0 ? (
                      <div className="space-y-2.5">
                        {selectedTracks.map((track) => {
                          const Icon = track.icon;

                          return (
                            <div
                              key={track.id}
                              href={`/tracks/${track.id}`}
                              className="
                group/track
                flex items-center
                justify-between
                gap-3
                rounded-xl
                border border-white/10
                bg-white/5
                p-3.5
                transition-all
                hover:border-sd-teal/40
                hover:bg-white/10
              "
                            >
                              <div className="flex min-w-0 items-center gap-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sd-teal/10 text-sd-teal">
                                  <Icon size={17} />
                                </div>

                                <div className="min-w-0">
                                  <div className="truncate text-xs font-bold text-white">
                                    {track.shortTitle}
                                  </div>

                                  <div className="mt-1 flex items-center gap-2 font-mono text-[9px] text-white/40">
                                    <span>{track.program}</span>

                                    <span className="h-1 w-1 rounded-full bg-white/20" />

                                    <span>{track.duration}</span>

                                    <span className="h-1 w-1 rounded-full bg-white/20" />

                                    <span>{track.hours}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="rounded-xl border border-dashed border-white/10 bg-white/[0.025] px-4 py-6 text-center">
                        <span className="material-symbols-outlined text-[24px] text-white/20">
                          route
                        </span>

                        <p className="mt-2 text-xs font-semibold text-white/55">
                          Track information is not available yet for this branch.
                        </p>

                        <p className="mt-1 text-[10px] text-white/35">
                          Select another map point to continue exploring.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer hint */}
                <p className="font-mono text-[9px] leading-relaxed text-white/30">
                  TRACK AVAILABILITY IS DISPLAYED FROM THE CURRENT SD TRACK CATALOG.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BranchHubsSection;
