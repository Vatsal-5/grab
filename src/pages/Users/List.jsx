import { Activate, Deactivate } from '@/assets/icons/Modal'
import DataTable from '@/components/common/datatable'
import useColumnDef from '@/hooks/useColumnDef'
import Alert from '@/modal/common/Alert'
import { faker } from '@faker-js/faker'
import { useMemo } from 'react'
import { useSearchParams } from 'react-router'
import { useBoolean } from 'usehooks-ts'

const List = () => {
  const [searchParams] = useSearchParams()

  const limit = searchParams.get('limit')
  const page = searchParams.get('page')

  const userData = useMemo(
    () =>
      new Array(69).fill().map(() => ({
        id: faker.database.mongodbObjectId(),
        user_img: faker.image.avatar(),
        fname: faker.person.firstName(),
        lname: faker.person.lastName(),
        email: faker.internet.email(),
        number: faker.phone.number({ style: 'international' }),
        location: `${faker.location.buildingNumber()} ${faker.location.state()}`,
        skills: faker.helpers.arrayElement(['Delivey', 'Dog walking']),
        isActive: faker.datatype.boolean()
      })),
    [page, limit]
  )

  const activeModal = useBoolean(false)
  const deactiveModal = useBoolean(false)

  const { userProfileColumns } = useColumnDef({ activateGrabProfile: activeModal, deactivateGrabProfile: deactiveModal })

  return (
    <>
      <DataTable loading={false} data={userData} columns={userProfileColumns} totalItems={userData.length} loader={false} />
      <Alert modalState={activeModal} Icon={Activate} msg="Are you sure you want to activate this grab profile?" title="Activate" />
      <Alert modalState={deactiveModal} Icon={Deactivate} msg="Are you sure you want to deactivate this grab profile?" title="Deactivate" />
    </>
  )
}

export default List
