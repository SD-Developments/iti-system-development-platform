import ComboboxBasic from '@/components/ComboboxBasic';
import SectionHeader from '@/components/SectionHeader';
import TrackCard from '@/components/TrackCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { branches, tracks } from '@/constants';
import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';

function Tracks() {
  const [searchQuery, setSearchQuery] = useState('');
  const [program, setProgram] = useState('');
  const [available, setAvailable] = useState('');

  const filteredTracks = useMemo(() => {
    return tracks.filter((track) => {
      const matchesSearch =
        !searchQuery ||
        track.shortTitle.toLowerCase().includes(searchQuery) ||
        track.title.toLowerCase().includes(searchQuery);
      const matchesProgram = !program || track.program === program;
      const matchesAvailable = !available || track.branches.includes(available);
      return matchesSearch && matchesProgram && matchesAvailable;
    });
  }, [searchQuery, program, available]);

  const handleClearFilter = () => {
    setAvailable('');
    setProgram('');
    setSearchQuery('');
  };
  return (
    <>
      <section id="track-explorer" className="py-16 lg:py-24 bg-sd-bg-light border-b border-border">
        <div className="mx-auto w-[90%] max-w-7xl">
          <SectionHeader
            eyebrow="Track Explorer"
            title="Explore Technical Tracks"
            description="The current Smart Village portfolio contains three core tracks, each combining strong software engineering foundations with modern AI integration."
          />

          {/* Static explorer UI */}
          <div className="mt-10 rounded-3xl border border-border bg-card p-5 shadow-sm lg:p-6">
            <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr_1fr_0.5fr]">
              <div className="relative flex items-center gap-3 rounded-xl border border-border bg-background">
                <Search
                  size={18}
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  type="text"
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                  }}
                  value={searchQuery}
                  placeholder="Search tracks or technologies..."
                  className="h-12 pl-10 w-full border-0 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground focus:ring-0"
                />
              </div>

              <div className="flex h-12 items-center justify-between rounded-xl bg-background">
                <ComboboxBasic
                  setData={setProgram}
                  data={program}
                  items={['PTP', 'ITP']}
                  placeholder={'Program'}
                />
              </div>

              <div className="flex h-12 items-center justify-between rounded-xl bg-background">
                <ComboboxBasic
                  setData={setAvailable}
                  data={available}
                  items={branches}
                  placeholder={'Available At'}
                />
              </div>

              <Button onClick={handleClearFilter} className="flex h-12 rounded-xl">
                Clear
              </Button>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <span className="text-sm font-semibold text-foreground">Smart Village Tracks</span>

            <span className="font-mono text-xs text-muted-foreground">3 tracks</span>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            {filteredTracks.map((track) => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Tracks;
