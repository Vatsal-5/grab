import { Message, Title } from '@/assets/icons/Modal'
import ChooseProfile from '@/components/common/inputs/ChooseProfile'
import ChooseRecipient from '@/components/common/inputs/ChooseRecipient'
import Input from '@/components/common/inputs/Input'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Form } from '@/components/ui/form'
import { Separator } from '@/components/ui/separator'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { useForm } from 'react-hook-form'

const Notification = ({ modalState }) => {
  const notificationForm = useForm({
    defaultValues: {}
  })

  const onSubmit = () => {}

  const onClose = () => {
    notificationForm.reset()
    modalState.setFalse()
  }

  return (
    <Dialog open={modalState.value} onOpenChange={(e) => (e ? modalState.setValue(e) : onClose())}>
      <DialogContent close={false} className="max-w-[90%] md:max-w-xl p-4 md:p-6 rounded-2xl sm:rounded-3xl bg-white gap-0 font-gilroy">
        <DialogHeader>
          <DialogTitle className="text-center font-semibold text-xl md:text-2xl text-text-1">Add Notification</DialogTitle>
          <VisuallyHidden.Root>
            <DialogDescription>Add Notification</DialogDescription>
          </VisuallyHidden.Root>
        </DialogHeader>
        <Separator className="mt-3 md:mt-4 mb-4 md:mb-5 bg-border-7" />

        <Form {...notificationForm}>
          <form noValidate onSubmit={notificationForm.handleSubmit(onSubmit)} className="space-y-5 md:space-y-7 lg:space-y-[34px]">
            <div className="flex flex-col gap-y-2 md:gap-y-3">
              <ChooseProfile />
              <ChooseRecipient />
              <Input prefix={<Title className="size-5 md:size-6" />} placeholder="Enter Title" name="title" />
              <Input
                prefix={<Message className="min-w-5 min-h-5 md:min-w-6 md:min-h-6" />}
                placeholder="Enter Description"
                name="description"
                textarea
                className="h-[125px] resize-none"
              />
            </div>

            <div className="h-max flex gap-x-2 sm:gap-x-4">
              <Button
                className="w-full px-5 py-3 lg:py-[14px] text-base lg:text-lg font-semibold rounded-xl lg:rounded-[18px] text-text-2 bg-profile-details-background hover:bg-profile-details-background"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                className="w-full px-5 py-3 lg:py-[14px] text-base lg:text-lg font-semibold rounded-xl lg:rounded-[18px] bg-text-1 text-white hover:bg-text-1 hover:text-white"
                onClick={onClose}
              >
                Send
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default Notification
