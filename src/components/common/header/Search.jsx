import { Search } from '@/assets/icons/Header'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useIsMobile } from '@/hooks/use-mobile'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'

const SearchComponent = () => {
  const isMobile = useIsMobile()

  if (isMobile) {
    return (
      <Sheet modal={false}>
        <SheetTrigger className="p-3 rounded-full bg-background">
          <Search className="size-6 stroke-text-1" />
        </SheetTrigger>
        <SheetContent close={false} side="top" className="py-3 md:py-4 bg-white border-b border-border-3 shadow-none">
          <VisuallyHidden.Root>
            <SheetHeader>
              <SheetTitle>Search...</SheetTitle>
              <SheetDescription>Search</SheetDescription>
            </SheetHeader>
          </VisuallyHidden.Root>
          <div className="w-full relative">
            <div className="pl-3 md:pl-4 absolute top-1/2 -translate-y-1/2">
              <Search className="size-5 md:size-6 stroke-text-1" />
            </div>
            <Input
              className="p-3 md:p-4 pl-10 md:pl-12 bg-background placeholder:text-text-2 placeholder:text-sm md:placeholder:text-base flex-1 rounded-xl md:rounded-[18px] font-medium font-gilroy !text-sm md:!text-base border border-border-1 focus-visible:ring-0"
              placeholder="Search..."
            />
          </div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div className="w-full relative">
      <div className="pl-2.5 md:pl-4 absolute top-1/2 -translate-y-1/2">
        <Search className="size-5 md:size-6 stroke-text-1" />
      </div>
      <Input
        className="p-3 md:p-4 pl-10 md:pl-[52px] bg-background placeholder:text-text-2 placeholder:text-sm md:placeholder:text-base flex-1 rounded-xl md:rounded-[18px] font-medium font-gilroy !text-sm md:!text-base"
        placeholder="Search..."
      />
    </div>
  )
}

export default SearchComponent
