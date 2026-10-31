import { Inbox } from 'lucide-react';
import { cn } from '@/lib/utils';

// Shown wherever a list has no data yet, so the section never looks broken.
function EmptyState({
  icon: Icon = Inbox,
  title = 'No data available',
  message = 'This content will appear here once it is available.',
  action,
  tone = 'light',
  className,
}) {
  const dark = tone === 'dark';

  return (
    <div
      role="status"
      className={cn(
        'flex min-h-48 flex-col items-center justify-center gap-3 rounded-3xl border border-dashed px-6 py-10 text-center',
        dark ? 'border-white/20 bg-white/5 text-white' : 'border-border bg-card text-foreground',
        className
      )}
    >
      <span
        className={cn(
          'flex size-11 items-center justify-center rounded-full',
          dark ? 'bg-white/10 text-sd-teal' : 'bg-muted text-muted-foreground'
        )}
      >
        <Icon aria-hidden="true" className="size-5" />
      </span>
      <h3 className="text-base font-bold">{title}</h3>
      <p className={cn('max-w-sm text-sm', dark ? 'text-white/60' : 'text-muted-foreground')}>
        {message}
      </p>
      {action}
    </div>
  );
}

export default EmptyState;
