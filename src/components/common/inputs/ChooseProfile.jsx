import { User } from '@/assets/icons/Modal'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Separator } from '@/components/ui/separator'
import { CHOOSE_PROFILE } from '@/constant/common/radio'
import { ChevronDown } from 'lucide-react'

const ChooseProfile = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="w-full px-3.5 md:px-[22px] py-[13px] md:py-[17px] rounded-2xl data-[state=open]:rounded-b-none items-center justify-between bg-background hover:bg-background focus-visible:ring-border-1">
          <div className="flex items-center gap-x-[7px] md:gap-x-3">
            <User size={24} className="min-w-6 min-h-6 text-text-1" />
            <span className="text-base text-text-2 font-medium">Choose Profile</span>
          </div>
          <ChevronDown size={24} className="min-w-6 min-h-6 text-text-1" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        sideOffset={0}
        className="w-[var(--radix-popover-trigger-width)] pt-0 rounded-2xl rounded-t-none border-none bg-background"
      >
        <Separator className="mb-5 bg-border-7" />

        <RadioGroup className="gap-y-3">
          {CHOOSE_PROFILE.map((item, index) => {
            return (
              <div key={index} className="flex items-center gap-x-[10px]">
                <RadioGroupItem value={item.value} id={item.value} circleClassName="size-4" className="size-5" />
                <Label htmlFor={item.value} className="text-base text-text-2 font-normal cursor-pointer">
                  {item.label}
                </Label>
              </div>
            )
          })}
        </RadioGroup>
      </PopoverContent>
    </Popover>
  )
}

export default ChooseProfile
