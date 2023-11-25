import './styles.scss';
import Link from '../Link';

interface DropdownPropsType {
  options: any,
  title: string,
}

export default function DropdownLink({ title, options }: DropdownPropsType) {
  return (
    <div className='drop-down'>
      <Link name={title} varient='dropdown' />
      <ul className='drop-down-links'>

        {options.length !== 2 && options.map((option: any) => <li key={option.name}>
          <Link name={option.name} varient='link' />
        </li>)}
        
        <div className='flex gap-8'>
          <div>
            <h3>
              {options.length === 2 && <span className='font-[800]'>{options[0].title}</span>}
            </h3>
            {options.length === 2 && options[0].list.map((option: any) => <li key={option.name}>
              <Link name={option.name} varient='link' />
            </li>)}
          </div>
          <div>
            <h3>
              {options.length === 2 && <span className='font-[800]'>{options[1].title}</span>}
            </h3>
            {options.length === 2 && options[1].list.map((option: any) => <li key={option.name}>
              <Link name={option.name} varient='link' />
            </li>)}
          </div>
        </div>
        {/* <li><Link name='all brands' varient='link'/></li>
          <li><Link name='all brands' varient='link'/></li>
          <li><Link name='all brands' varient='link'/></li>
          <li><Link name='all brands' varient='link'/></li> */}
      </ul>
    </div>
  )
}
