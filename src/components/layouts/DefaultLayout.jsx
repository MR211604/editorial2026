import Navbar from '../ui/Navbar'
import Footer from '../ui/Footer'

export default function DefaultLayout({ children }) {
  return (
    <div className="overflow-hidden flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}
