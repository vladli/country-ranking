import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type ChatBubbleHeaderProps = React.HTMLAttributes<HTMLDivElement>;

const ChatBubbleHeader = forwardRef<HTMLDivElement, ChatBubbleHeaderProps>(
  ({ className, ...props }, ref) => (
    <div {...props} className={twMerge("chat-header", className)} ref={ref} />
  )
);

export default ChatBubbleHeader;
