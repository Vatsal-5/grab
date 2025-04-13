import { Logout as LogoutModalIcon } from '@/assets/icons/Modal'
import { DisputeResolution, GrabProfile, Logout, Notification, RequesterProfile } from '@/assets/icons/Sidebar'
import Img from '@/components/ui/Img'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar'
import { LIMIT, PAGE } from '@/constant/common/query'
import { DISPUTE_TABS } from '@/constant/common/tabs'
import { SIDEBAR_INDICATOR, SIDEBAR_LOGO } from '@/constant/image'
import { cn } from '@/lib/utils'
import Alert from '@/modal/common/Alert'
import authRoute from '@/routes/names/auth'
import { useCallback, useMemo } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { useBoolean } from 'usehooks-ts'

const items = [
  {
    title: 'Grab Profile',
    icon: GrabProfile,
    path: '/grab-profile',
    search: { page: PAGE, limit: LIMIT }
  },
  {
    title: 'Requester Profile',
    icon: RequesterProfile,
    path: '/requester-profile',
    search: { page: PAGE, limit: LIMIT }
  },
  {
    title: 'Dispute Resolution',
    icon: DisputeResolution,
    path: '/dispute-resolution',
    search: { page: PAGE, limit: LIMIT, tab: DISPUTE_TABS[0] }
  },
  {
    title: 'Notifications',
    icon: Notification,
    path: '/notifications'
  }
]

const AppSidebar = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const logoutModal = useBoolean(false)

  const activeIndex = useMemo(() => items.findIndex((item) => pathname.includes(item.path)), [pathname])

  const getTopPosition = useCallback(() => {
    const ITEM_GAP = 16
    const ITEM_HEIGHT = 62

    const addition = activeIndex ? ITEM_GAP + ITEM_HEIGHT : 0

    return 18 + addition * activeIndex
  }, [pathname])

  return (
    <>
      <Sidebar className="px-0 border-border-2 [&>*:first-child]:gap-y-8 font-gilroy">
        <SidebarHeader className="mx-[10px] p-[10px] border-b border-border-1">
          <Img className="w-full max-w-36 mx-auto" src={SIDEBAR_LOGO} alt="logo" />
        </SidebarHeader>
        <SidebarContent className="py-1">
          <SidebarGroupContent>
            <SidebarMenu className="relative gap-y-4">
              <Img
                style={{ top: `${getTopPosition()}px` }}
                className="w-[3px] h-6 absolute left-0 transition-all"
                src={SIDEBAR_INDICATOR}
                alt="indicator"
              />

              {items.map((item, index) => {
                return (
                  <SidebarMenuItem key={item.title} className="mx-[20px]">
                    <SidebarMenuButton asChild>
                      <Link
                        to={{
                          pathname: item.path,
                          search: new URLSearchParams(item.search).toString()
                        }}
                        className={cn(
                          'h-auto p-[18px] gap-[10px] rounded-[18px] transition-colors',
                          index === activeIndex ? 'text-text-1 bg-sidebar-link-background' : 'text-text-2 bg-transparent'
                        )}
                      >
                        {item.icon ? <item.icon className={cn(index === activeIndex ? 'stroke-text-1' : 'stroke-text-2')} /> : null}
                        <span className="scroll-m-20 text-[17px] font-semibold text-current">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarContent>
        <SidebarFooter className="px-0 mx-5">
          <SidebarMenuButton className="h-auto p-[18px] gap-[10px] text-text-2 rounded-[18px]" onClick={logoutModal.setTrue}>
            <Logout className="stroke-text-2" />
            <span className="scroll-m-20 text-[17px] font-semibold text-current">Logout</span>
          </SidebarMenuButton>
        </SidebarFooter>
      </Sidebar>

      <Alert
        modalState={logoutModal}
        Icon={LogoutModalIcon}
        title="Logout?"
        msg="Are you sure you want to logout?"
        onConfirm={() => navigate(authRoute.login)}
      />
    </>
  )
}

export default AppSidebar
