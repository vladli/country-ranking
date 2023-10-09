"use client";

import { NextUIProvider } from "@nextui-org/react";
import { SWRConfig } from "swr";

type Props = {
  children: React.ReactNode;
};

function Providers({ children }: Props) {
  return (
    <NextUIProvider>
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        {children}
      </SWRConfig>
    </NextUIProvider>
  );
}

export default Providers;
