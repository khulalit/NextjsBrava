import './styles.scss';
import Image from "next/image";
import Link from "./Link";
import BrandLogo from '@/assets/brand-name.svg';
import TwitterLogo from '@/assets/navbar/twitter.svg';
import InstagramLogo from '@/assets/navbar/instagram.svg';
import TiktokLogo from '@/assets/navbar/tiktok.svg';
import UserIcon from '@/assets/navbar/user.svg';
import BagIcon from '@/assets/navbar/cart.svg';
import SearchIcon from '@/assets/navbar/search.svg';
import DropdownLink from './DropdownLink';
import BurgeMenuIcon from '@/assets/navbar/burgermenu.svg';
import { BRANDS } from '@/constants/Navbarlinks';
import { SHOP } from '@/constants/Navbarlinks';


export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-links display-none-mobile">
                <DropdownLink title='brands' options={BRANDS}/>
                <DropdownLink title='shop' options={SHOP}/>
                <Link name="premium" varient="link" />
                <Link name="gift cards" varient="link" />
            </div>
            <button className='display-none-desktop'>
                <Image src={BurgeMenuIcon} alt='burgermenu'/>
            </button>

            <div className="brand-name">
                <Image src={BrandLogo} alt="brandlogo" />
            </div>

            <div className="media">
                <span className='display-none-mobile-inline-block flex items-center'>
                    <Link name="become an affiliate" varient="link" />
                </span>

                <div className='media-links'>
                    <button className='display-none-mobile-inline-block'>
                        <Image src={TwitterLogo} alt="twitter" />
                    </button>
                    <button className='display-none-mobile-inline-block'>
                        <Image src={TiktokLogo} alt="twitter" />
                    </button>
                    <button className='display-none-mobile-inline-block'>
                        <Image src={InstagramLogo} alt="twitter" />
                    </button>
                    <button>
                        <Image src={UserIcon} alt="twitter" />
                    </button>
                    <button>
                        <Image src={SearchIcon} alt="twitter" />
                    </button>
                    <button className='cart'>
                        <span>
                            0
                        </span>
                        <Image src={BagIcon} alt="twitter" />
                    </button>
                </div>
            </div>
        </nav>
    )
}
