import { ArrowBack } from '@/assets/icons/Auth'
import { Button } from '@/components/ui/button'

const Back = ({ ...props }) => {
  return (
    <Button
      className="size-10 sm:size-11 lg:size-12 bg-background rounded-lg lg:rounded-xl hover:bg-text-1 absolute top-[20px] sm:left-[40px] hover:bg-bg-background"
      {...props}
    >
      <ArrowBack className="size-4 text-text-1" />
    </Button>
  )
}

export default Back
