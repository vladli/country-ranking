import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type ChatBubbleFooterProps = React.HTMLAttributes<HTMLDivElement>;

const ChatBubbleFooter = forwardRef<HTMLDivElement, ChatBubbleFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      {...props}
      className={twMerge("chat-footer opacity-50", className)}
      ref={ref}
    />
  )
);

export default ChatBubbleFooter;
