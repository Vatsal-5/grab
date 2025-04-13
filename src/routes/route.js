import SidebarHeader from '@/layout/SidebarHeader'
import Details from '@/pages/Dispute/Details'
import DisputeResolution from '@/pages/Dispute/DisputeResolution'
import Notifications from '@/pages/Notifications'
import RequestersList from '@/pages/Requesters/List'
import GrabProfileList from '@/pages/Users/List'
import CodeVerification from '@/pages/auth/CodeVerification'
import ForgotPassword from '@/pages/auth/ForgotPassword'
import Login from '@/pages/auth/Login'
import ResetPassword from '@/pages/auth/ResetPassword'
import Profile from '@/pages/common/Profile'
import OutletRoute from '@/routes/OutletRoute'

import authRoute from './names/auth'
import otherRoute from './names/other'

const removeLeading = (name) => (name.startsWith('/') ? name.substring(1) : name)

const route = [
  { path: authRoute.login, element: Login },
  { path: authRoute.fogotPassword, element: ForgotPassword },
  { path: authRoute.codeVerification, element: CodeVerification },
  { path: authRoute.resetPassword, element: ResetPassword },
  {
    path: '/',
    element: SidebarHeader,
    children: [
      {
        path: `${removeLeading(otherRoute.grabProfile)}`,
        element: OutletRoute,
        children: [
          { index: true, element: GrabProfileList },
          { path: ':user-name', element: Profile }
        ]
      },
      {
        path: removeLeading(otherRoute.requesterProfile),
        element: OutletRoute,
        children: [
          { index: true, element: RequestersList },
          { path: ':requester-name', element: Profile }
        ]
      },
      {
        path: removeLeading(otherRoute.disputeResolution),
        element: OutletRoute,
        children: [
          { index: true, element: DisputeResolution },
          { path: 'details', element: Details }
        ]
      },
      {
        path: removeLeading(otherRoute.notifications),
        element: Notifications
      }
    ]
  }
]

export default route
