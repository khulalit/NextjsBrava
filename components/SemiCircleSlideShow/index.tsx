import React, { Fragment } from 'react';
import './styles.scss'
import { ImageType } from '@/constants/BrandcardImage';
import imagesData from '@/constants/BrandcardImage';
import BrandCard from './ImageBanner';

const SemiCircleSlideShow = ({ text }: { text: string }) => {
    return (
        <div className='scrollWrapper'>
            <div className='scrollingTextContainer'>
                {
                    imagesData.map((image: ImageType) => <Fragment key={image.index}>
                        <BrandCard image={image} />
                    </Fragment>)
                }
            </div>
        </div>
    );
};

export default SemiCircleSlideShow;
