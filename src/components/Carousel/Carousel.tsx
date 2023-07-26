import {
  cloneElement,
  createRef,
  forwardRef,
  ReactElement,
  RefObject,
  useEffect,
  useState,
} from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import Button from "../Button";

import CarouselItem, {
  CarouselItemProps,
  CarouselItemWidth,
} from "./CarouselItem";

export type CarouselProps = React.HTMLAttributes<HTMLDivElement> & {
  children: ReactElement<CarouselItemProps>[];
  display?: "slider" | "numbered" | "sequential";
  snap?: "start" | "center" | "end";
  vertical?: boolean;
  width?: CarouselItemWidth;
  buttonStyle?: (value: string) => React.ReactElement;
};

const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      children,
      display = "slider",
      snap,
      vertical,
      width,
      buttonStyle,
      className,
      ...props
    },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      "carousel",
      className,
      clsx({
        [`carousel-${snap}`]: snap,
        "carousel-vertical": vertical,
        "w-full": display !== "slider",
      })
    );

    const [itemRefs, setItemRefs] = useState<RefObject<HTMLDivElement>[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
      const newRefs: RefObject<HTMLDivElement>[] = [];
      children.map((_) => {
        newRefs.push(createRef<HTMLDivElement>());
      });
      setItemRefs(newRefs);
    }, [children]);

    const scrollToIndex = (index: number) => {
      itemRefs[index].current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: snap,
      });
      setActiveIndex(index);
    };

    return (
      <>
        <div
          aria-label="Image carousel"
          role="listbox"
          {...props}
          className={classes}
          ref={ref}
        >
          {children.map((child, i) => {
            return cloneElement(child, {
              key: i,
              innerRef: itemRefs[i],
              index: i + 1,
              children: child.props.children,
              src: child.props.src,
              alt: child.props.alt,
              width: display !== "slider" ? "full" : width,
              hasButtons: display === "sequential",
              buttonStyle,
              onPrev: () =>
                scrollToIndex(i - 1 < 0 ? children.length - 1 : i - 1),
              onNext: () =>
                scrollToIndex(i + 1 > children.length - 1 ? 0 : i + 1),
              ...child.props,
            });
          })}
        </div>
        {display === "numbered" && (
          <div className="flex w-full justify-center gap-2 py-2">
            {children.map((_, i) => {
              if (buttonStyle != null) {
                return cloneElement(buttonStyle((i + 1).toString()), {
                  key: i,
                  onClick: () => scrollToIndex(i),
                });
              }

              return (
                <Button
                  active={i === activeIndex}
                  key={i}
                  onClick={() => scrollToIndex(i)}
                >
                  {i + 1}
                </Button>
              );
            })}
          </div>
        )}
      </>
    );
  }
);

export default Object.assign(Carousel, { Item: CarouselItem });
