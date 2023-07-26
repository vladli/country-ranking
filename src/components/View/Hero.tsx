import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type HeroProps = React.HTMLAttributes<HTMLDivElement>;

const Hero = forwardRef<HTMLDivElement, HeroProps>(
  ({ className, children, ...props }, ref): JSX.Element => {
    const classes = twMerge("hero", className);

    return (
      <div role="banner" {...props} className={classes} ref={ref}>
        {children}
      </div>
    );
  }
);

export type HeroContentProps = React.HTMLAttributes<HTMLDivElement>;

const HeroContent = forwardRef<HTMLDivElement, HeroContentProps>(
  ({ className, children, ...props }, ref): JSX.Element => {
    const classes = twMerge("hero-content", className);

    return (
      <div {...props} className={classes} ref={ref}>
        {children}
      </div>
    );
  }
);

export type HeroOverlayProps = React.HTMLAttributes<HTMLDivElement>;

const HeroOverlay = forwardRef<HTMLDivElement, HeroOverlayProps>(
  ({ className, children, ...props }, ref): JSX.Element => {
    const classes = twMerge("hero-overlay", className);

    return (
      <div {...props} className={classes} ref={ref}>
        {children}
      </div>
    );
  }
);

export default Object.assign(Hero, {
  Content: HeroContent,
  Overlay: HeroOverlay,
});
