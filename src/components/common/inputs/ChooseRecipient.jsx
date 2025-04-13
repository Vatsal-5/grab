import { Search } from '@/assets/icons/Header'
import { User } from '@/assets/icons/Modal'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { CHOOSE_RECIPIENT } from '@/constant/common/checkbox'
import { ChevronDown } from 'lucide-react'

const ChooseRecipient = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="w-full px-3.5 md:px-[22px] py-[13px] md:py-[17px] rounded-2xl data-[state=open]:rounded-b-none items-center justify-between bg-background hover:bg-background focus-visible:ring-border-1">
          <div className="flex items-center gap-x-[7px] md:gap-x-3">
            <User size={24} className="min-w-6 min-h-6 text-text-1" />
            <span className="text-base text-text-2 font-medium">Choose Recipient</span>
          </div>
          <ChevronDown size={24} className="min-w-6 min-h-6 text-text-1" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        sideOffset={0}
        className="w-[var(--radix-popover-trigger-width)] pt-0 rounded-2xl rounded-t-none border-none bg-background"
      >
        <Separator className="bg-border-7" />

        <div className="w-full mt-5 mb-4 relative">
          <div className="pl-2 md:pl-3 absolute top-1/2 -translate-y-1/2">
            <Search className="stroke-text-2" />
          </div>
          <Input
            className="p-3 md:p-4 pl-9 md:pl-11 !py-3.5 bg-white placeholder:text-text-2 placeholder:text-sm md:placeholder:text-base flex-1 rounded-xl"
            placeholder="Search"
          />
        </div>

        <div className="flex flex-col gap-y-3">
          <div className="flex items-center gap-x-[10px]">
            <Checkbox id="select-all" circleClassName="size-4" className="rounded-[7px] size-[22px] data-[state=checked]:bg-text-1" />
            <Label htmlFor="select-all" className="text-base text-text-2 font-normal cursor-pointer">
              Select all
            </Label>
          </div>
          {CHOOSE_RECIPIENT.map((item, index) => {
            return (
              <div key={index} className="flex items-center gap-x-[10px]">
                <Checkbox
                  value={item.value}
                  id={item.value}
                  circleClassName="size-4"
                  className="rounded-[7px] size-[22px] data-[state=checked]:bg-text-1"
                />
                <Label htmlFor={item.value} className="text-base text-text-2 font-normal cursor-pointer">
                  {item.label}
                </Label>
              </div>
            )
          })}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default ChooseRecipient
