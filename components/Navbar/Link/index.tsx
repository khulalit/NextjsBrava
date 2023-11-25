import Image from 'next/image';
import './styles.scss';
import DropdownIcon from '@/assets/navlink/down.svg';

interface LinkPropsType {
    name: string,
    varient: 'dropdown' | 'link'
}

export default function Link({ name, varient }: LinkPropsType) {
    return (
        <div className='link'>
            <a>
                {name} 
                { varient === 'dropdown' && 
                    <Image src={DropdownIcon} alt='icon' className='icon' width={10} height={10}/>
                }
            </a>
        </div>
    )
}
