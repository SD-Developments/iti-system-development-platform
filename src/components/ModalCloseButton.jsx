import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Round close button for modals and overlays.
function ModalCloseButton({ onClick, label = 'Close', className }) {
  return (
    <Button
      type="button"
      variant="navy"
      size="icon-lg"
      aria-label={label}
      onClick={onClick}
      className={cn(
        'absolute end-4 top-4 z-20 rounded-full border-white/20 bg-sd-navy/80 backdrop-blur-md hover:bg-primary',
        className
      )}
    >
      <X aria-hidden="true" className="size-5" />
    </Button>
  );
}

export default ModalCloseButton;
