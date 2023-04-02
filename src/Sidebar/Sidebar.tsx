interface SidebarProps {
  page: string
  setPage: (page: string) => void
}

const Sidebar = ({ page, setPage }: SidebarProps) => {
  return (
    <aside className="">
      <div className="m-6">
        <ul className="flex md:flex-col w-24 justify-center">
          <li
            className={
              page === 'Home'
                ? 'bg-slate-100 p-1 px-2 rounded-lg m-1 text-center'
                : 'hover:bg-slate-100 p-1 px-2 rounded-lg m-1 text-center'
            }
            onClick={() => setPage('Home')}
          >
            Home
          </li>
          <li
            className={
              page === 'About'
                ? 'bg-slate-100 p-1 px-2 rounded-lg m-1 text-center'
                : 'hover:bg-slate-100 p-1 px-2 rounded-lg m-1 text-center'
            }
            onClick={() => setPage('About')}
          >
            About
          </li>
          <li
            className={
              page === 'Works'
                ? 'bg-slate-100 p-1 px-2 rounded-lg m-1 text-center'
                : 'hover:bg-slate-100 p-1 px-2 rounded-lg m-1 text-center'
            }
            onClick={() => setPage('Works')}
          >
            Works
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
