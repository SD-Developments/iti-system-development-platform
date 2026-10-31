import { ArrowRight } from 'lucide-react';
import { ButtonLink } from '@/components/ui/button';

function SectionHeader({ eyebrow, title, description, action, href, variant = 'hero' }) {
  const showAction = Boolean(action && href);
  if (variant === 'compact') {
    return (
      <div className="mb-6 flex flex-col gap-3 border-b border-border pb-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <div className="min-w-0">
          <div className="mb-1.5 flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-sd-red">
            <span>// {eyebrow}</span>
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-[28px]">
            {title}
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>
        {showAction && (
          <ButtonLink to={href} variant="link" className="shrink-0 font-bold">
            {action}
            <ArrowRight className="size-4" />
          </ButtonLink>
        )}{' '}
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div className="head max-w-2xl">
        <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </span>

        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h2>

        <p className="mt-4 max-w-xl leading-7 text-muted-foreground">{description}</p>
      </div>
      {showAction ? (
        <ButtonLink to={href} variant="link" className="font-bold">
          {action}
        </ButtonLink>
      ) : null}{' '}
    </div>
  );
}

export default SectionHeader;
