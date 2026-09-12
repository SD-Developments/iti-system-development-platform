const BranchHubsSection = () => {
  return (
    <>
      <section className="w-full border-b border-border bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
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

          {/* DARK NETWORK PANEL */}
          <div className="relative overflow-hidden rounded-3xl border border-sd-navy bg-linear-to-br from-sd-navy to-[#051D2A] p-5 text-white shadow-2xl sm:p-8 lg:p-12">
            <div
              className="pointer-events-none absolute inset-0 opacity-15"
              style={{
                backgroundImage: 'radial-gradient(circle, var(--sd-teal) 0.7px, transparent 0.7px)',
                backgroundSize: '24px 24px',
              }}
            />

            <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              {/* SVG */}

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

                    {/* Alexandria */}

                    <g>
                      <circle cx="120" cy="70" fill="var(--sd-teal)" fillOpacity="0.2" r="14" />

                      <circle cx="120" cy="70" fill="var(--sd-teal)" r="6" />

                      <circle
                        cx="120"
                        cy="70"
                        r="10"
                        stroke="var(--sd-teal)"
                        strokeOpacity="0.6"
                        strokeWidth="1.5"
                      />

                      <text
                        fill="#E7F2FF"
                        fontFamily="'JetBrains Mono', monospace"
                        fontSize="11"
                        fontWeight="600"
                        x="50"
                        y="55"
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
                        480 Engineers
                      </text>
                    </g>

                    {/* Delta */}

                    <g>
                      <circle cx="200" cy="85" fill="var(--sd-teal)" fillOpacity="0.2" r="12" />

                      <circle cx="200" cy="85" fill="var(--sd-teal)" r="5" />

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
                        680 Engineers
                      </text>
                    </g>

                    {/* Cairo */}

                    <g>
                      <circle cx="230" cy="120" fill="var(--sd-red)" fillOpacity="0.25" r="24" />

                      <circle cx="230" cy="120" fill="var(--sd-red)" r="10" />

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
                        1,250 Active Studio Engineers
                      </text>
                    </g>

                    {/* Ismailia */}

                    <g>
                      <circle cx="370" cy="125" fill="var(--sd-teal)" fillOpacity="0.2" r="12" />

                      <circle cx="370" cy="125" fill="var(--sd-teal)" r="5" />

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
                        Maritime Logistics Code
                      </text>
                    </g>

                    {/* Assiut */}

                    <g>
                      <circle cx="250" cy="200" fill="var(--sd-red)" fillOpacity="0.2" r="18" />

                      <circle cx="250" cy="200" fill="var(--sd-red)" r="7" />

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
                        Upper Egypt Flagship • 420 Eng
                      </text>
                    </g>

                    {/* Mid South */}

                    <g>
                      <circle cx="260" cy="275" fill="var(--sd-teal)" fillOpacity="0.2" r="10" />

                      <circle cx="260" cy="275" fill="var(--sd-teal)" r="5" />

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
                        Distributed Labs
                      </text>
                    </g>

                    {/* Aswan */}

                    <g>
                      <circle cx="280" cy="320" fill="var(--sd-teal)" fillOpacity="0.2" r="10" />

                      <circle cx="280" cy="320" fill="var(--sd-teal)" r="5" />

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
                        Southern Digital Frontier
                      </text>
                    </g>
                  </svg>
                </div>
              </div>

              {/* NETWORK DESCRIPTION */}

              <div className="flex flex-col gap-5 lg:col-span-5">
                <div className="inline-flex w-max items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono text-[10px] text-sd-teal sm:text-xs">
                  <span className="h-2 w-2 animate-ping rounded-full bg-sd-teal" />
                  ACTIVE PROTOCOL: SD-SYNC-4.8
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-white">
                  Equal Rigor. Decentralized Opportunities.
                </h3>

                <p className="text-sm leading-relaxed text-white/80">
                  Whether attending code teardowns at Smart Village or shipping algorithms from
                  Assiut, students push to the same national GitLab server, sit for identical CTO
                  juries, and collaborate in inter-governorate hackathons.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    {
                      number: '01',
                      title: 'Direct Dark-Fiber Mesh',
                      value: '10 Gbps Backbone',
                      accent: 'red',
                    },
                    {
                      number: '02',
                      title: 'Shared Enterprise CI/CD Cloud',
                      value: 'Unified Pipelines',
                      accent: 'teal',
                    },
                    {
                      number: '03',
                      title: 'National CTO Defense Juries',
                      value: 'Singular Standard',
                      accent: 'white',
                    },
                  ].map((item) => (
                    <div
                      key={item.number}
                      className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold ${
                            item.accent === 'red'
                              ? 'bg-primary/20 text-primary'
                              : item.accent === 'teal'
                                ? 'bg-sd-teal/20 text-sd-teal'
                                : 'bg-white/20 text-white'
                          }`}
                        >
                          {item.number}
                        </span>

                        <span className="text-xs font-semibold text-white">{item.title}</span>
                      </div>

                      <span
                        className={`hidden font-mono text-[10px] sm:block ${
                          item.accent === 'red'
                            ? 'text-sd-teal'
                            : item.accent === 'teal'
                              ? 'text-white/70'
                              : 'text-primary'
                        }`}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BranchHubsSection;
