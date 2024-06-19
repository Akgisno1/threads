import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={` bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
