import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Ardan Dashinimaev',
	description: 'Ardan Dashinimaev aka Eksiart porfolio and resume website',
	icons: {
		icon: '/favicon.ico',
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
		<head>
			<link rel="icon" href="/images/favicon.ico"/>
			<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
			<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
		</head>
		<body className={inter.className}>{children}</body>
		</html>
	)
}
