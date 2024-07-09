// components/Header.tsx
import Menu from '~/components/Menu'
import { Menu as MenuType } from '~/lib/sanity.queries'

type HeaderProps = {
  menu: MenuType[]
}

const Header = ({ menu }: HeaderProps) => {
  return (
    <header className="header">
      <Menu items={menu} />
    </header>
  )
}

export default Header
