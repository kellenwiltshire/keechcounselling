import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'
import Script from 'next/script'

const open_sans = Open_Sans({
	weight: '400',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Kaitlyn Keech Counselling Services',
	description:
		'Kaitlyn Keech Counselling Services offers warm, compassionate, and trauma-informed therapy to support your journey toward healing, self-discovery, and a more fulfilling life.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<Script
				src='https://analytics.kellenwiltshire.com/script.js'
				data-website-id='462fc0cd-4f2c-4778-9395-938de5e54d6b'
			/>
			<body
				className={clsx(
					`${open_sans} antialiased`,
					'flex min-h-screen w-full flex-col justify-center text-black',
				)}
			>
				{children}
			</body>
		</html>
	)
}
