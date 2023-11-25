import './styles.scss';
import Image from 'next/image';
import { ImageType } from '@/constants/BrandcardImage';
import Link from 'next/link';

export default function BrandCard({image}: {image: ImageType}) {
  return (
    <div className={`brand-card bg-color-${image.index} inline-block`}>
        <div>
            <Image src={image.path} alt={image.index + ""} width={150} height={150} className='brand-image'/>
        </div>
        <div className='brand-info'>
            <h3>
                {image.name}
            </h3>
            <Link  href="/" className='underline text-white font-[700]'>
                shop now
            </Link>
        </div>
    </div>
  )
}
