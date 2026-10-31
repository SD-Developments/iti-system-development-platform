import { Button as ButtonPrimitive } from '@base-ui/react/button';
import { cva } from 'class-variance-authority';
import { Link } from 'react-router';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-xl border border-transparent bg-clip-padding text-sm font-medium outline-none select-none transition-all hover:-translate-y-0.5 active:not-aria-[haspopup]:translate-y-px focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md',

        outline:
          'border-border bg-background text-foreground hover:bg-muted hover:text-foreground aria-expanded:bg-muted dark:border-input dark:bg-input/30 dark:hover:bg-input/50',

        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary/80',

        accent: 'bg-accent text-accent-foreground shadow-sm hover:bg-accent/90 hover:shadow-md',

        navy: 'bg-sd-navy text-sd-white shadow-sm hover:bg-sd-navy/90 hover:shadow-md',

        light: 'bg-background text-foreground shadow-sm hover:bg-background/90 hover:shadow-md',

        glass:
          'border-white/25 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:shadow-md',

        ghost:
          'text-foreground hover:bg-muted hover:text-foreground aria-expanded:bg-muted dark:hover:bg-muted/50',

        destructive:
          'bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40',

        link: 'h-auto rounded-none border-0 bg-transparent p-0 text-primary shadow-none underline-offset-4 hover:translate-y-0 hover:underline',

        'link-accent':
          'h-auto rounded-none border-0 bg-transparent p-0 text-accent shadow-none underline-offset-4 hover:translate-y-0 hover:underline',
      },

      size: {
        default: 'h-9 gap-2 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3',

        xs: "h-7 gap-1.5 rounded-lg px-2.5 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",

        sm: "h-8 gap-1.5 rounded-lg px-3 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 [&_svg:not([class*='size-'])]:size-3.5",

        lg: 'h-11 gap-2 px-5 text-sm has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4',

        xl: 'h-12 gap-2.5 px-6 text-sm font-semibold',

        icon: 'size-9',

        'icon-xs':
          "size-7 rounded-lg in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",

        'icon-sm': 'size-8 rounded-lg in-data-[slot=button-group]:rounded-lg',

        'icon-lg': 'size-11',

        'icon-xl': 'size-12',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({ className, variant = 'default', size = 'default', ...props }) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

// A link that looks like a button. Use `to` for internal routes and `href` for external URLs.
function ButtonLink({ to, href, external = false, ...props }) {
  // In-page #hash links go through the router so smooth scrolling keeps working.
  const target = to ?? (href?.startsWith('#') ? href : null);
  const element = target ? (
    <Link to={target} />
  ) : (
    <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} />
  );

  return <Button render={element} nativeButton={false} {...props} />;
}

export { Button, ButtonLink };
