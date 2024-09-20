import { MakeswiftProvider } from '@/makeswift/provider'
import { DraftModeScript } from '@makeswift/runtime/next/server'

type Params = { lang: string; path?: string[] }

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Params
}>) {
  console.log('RootLayout', { params })
  return (
    <html lang={params.lang}>
      <head>
      <DraftModeScript appOrigin={process.env.MAKESWIFT_APP_ORIGIN} />
      </head>
      <body>
        <MakeswiftProvider>{children}</MakeswiftProvider>
      </body>
    </html>
  )
}
