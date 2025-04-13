import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import * as React from 'react'
import { Link } from 'react-router'

const Pagination = ({ className, ...props }) => (
  <nav role="navigation" aria-label="pagination" className={cn('mx-auto flex w-full justify-center', className)} {...props} />
)
Pagination.displayName = 'Pagination'

const PaginationContent = React.forwardRef(({ className, ...props }, ref) => (
  <ul ref={ref} className={cn('flex flex-row items-center gap-1', className)} {...props} />
))
PaginationContent.displayName = 'PaginationContent'

const PaginationItem = React.forwardRef(({ className, ...props }, ref) => <li ref={ref} className={cn('', className)} {...props} />)
PaginationItem.displayName = 'PaginationItem'

const PaginationLink = ({ className, isActive, size = 'icon', ...props }) => (
  <Link
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      '!h-8 !w-8 md:!h-9 md:!w-9 !rounded-full border-none font-medium text-base',
      isActive ? 'text-text-1 hover:bg-pagination-button-background' : 'text-text-2 hover:!bg-transparent hover:!text-text-2',
      buttonVariants({
        variant: isActive ? 'outline' : 'ghost',
        size
      }),
      className
    )}
    {...props}
  />
)
PaginationLink.displayName = 'PaginationLink'

const PaginationPrevious = ({ className, ...props }) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn(buttonVariants({ variant: 'outline' }), 'bg-transparent hover:bg-pagination-button-background', className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4 text-text-2" strokeWidth={3} />
  </PaginationLink>
)
PaginationPrevious.displayName = 'PaginationPrevious'

const PaginationNext = ({ className, ...props }) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn(buttonVariants({ variant: 'outline' }), 'bg-transparent hover:bg-pagination-button-background', className)}
    {...props}
  >
    <ChevronRight className="h-4 w-4 text-text-2" strokeWidth={3} />
  </PaginationLink>
)
PaginationNext.displayName = 'PaginationNext'

const PaginationEllipsis = ({ className, ...props }) => (
  <span aria-hidden className={cn('flex h-9 w-9 items-center justify-center', className)} {...props}>
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = 'PaginationEllipsis'

export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious }
