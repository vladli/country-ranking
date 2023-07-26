import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type ChatBubbleTimeProps = React.TimeHTMLAttributes<HTMLTimeElement>;

const ChatBubbleTime = forwardRef<HTMLTimeElement, ChatBubbleTimeProps>(
  ({ className, ...props }, ref) => (
    <time
      {...props}
      className={twMerge("text-xs opacity-50", className)}
      ref={ref}
    />
  )
);

export default ChatBubbleTime;
