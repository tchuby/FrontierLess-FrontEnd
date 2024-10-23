import './globals.css'
import Nav from '@/components/Nav'
import ProjectProvider from "@/contexts/ProjectContext";



export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ProjectProvider>
          <Nav />
          {children}
        </ProjectProvider>
      </body>
    </html>
  )
}
