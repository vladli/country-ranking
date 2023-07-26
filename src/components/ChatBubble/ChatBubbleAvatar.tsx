import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import Avatar, { AvatarProps } from "@/components/Avatar/Avatar";

export type ChatBubbleAvatarProps = AvatarProps;

const ChatBubbleAvatar = forwardRef<HTMLDivElement, ChatBubbleAvatarProps>(
  ({ size = "xs", shape = "circle", className, ...props }, ref) => (
    <Avatar
      shape={shape}
      size={size}
      {...props}
      className={twMerge("chat-image", className)}
      ref={ref}
    />
  )
);

export default ChatBubbleAvatar;
