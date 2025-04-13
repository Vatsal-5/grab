import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { DynamicIcon } from 'lucide-react/dynamic'

const Alert = ({ modalState, Icon, iconName, title, onConfirm, msg }) => {
  return (
    <Dialog open={modalState.value} onOpenChange={modalState.setValue}>
      <DialogContent close={false} className="max-w-[90%] md:max-w-xl p-4 md:p-6 rounded-2xl sm:rounded-3xl bg-white gap-0 font-gilroy">
        <VisuallyHidden.Root>
          <DialogHeader>
            <DialogTitle className="text-center font-semibold text-xl md:text-2xl text-text-1">{title}</DialogTitle>
            <DialogDescription>{title}</DialogDescription>
          </DialogHeader>
        </VisuallyHidden.Root>

        <div className="w-max aspect-square mx-auto p-8 bg-text-1 rounded-full">
          <Icon />
          <DynamicIcon name={iconName} size={52} className="size-[52px] text-white text-current" />
        </div>

        <div className="mt-5 mb-10 flex flex-col items-center gap-y-1">
          <h2 className="scroll-m-20 text-3xl text-center font-bold text-text-1 tracking-tight">{title}</h2>
          <h3 className="scroll-m-20 text-xl text-center font-medium text-text-2 tracking-tight">{msg}</h3>
        </div>

        <div className="h-max flex gap-x-2 sm:gap-x-4">
          <Button
            className="w-full px-5 py-3 lg:py-[14px] text-base lg:text-lg font-semibold rounded-xl lg:rounded-[18px] text-text-2 bg-profile-details-background hover:bg-profile-details-background"
            onClick={modalState.setFalse}
          >
            No
          </Button>
          <Button
            className="w-full px-5 py-3 lg:py-[14px] text-base lg:text-lg font-semibold rounded-xl lg:rounded-[18px] bg-text-1 text-white hover:bg-text-1 hover:text-white"
            onClick={onConfirm ? onConfirm : modalState.setFalse}
          >
            Yes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Alert
