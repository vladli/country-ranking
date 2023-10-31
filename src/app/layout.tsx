import Providers from "./providers";

import "./globals.css";
export const metadata = {
  title: "Country App | vladli.dev",
};

export const runtime = "edge";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
