import { Footer } from '../Components/Footer'
import { Header } from '../Components/Header'

export function PublicLayout ({ children }) {
  return (
    <div>
      <Header />
      <main className='public-layout-main'>
        {children}
      </main>
      <Footer />
    </div>
  )
}
