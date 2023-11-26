
import Header from './component/Header'
import Navbar from './component/Navbar'
import Slider from './component/Slider'
import SlidersItem from './component/SliderItems'


export default function Home() {
  return (
   <>
<Header/>
<Navbar/>
<div>
    <Slider/>
</div>
<div className='my-3'>
  <SlidersItem />
</div>
   </>
  )
}
