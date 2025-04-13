import { EyeOn } from '@/assets/icons/Auth'
import { LampOff, LampOn } from '@/assets/icons/Common'
import Img from '@/components/ui/Img'
import { breakpoints } from '@/lib/breakpoints'
import { createColumnHelper } from '@tanstack/react-table'
import moment from 'moment'
import { useMemo } from 'react'
import { Link } from 'react-router'
import { useWindowSize } from 'usehooks-ts'

const useColumnDef = (helpers) => {
  const columnHelper = createColumnHelper()

  const { width = 0 } = useWindowSize()

  const getColumnSize = (sizes) => {
    if (typeof sizes === 'number') {
      return sizes
    } else if (typeof sizes === 'object') {
      const breakpointKeys = Object.keys(breakpoints).reverse()
      for (const key of breakpointKeys) {
        if (width >= breakpoints[key] && sizes[key] !== undefined) {
          return sizes[key]
        }
      }
      return sizes.default !== undefined ? sizes.default : null
    } else {
      return null
    }
  }

  const userProfileColumns = useMemo(
    () => [
      columnHelper.accessor('user_name', {
        header: 'Grab Profile',
        cell: (props) => (
          <div className="flex items-center gap-x-4">
            <Img src={props.row.original?.user_img} className="size-11 rounded-full" />
            <p className="max-w-[200px] text-wrap break-words">
              {props.row?.original?.fname} {props?.row?.original?.lname}
            </p>
          </div>
        ),
        size: getColumnSize({ '3xl': 300, '2xl': 280, sm: 260, default: 200 })
      }),

      columnHelper.accessor('email', {
        header: 'Email',
        cell: (props) => <p className="text-wrap break-all">{props.getValue()}</p>,
        size: getColumnSize({ '2xl': 450, xl: 400, sm: 300, default: 250 })
      }),

      columnHelper.accessor('number', {
        header: 'Mobile Number',
        cell: (props) => <p className="text-wrap break-words">{props.getValue()}</p>,
        size: getColumnSize({ '3xl': 320, '2xl': 280, sm: 250, default: 220 })
      }),

      columnHelper.accessor('location', {
        header: 'Location',
        cell: (props) => <p className="text-wrap break-words">{props.getValue()}</p>,
        size: getColumnSize({ '3xl': 280, sm: 220, default: 200 })
      }),

      columnHelper.accessor('skills', {
        header: 'Skills',
        cell: (props) => <p className="text-wrap break-words">{props.getValue()}</p>,
        size: getColumnSize({ default: 180 })
      }),

      columnHelper.display({
        id: 'actions-align-center',
        header: 'Action',
        cell: (props) => (
          <div className="w-full flex justify-between">
            <Link to={`${props.row.original?.fname} ${props.row.original?.lname}?user-id=${props.row.original?.id}`} className="rounded-lg">
              <EyeOn />
            </Link>

            {props.row.original?.isActive ? (
              <button type="button" className="rounded-lg" onClick={helpers?.activateGrabProfile.setTrue}>
                <LampOn />
              </button>
            ) : (
              <button type="button" className="rounded-lg" onClick={helpers?.deactivateGrabProfile.setTrue}>
                <LampOff />
              </button>
            )}
          </div>
        ),
        size: getColumnSize({ default: 120 })
      })
    ],
    [width]
  )

  const requesterProfileColumns = useMemo(
    () => [
      columnHelper.accessor('user_name', {
        header: 'Requester Profile',
        cell: (props) => (
          <div className="flex items-center gap-x-4">
            <Img src={props.row.original?.user_img} className="size-11 rounded-full" />
            <p className="max-w-[200px] text-wrap break-words">
              {props.row?.original?.fname} {props?.row?.original?.lname}
            </p>
          </div>
        ),
        size: getColumnSize({ '3xl': 300, '2xl': 280, sm: 260, default: 200 })
      }),

      columnHelper.accessor('email', {
        header: 'Email',
        cell: (props) => <p className="text-wrap break-all">{props.getValue()}</p>,
        size: getColumnSize({ '2xl': 450, xl: 400, sm: 300, default: 250 })
      }),

      columnHelper.accessor('number', {
        header: 'Mobile Number',
        cell: (props) => <p className="text-wrap break-words">{props.getValue()}</p>,
        size: getColumnSize({ '3xl': 320, '2xl': 280, sm: 250, default: 220 })
      }),

      columnHelper.accessor('location', {
        header: 'Location',
        cell: (props) => <p className="text-wrap break-words">{props.getValue()}</p>,
        size: getColumnSize({ '3xl': 300, sm: 280, default: 260 })
      }),

      columnHelper.display({
        id: 'actions-align-center',
        header: 'Action',
        cell: (props) => (
          <div className="w-full flex justify-between">
            <Link
              to={`${props.row.original?.fname} ${props.row.original?.lname}?requester-id=${props.row.original?.id}`}
              className="rounded-lg"
            >
              <EyeOn />
            </Link>

            {props.row.original?.isActive ? (
              <button type="button" className="rounded-lg" onClick={helpers?.activateGrabProfile.setTrue}>
                <LampOn />
              </button>
            ) : (
              <button type="button" className="rounded-lg" onClick={helpers?.deactivateGrabProfile.setTrue}>
                <LampOff />
              </button>
            )}
          </div>
        ),
        size: getColumnSize({ default: 120 })
      })
    ],
    [width]
  )

  const disputeColumns = useMemo(
    () => [
      columnHelper.accessor('reporte_from_user_img', {
        header: 'Reported From',
        cell: (props) => (
          <div className="flex items-center gap-x-4">
            <Img src={props.getValue()} className="size-11 rounded-full" />
            <p className="max-w-[200px] text-wrap break-words">
              {props.row?.original?.reporte_from_fname} {props?.row?.original?.reporte_from_lname}
            </p>
          </div>
        ),
        size: getColumnSize({ '3xl': 300, '2xl': 280, sm: 260, default: 200 })
      }),

      columnHelper.accessor('reporte_to_user_img', {
        header: 'Reported To',
        cell: (props) => (
          <div className="flex items-center gap-x-4">
            <Img src={props.row.getValue('reporte_to_user_img')} className="size-11 rounded-full" />
            <p className="max-w-[200px] text-wrap break-words">
              {props.row?.original?.reporte_to_fname} {props?.row?.original?.reporte_to_lname}
            </p>
          </div>
        ),
        size: getColumnSize({ '3xl': 300, '2xl': 280, sm: 260, default: 200 })
      }),

      columnHelper.accessor('reason', {
        header: 'Reason',
        cell: (props) => <p className="text-wrap break-words">{props.getValue()}</p>
      }),

      columnHelper.display({
        id: 'actions-align-center',
        header: 'Action',
        cell: (props) => (
          <div className="w-full flex justify-center items-center">
            <Link to={`details?user-id=${props.row.original?.id}`} className="rounded-lg">
              <EyeOn />
            </Link>
          </div>
        ),
        size: getColumnSize({ default: 120 })
      })
    ],
    [width]
  )

  const notificationColumns = useMemo(
    () => [
      columnHelper.accessor('title', {
        header: 'Title',
        cell: (props) => <p className="text-wrap break-words">{props.getValue()}</p>,
        size: getColumnSize({ '3xl': 300, '2xl': 280, sm: 260, default: 200 })
      }),

      columnHelper.accessor('description', {
        header: 'Description',
        cell: (props) => <p className="text-wrap break-words">{props.getValue()}</p>,
        size: getColumnSize({ '3xl': null, '2xl': null, sm: 400, default: 400 })
      }),

      columnHelper.accessor('profile', {
        header: 'Profile',
        cell: (props) => <p className="text-wrap break-words">{props.getValue()}</p>,
        size: getColumnSize({ default: 180 })
      }),

      columnHelper.accessor('date', {
        header: 'Date & Time',
        cell: (props) => <p className="text-wrap break-words">{moment(props.getValue()).format('DD MMM YYYY | HH:mm A')}</p>,
        size: getColumnSize({ '3xl': 300, '2xl': 280, sm: 260, default: 200 })
      })
    ],
    [width]
  )

  return {
    userProfileColumns,
    requesterProfileColumns,
    disputeColumns,
    notificationColumns
  }
}

export default useColumnDef
