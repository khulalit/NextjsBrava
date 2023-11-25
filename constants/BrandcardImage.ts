import Image1 from '@/assets/slideshow/Bitfins_logo_1f1299f3-eb5c-43bc-a76b-7b08dc7b454f_375x_crop_center 1.png';
import Image2 from '@/assets/slideshow/Future_Fest_Profile_Picture_2_375x_crop_center 1.png';
import Image3 from '@/assets/slideshow/Logo_375x_crop_center 1.png';
import Image4 from '@/assets/slideshow/cryptoraggies-logo-profilepic-trans-2000px_375x_crop_center 1.png';
import Image5 from '@/assets/slideshow/pendulum-brava-logo_375x_crop_center 1.png';
import { StaticImageData } from 'next/image';

export type ImageType = {
    index: number;
    path: StaticImageData;
    name: string,
    link: string, 
};

const imagesData: ImageType[] = [
  {
    index: 1,
    path: Image1,
    name: 'bitfits',
    link: '',

  },
  {
    index: 2,
    path: Image2,
    name: 'cryptoraggies',
    link: 'normal',
  },
  {
    index: 3,
    path: Image3,
    name: 'future fest',
    link: 'outline',
  },
  {
    index: 4,
    path: Image4,
    name: 'danketsu',
    link: 'normal',
  },
  {
    index: 5,
    path: Image5,
    name: '$hoskey',
    link: 'outline',
  },
];

export default imagesData;
