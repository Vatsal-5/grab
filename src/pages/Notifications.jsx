import { AddSquare } from '@/assets/icons/Common'
import DataTable from '@/components/common/datatable'
import { Button } from '@/components/ui/button'
import useColumnDef from '@/hooks/useColumnDef'
import NotificationModal from '@/modal/Notification'
import { faker } from '@faker-js/faker'
import { useMemo } from 'react'
import { useSearchParams } from 'react-router'
import { useBoolean } from 'usehooks-ts'

const Notifications = () => {
  const [searchParams] = useSearchParams()

  const limit = searchParams.get('limit')
  const page = searchParams.get('page')

  const notificationModal = useBoolean(false)

  const notificationData = useMemo(
    () =>
      new Array(69).fill().map(() => ({
        id: faker.database.mongodbObjectId(),
        title: faker.word.words({ count: 5 }),
        description: faker.word.words({ count: 10 }),
        profile: faker.helpers.arrayElement(['Grab', 'Request Grab']),
        date: faker.date.past()
      })),
    [page, limit]
  )

  const { notificationColumns } = useColumnDef()

  return (
    <>
      <div className="h-full flex flex-col gap-y-3 overflow-hidden font-gilroy">
        <div className="p-1 text-end">
          <Button
            className="py-[13px] px-5 rounded-2xl text-base flex-1 font-semibold bg-text-1 hover:bg-text-1"
            onClick={notificationModal.setTrue}
          >
            <AddSquare className="min-w-6 min-h-6" />
            Add Notification
          </Button>
        </div>
        <DataTable
          loading={false}
          data={notificationData}
          columns={notificationColumns}
          totalItems={notificationData.length}
          loader={false}
        />
      </div>
      <NotificationModal modalState={notificationModal} />
    </>
  )
}

export default Notifications
