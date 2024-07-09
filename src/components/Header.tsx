import Link from 'next/link'
import Menu from '~/components/Menu'

export default function Header({ menu }: { menu: Menu[] }) {
  return (
    <header className="header">
      <Menu menu={menu} />
    </header>
  )
}
