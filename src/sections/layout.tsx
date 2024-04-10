import { RootLayout } from "../components/rootlayout"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
        <body className="flex min-h-full flex-col">
          <RootLayout>{children}</RootLayout>
        </body>
      </html>
    )
  }