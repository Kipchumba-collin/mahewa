import './globals.css'

export const metadata = {
  title: 'Mahewa Writters',
  description: 'all your wrriting is done here',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
