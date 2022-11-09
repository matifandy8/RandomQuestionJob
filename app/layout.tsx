import styles from '../styles/Home.module.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>
      <body>
        {children}
        <footer className={styles.footer}>
          Made by Matias Fandiño
      </footer>
      </body>
    </html>
  )
}
