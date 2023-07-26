import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import ChatBubbleAvatar from "./ChatBubbleAvatar";
import ChatBubbleFooter from "./ChatBubbleFooter";
import ChatBubbleHeader from "./ChatBubbleHeader";
import ChatBubbleMessage from "./ChatBubbleMessage";
import ChatBubbleTime from "./ChatBubbleTime";

export type ChatBubbleProps = React.HTMLAttributes<HTMLDivElement> & {
  end?: boolean;
};

const ChatBubble = forwardRef<HTMLDivElement, ChatBubbleProps>(
  ({ end = false, color, className, children, ...props }, ref): JSX.Element => (
    <div
      {...props}
      className={twMerge("chat", `chat-${end ? "end" : "start"}`, className)}
      ref={ref}
    >
      {children}
    </div>
  )
);

ChatBubble.displayName = "ChatBubble";

export default Object.assign(ChatBubble, {
  Header: ChatBubbleHeader,
  Time: ChatBubbleTime,
  Avatar: ChatBubbleAvatar,
  Message: ChatBubbleMessage,
  Footer: ChatBubbleFooter,
});
