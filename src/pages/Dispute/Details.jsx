import { DollarCircle, Flag, PaymentStatus, Services } from '@/assets/icons/Details'
import { Calendar, ReleasePayment, Title, User } from '@/assets/icons/Modal'
import { Avatar } from '@/components/ui/Img'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import DisputeWarning from '@/modal/DisputeWarning'
import Alert from '@/modal/common/Alert'
import { faker } from '@faker-js/faker'
import moment from 'moment'
import { useMemo } from 'react'
import { useBoolean } from 'usehooks-ts'

const Details = () => {
  const taskData = useMemo(
    () => ({
      id: faker.database.mongodbObjectId(),
      title: 'Deliver groceries to my apartment',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      reported_date: faker.date.past(),
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
    }),
    []
  )

  const releasePaymentModal = useBoolean(false)
  const disputeWarningModal = useBoolean(false)

  return (
    <>
      <div className="h-full flex flex-col font-gilroy overflow-hidden">
        <div className="h-full flex flex-col justify-between rounded-3xl bg-white border border-border-4">
          <ScrollArea>
            <div className="p-4 sm:p-6 lg:p-[30px]">
              <h4 className="scroll-m-20 text-base sm:text-lg lg:text-xl font-semibold tracking-tight text-text-1">Task Details</h4>
              <div className="mt-4 md:mt-6 flex flex-col gap-y-4">
                <div className="w-full flex items-center gap-x-3 md:gap-x-4">
                  <div className="h-max p-2 md:p-[13px] flex rounded-full bg-background">
                    <Title className="text-text-1 size-5 md:size-6" />
                  </div>
                  <div className="w-full flex flex-col overflow-hidden gap-y-0.5">
                    <span className="text-xs md:text-sm font-medium text-text-2">Task Title</span>
                    <p className="w-full text-sm md:text-base font-medium text-text-4">{taskData.title}</p>
                  </div>
                </div>
                <Separator className="bg-border-3" />
                <div className="w-full flex items-center gap-x-3 md:gap-x-4">
                  <div className="h-max p-2 md:p-[13px] flex rounded-full bg-background">
                    <User className="text-text-1 size-5 md:size-6" />
                  </div>
                  <div className="w-full flex flex-col overflow-hidden gap-y-0.5">
                    <span className="text-xs md:text-sm font-medium text-text-2">Task Description</span>
                    <p className="w-full text-sm md:text-base font-medium text-text-4">{taskData.description}</p>
                  </div>
                </div>
                <Separator className="bg-border-3" />
                <div className="w-full flex items-center gap-x-3 md:gap-x-4">
                  <div className="h-max p-2 md:p-[13px] flex rounded-full bg-background">
                    <Calendar className="text-text-size-5 md:1 size-6" />
                  </div>
                  <div className="w-full flex flex-col overflow-hidden gap-y-0.5">
                    <span className="text-xs md:text-sm font-medium text-text-2">Reported On</span>
                    <p className="w-full text-sm md:text-base font-medium text-text-4">
                      {moment(taskData.reported_date).format('MM DD, YYYY,')} at {moment(taskData.reported_date).format('HH:mm a')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Separator className="bg-border-3" />
            <div className="p-4 sm:p-6 lg:p-[30px] grid grid-cols-1 sm:flex justify-between gap-4 flex-wrap">
              <div className="flex flex-col gap-y-3 flex-1">
                <h4 className="scroll-m-20 text-base sm:text-lg lg:text-xl font-semibold tracking-tight text-text-1">Reported From</h4>
                <div className="flex items-center gap-x-4">
                  <Avatar className="size-10 sm:size-[50px] lg:size-[60px]" src={taskData.reporte_from_user_img} />
                  <div className="flex flex-col gap-y-1">
                    <p className="text-xs md:text-sm text-text-2 font-medium">Grab</p>
                    <p className="text-sm md:text-base text-text-1 font-medium">
                      {taskData.reporte_from_fname} {taskData.reporte_from_lname}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-3 flex-1">
                <h4 className="scroll-m-20 text-base sm:text-lg lg:text-xl font-semibold tracking-tight text-text-1">Reported To</h4>
                <div className="flex items-center gap-x-4">
                  <Avatar className="size-10 sm:size-[50px] lg:size-[60px]" src={taskData.reporte_to_user_img} />
                  <div className="flex flex-col gap-y-1">
                    <p className="text-xs md:text-sm text-text-2 font-medium">Grab Requester</p>
                    <p className="text-sm md:text-base text-text-1 font-medium">
                      {taskData.reporte_to_fname} {taskData.reporte_to_lname}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 justify-end gap-y-3">
                <div className="flex items-center gap-x-4">
                  <div className="p-[13px] flex rounded-full bg-background">
                    <Flag className="size-6" />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <p className="text-xs md:text-sm text-text-2 font-medium">Reason of Report</p>
                    <p className="text-sm md:text-base text-text-1 font-medium">{taskData.reason}</p>
                  </div>
                </div>
              </div>
            </div>
            <Separator className="bg-border-3" />
            <div className="p-4 sm:p-6 lg:p-[30px]">
              <h4 className="scroll-m-20 text-base sm:text-lg lg:text-xl font-semibold tracking-tight text-text-1">Payment Details</h4>
              <div className="pt-4 sm:pt-6 lg:pt-[30px] pb-4 sm:pb-5 lg:pb-6 flex justify-between gap-4 flex-wrap">
                <div className="flex flex-col flex-1 justify-end gap-y-3">
                  <div className="flex items-center gap-x-4">
                    <div className="p-[13px] flex rounded-full bg-background">
                      <DollarCircle className="size-6" />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <p className="text-sm text-text-2 font-medium whitespace-nowrap">Total Payment</p>
                      <p className="text-base text-text-1 font-medium">$50.00</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-end gap-y-3">
                  <div className="flex items-center gap-x-4">
                    <div className="p-[13px] flex rounded-full bg-background">
                      <Services className="size-6" />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <p className="text-sm text-text-2 font-medium whitespace-nowrap">Service Fee</p>
                      <p className="text-base text-text-1 font-medium">$5.00</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-end gap-y-3">
                  <div className="flex items-center gap-x-4">
                    <div className="p-[13px] flex rounded-full bg-background">
                      <DollarCircle className="size-6" />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <p className="text-sm text-text-2 font-medium whitespace-nowrap">Net Payout to Performer</p>
                      <p className="text-base text-text-1 font-medium">$45.00</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-end gap-y-3">
                  <div className="flex items-center gap-x-4">
                    <div className="p-[13px] flex rounded-full bg-background">
                      <PaymentStatus className="size-6" />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <p className="text-sm text-text-2 font-medium whitespace-nowrap">Current Payment Status</p>
                      <p className="text-base text-text-1 font-medium">Pending</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
          <Separator className="bg-border-3" />
          <div className="h-max p-6 text-end space-x-2 sm:space-x-4">
            <Button
              className="md:w-full md:max-w-[200px] px-5 py-3 lg:py-[14px] text-base lg:text-lg font-semibold rounded-xl lg:rounded-[18px] text-text-2 bg-profile-details-background hover:bg-profile-details-background"
              onClick={disputeWarningModal.setTrue}
            >
              Warning
            </Button>
            <Button
              className="md:w-full md:max-w-[200px] px-5 py-3 lg:py-[14px] text-base lg:text-lg font-semibold rounded-xl lg:rounded-[18px] bg-text-1 text-white"
              onClick={releasePaymentModal.setTrue}
            >
              Release
            </Button>
          </div>
        </div>
      </div>
      <Alert
        modalState={releasePaymentModal}
        Icon={ReleasePayment}
        msg="Are you sure you want to release the payment of $45.00 to Aileen Smith?"
        title="Release Payment?"
      />
      <DisputeWarning modalState={disputeWarningModal} />
    </>
  )
}

export default Details
