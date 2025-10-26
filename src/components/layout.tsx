import type { ReactNode } from 'react'
import Navbar from './home/navbar'
import Footer from './home/footer'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen w-full m-0 p-0 flex flex-col">
      <Navbar />

      <div className='flex flex-1'>
        {children}
      </div>

      <Footer />
    </div>
  )
}

export default Layout
