import TechnicalGrid from './TechnicalGrid';

const TechnicalProjectVisual = ({ project }) => {
  if (project.visual === 'raft') {
    return (
      <div className="relative h-56 overflow-hidden border-b border-border bg-slate-950">
        <TechnicalGrid dark />

        <div className="absolute inset-0 flex flex-col justify-between p-5">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded border border-accent/30 bg-accent/20 px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-wider text-accent">
              {project.type}
            </span>

            <span className="rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-1 font-mono text-xs font-bold text-white">
              45,000 TX/SEC • 0.82ms RAFT
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              ['LEADER (ALEX)', 'ACK 0.24ms'],
              ['FOLLOWER #1 (CAIRO)', 'REPLICATED'],
              ['FOLLOWER #2 (MANSOURA)', 'REPLICATED'],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-lg border border-slate-800 bg-slate-900/90 p-2.5 text-center font-mono"
              >
                <span className="block text-[10px] text-slate-400">{label}</span>

                <span
                  className={`text-xs font-bold ${
                    value.includes('ACK') ? 'text-emerald-400' : 'text-white'
                  }`}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between font-mono text-[11px] text-slate-400">
            <span>RAFT WRITE-AHEAD LOG (WAL) ACTIVE</span>

            <span className="text-emerald-400">0 LOST TRANSACTIONS @ 50K STRESS</span>
          </div>
        </div>
      </div>
    );
  }

  if (project.visual === 'automotive') {
    return (
      <div className="relative h-48 border-b border-border bg-slate-950 p-4">
        <div className="flex items-center justify-between">
          <span className="rounded border border-slate-700 bg-slate-800 px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wider text-slate-200">
            {project.type}
          </span>

          <span className="rounded border border-emerald-500/30 bg-emerald-950/60 px-2 py-0.5 font-mono text-[10px] text-emerald-400">
            &lt;4μs JITTER
          </span>
        </div>

        <div className="absolute inset-x-4 top-20 rounded border border-slate-800 bg-black/60 p-2 font-mono">
          <div className="text-[10px] text-slate-400">BUS: CAN-FD @ 5 Mbps</div>

          <div className="font-bold text-[10px] text-emerald-400">Deterministic Preemption: OK</div>

          <div className="mt-1 text-right text-[9px] text-slate-500">ARM Cortex-M7</div>
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[10px] text-slate-400">
          <span>STM32H7 Core</span>
          <span>Smart Village Lab</span>
        </div>
      </div>
    );
  }

  if (project.visual === 'legal') {
    return (
      <div className="relative h-48 border-b border-border bg-slate-950 p-4">
        <div className="flex items-center justify-between">
          <span className="rounded border border-primary/30 bg-primary/20 px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wider text-primary">
            {project.type}
          </span>

          <span className="rounded bg-slate-800 px-2 py-0.5 font-mono text-[10px] text-white">
            96.8% PRECISION
          </span>
        </div>

        <div className="absolute left-4 right-4 top-20 rounded border border-slate-800 bg-black/60 p-2.5 font-mono">
          <div className="text-[10px] text-accent">[EMBED-RERANK]</div>

          <div className="truncate text-xs text-slate-300">14,000 Supreme Court Precedents</div>

          <div className="text-[10px] text-emerald-400">Cross-Encoder Arabic Guard Active</div>
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[10px] text-slate-400">
          <span>Assiut Hub</span>
          <span>Qdrant + Llama 3</span>
        </div>
      </div>
    );
  }

  if (project.visual === 'security') {
    return (
      <div className="relative h-48 border-b border-border bg-slate-950 p-4">
        <div className="flex items-center justify-between">
          <span className="rounded border border-slate-700 bg-slate-800 px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wider text-primary">
            {project.type}
          </span>

          <span className="rounded bg-slate-800 px-2 py-0.5 font-mono text-[10px] text-white">
            10 GBPS WIRE-RATE
          </span>
        </div>

        <div className="absolute left-4 right-4 top-20 rounded border border-slate-800 bg-black/60 p-2.5 font-mono">
          <div className="text-[10px] text-accent">[KERNEL-PROBE: XDP]</div>

          <div className="text-xs text-slate-300">Sub-microsecond packet classification</div>

          <div className="text-[10px] text-emerald-400">Zero syscall overhead active</div>
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[10px] text-slate-400">
          <span>New Capital Campus</span>
          <span>Linux Kernel 6.8</span>
        </div>
      </div>
    );
  }

  return null;
};
export default TechnicalProjectVisual;
