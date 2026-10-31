import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// The one "Show more / Show less" toggle used by every expandable list.
function ShowMoreButton({
  expanded,
  onToggle,
  moreLabel = 'Show More',
  lessLabel = 'Show Less',
  className,
}) {
  return (
    <div className={cn('mt-10 flex justify-center', className)}>
      <Button variant="outline" size="lg" aria-expanded={expanded} onClick={onToggle}>
        {expanded ? lessLabel : moreLabel}
        <ChevronDown
          aria-hidden="true"
          className={cn('transition-transform duration-300', expanded && 'rotate-180')}
        />
      </Button>
    </div>
  );
}

export default ShowMoreButton;
