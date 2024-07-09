import Link from 'next/link'
import { Menu } from './sanity.queries'

export default function Menu({ menu }: { menu: Menu[] }) {
  return (
	<nav>
	    <ul className="menu">
	      {menu?.map((item) => (
	        <li key={item._id} className="menu-item">
	          <Link href={item.url} target={item.newTab === '1' ? '_blank' : '_self'}>
	            {item.title}
	          </Link>
	          {item.children && item.children.length > 0 && (
	            <ul className="dropdown">
	              {item.children.map((child) => (
	                <li key={child.url} className="dropdown-item">
	                  <Link href={child.url} target={child.newTab === '1' ? '_blank' : '_self'}>
	                    {child.title}
	                  </Link>
	                </li>
	              ))}
	            </ul>
	          )}
	        </li>
	      ))}
	    </ul>
	</nav>
  )
}
