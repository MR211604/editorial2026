import Navbar from '../ui/Navbar'
import Footer from '../ui/Footer'

export default function DefaultLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="content-container p-4 mt-16">
        {children}
      </main>
      <Footer />
    </div>
  )
}
