import { ButtonLink } from '@/components/ui/button';
import Seo from '@/components/Seo';
import { PAGE_SEO } from '@/lib/seo';

function NotFound() {
  return (
    <>
      <Seo {...PAGE_SEO.notFound} />
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-background px-6 py-20 text-center">
        <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary">
          404 — Page not found
        </span>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          This route doesn&apos;t exist.
        </h1>
        <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
          The page you are looking for was moved, renamed, or never existed. Head back home or
          explore the academic tracks.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/" variant="default" size="xl">
            Back to Home
          </ButtonLink>
          <ButtonLink to="/tracks" variant="outline" size="xl">
            Explore Tracks
          </ButtonLink>
        </div>
      </main>
    </>
  );
}

export default NotFound;
