import { forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { ComponentColor } from "@/components/@types";

export type ChatBubbleMessageProps = React.HTMLAttributes<HTMLDivElement> & {
  color?: ComponentColor;
};

const ChatBubbleMessage = forwardRef<HTMLDivElement, ChatBubbleMessageProps>(
  ({ color, className, ...props }, ref) => {
    const classes = twMerge(
      "chat-bubble",
      clsx({
        [`chat-bubble-${color}`]: color,
      }),
      className
    );

    return (
      <div
        {...props}
        className={classes}
        ref={ref}
      />
    );
  }
);

export default ChatBubbleMessage;
