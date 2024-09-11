import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Pg from './pg'

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