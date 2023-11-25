import { AccouncementbarText } from '@/dummyText/Announcementbar';
import './styles.scss';

export default function Announcementbar() {
  return (
    <header className='announcement-bar'>
        <div>
                <a target='_blank' href={AccouncementbarText.link}>
                    {AccouncementbarText.text}
                </a>
        </div>
    </header>
  )
}
