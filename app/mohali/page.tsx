import NavBar from '@/components/NavBar'
import Pg from './pg'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div className='min-h-screen'>
        <NavBar />
        <div className='py-6 md:py-12 lg:py-16'>
            <Pg />
        </div>
        <Footer />
    </div>
  )
}

export default page