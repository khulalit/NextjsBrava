import Announcementbar from '@/components/Announcementbar';
import Banner from '@/components/Banner';
import Navbar from '@/components/Navbar';
import DropdownLink from '@/components/Navbar/DropdownLink';
import SemiCircleSlideShow from '@/components/SemiCircleSlideShow';
import imagesData from '@/constants/BannerImages';

export default function Home() {
  return (
    <main className="bgblack">
      <Announcementbar/>
      <div className='sticky top-[-5px] z-50'>
        <Navbar/>
      </div>
      <Banner images={imagesData}/>
      <SemiCircleSlideShow text='hello'/>
    </main>
  )
}
