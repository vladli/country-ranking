"use client";

import {HeroUIProvider} from "@heroui/react";
import {SWRConfig} from "swr";

type Props = {
    children: React.ReactNode;
};
 
function Providers({children}: Props) {
    return (
        <HeroUIProvider>
            <SWRConfig
                value={{
                    fetcher: (resource, init) =>
                        fetch(resource, init).then((res) => res.json()),
                }}
            >
                {children}
            </SWRConfig>
        </HeroUIProvider>
    );
}

export default Providers;
