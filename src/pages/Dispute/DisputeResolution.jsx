import DataTable from '@/components/common/datatable'
import { Toggle } from '@/components/ui/toggle'
import { DISPUTE_TABS, DISPUTE_TABS_NAME } from '@/constant/common/tabs'
import useColumnDef from '@/hooks/useColumnDef'
import { faker } from '@faker-js/faker'
import { useCallback, useMemo, useRef } from 'react'
import { useSearchParams } from 'react-router'

const DisputeResolution = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const limit = searchParams.get('limit')
  const page = searchParams.get('page')

  const activeTab = useRef(searchParams.has('tab') ? searchParams.get('tab') : DISPUTE_TABS.at(0))

  const updateQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return setSearchParams(params)
    },
    [searchParams]
  )

  const disputeData = useMemo(
    () =>
      new Array(69).fill().map(() => ({
        id: faker.database.mongodbObjectId(),
        reporte_from_user_img: faker.image.avatar(),
        reporte_from_fname: faker.person.firstName(),
        reporte_from_lname: faker.person.lastName(),
        reporte_to_user_img: faker.image.avatar(),
        reporte_to_fname: faker.person.firstName(),
        reporte_to_lname: faker.person.lastName(),
        reason: faker.helpers.arrayElement([
          'Unprofessional behavior',
          'Task not completed',
          'Overcharging or Compensation Disputes',
          'Unclear Task Details',
          'Delayed or Missing Payment',
          'Uncooperative Requester',
          'Scam or Fraud',
          'Inappropriate Content',
          'False Marking as Completed'
        ])
      })),
    [page, limit, activeTab.current]
  )

  const { disputeColumns } = useColumnDef()

  return (
    <div className="h-full flex flex-col gap-y-3 overflow-hidden font-gilroy">
      <div className="w-full max-w-[350px] p-1 flex gap-x-2 bg-white rounded-xl">
        {DISPUTE_TABS.map((tab, index) => {
          return (
            <Toggle
              key={index}
              pressed={activeTab.current === tab}
              onPressedChange={(e) => {
                if (e) {
                  updateQueryString('tab', tab)
                  activeTab.current = tab
                }
              }}
              className="flex-1 font-semibold rounded-xl data-[state=on]:bg-text-1 data-[state=on]:text-white data-[state=on]:hover:bg-text-1 data-[state=on]:hover:text-white bg-white text-text-1 hover:bg-white hover:text-text-1"
            >
              {DISPUTE_TABS_NAME[index]}
            </Toggle>
          )
        })}
      </div>

      <DataTable loading={false} data={disputeData} columns={disputeColumns} totalItems={disputeData.length} loader={false} />
    </div>
  )
}

export default DisputeResolution
