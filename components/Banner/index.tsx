'use client';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./styles.scss";
import Image from 'next/image';
import { ImageType } from '@/constants/BannerImages';
import { Carousel } from 'react-responsive-carousel';


export default function Banner({ images }: { images: ImageType[] }) {

    function getTextPosition(direction:string){
        if(direction === 'left'){
            return {
                left: '5%'
            }
        }
        return {
            left: '70%'
        }
    }
   
    return (
        <Carousel autoPlay emulateTouch showStatus={false} showIndicators={false} swipeable={false}>
            {
                images.map((image:any)=>{
                    return <div key={image.index} className="carousel h-[600px]">
                        <div className="text" style={getTextPosition(image.directionOfText)}>
                            <span>
                                {image.text}
                            </span>
                            <br />
                            <button className="btn-outline fill">
                                shop now
                            </button>
                        </div>
                        <Image src={image.path} alt={"image"+image.index} className="h-full object-cover"/>
                    </div>
                })
            
            }
        </Carousel>
    );
};

