// components/Menu.tsx
import Link from 'next/link'
import { Menu as MenuType } from '~/lib/sanity.queries'

type MenuProps = {
  items: MenuType[]
}

const Menu = ({ items }: MenuProps) => {
  return (
    <nav>
      <ul className="menu">
        {items?.map((item) => (
          <li key={item._id} className="menu-item">
            <Link href={item.url} legacyBehavior>
              <a target={item.newTab === '1' ? '_blank' : '_self'}>{item.title}</a>
            </Link>
            {item.children && item.children.length > 0 && (
              <ul className="dropdown">
                {item.children.map((child) => (
                  <li key={child._id} className="dropdown-item">
                    <Link href={child.url} legacyBehavior>
                      <a target={child.newTab === '1' ? '_blank' : '_self'}>{child.title}</a>
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

export default Menu
