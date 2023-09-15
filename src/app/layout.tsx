import Providers from "./providers";

import "./globals.css";
export const metadata = {
  title: "Country App | vladli.dev",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="mytheme">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
