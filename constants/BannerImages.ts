import Image1 from '@/assets/images-crousal/DSC00198_CAROUSEL_1_1440x650_crop_center 1.png';
import Image2 from '@/assets/images-crousal/DSC09179_CAROUSEL_1_1440x650_crop_center 1.png';
import Image3 from '@/assets/images-crousal/DSC09618_CAROUSEL_1_1440x650_crop_center 1.png';
import Image4 from '@/assets/images-crousal/DSC09802_carousel_1440x650_crop_center 1.png';
import Image5 from '@/assets/images-crousal/DSC0b8_CAROUSEL_1_1440x650_crop_center 1.png';
import { StaticImageData } from 'next/image';

export type ImageType = {
    index: number;
    path: StaticImageData;
    directionOfText: 'left' | 'right';
    buttonStyle: 'outline' | 'normal';
    text: string,
};

const imagesData: ImageType[] = [
  {
    index: 1,
    path: Image1,
    directionOfText: 'left',
    buttonStyle: 'outline',
    text: 'premium zip hoddies'
  },
  {
    index: 2,
    path: Image2,
    directionOfText: 'right',
    buttonStyle: 'normal',
    text: 'premium zip hoddies'
  },
  {
    index: 3,
    path: Image3,
    directionOfText: 'left',
    buttonStyle: 'outline',
    text: 'premium zip hoddies'
  },
  {
    index: 4,
    path: Image4,
    directionOfText: 'right',
    buttonStyle: 'normal',
    text: 'premium zip hoddies'
  },
  {
    index: 5,
    path: Image5,
    directionOfText: 'left',
    buttonStyle: 'outline',
    text: 'premium zip hoddies'
  },
];

export default imagesData;
