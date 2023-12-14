import '../../styles/globals.css'

export const metadata = {
  title: 'Content Studio',
  description: 'To Manage Post Content',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
