import Header from '@/components/common/header'
import Sidebar from '@/components/common/sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { LIMIT, PAGE } from '@/constant/common/query'
import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router'

const SidebarHeader = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (pathname === '/') {
      navigate({
        pathname: '/grab-profile',
        search: new URLSearchParams({ page: PAGE, limit: LIMIT }).toString()
      })
    }
  }, [pathname])

  return (
    <SidebarProvider
      style={{
        '--sidebar-width': '18.125rem',
        '--sidebar-width-mobile': '18.125rem'
      }}
    >
      <div className="w-full h-dvh flex overflow-hidden">
        <Sidebar />
        <div className="h-full w-full flex flex-col overflow-hidden">
          <Header />
          <div className="w-full h-full px-3 sm:px-4 md:px-5 lg:px-[30px] py-4 md:py-6 bg-background overflow-hidden">
            <Outlet />
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default SidebarHeader
