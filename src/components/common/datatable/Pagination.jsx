import { PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { LIMITS } from '@/constant/common/pagination'
import { LIMIT, PAGE } from '@/constant/common/query'
import { useCallback, useEffect } from 'react'
import { useLocation, useSearchParams } from 'react-router'
import { useStep } from 'usehooks-ts'

const Pagination = ({ totalRecords }) => {
  const { pathname } = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()

  const limit = LIMITS.includes(+searchParams.get('limit') || LIMIT) ? +searchParams.get('limit') || LIMIT : LIMIT
  const totalPages = Math.ceil(totalRecords / limit)
  const page = (+searchParams.get('page') || PAGE) > totalPages ? PAGE : +searchParams.get('page') || PAGE

  const [, helpers] = useStep(totalPages)

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', page)
    params.set('limit', limit)
    setSearchParams(params)
    helpers.setStep(page)
  }, [page])

  const updateQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return setSearchParams(params)
    },
    [searchParams]
  )

  return (
    <div className="pb-3 md:pb-3.5 pt-2 flex justify-between items-center flex-row">
      <div className="w-max flex items-center gap-x-[10px]">
        <p className="hidden lg:block text-sm sm:text-base text-text-2 font-medium whitespace-nowrap">Rows per page :</p>
        <Select value={limit} onValueChange={(value) => updateQueryString('limit', value)}>
          <SelectTrigger className="w-[52px] px-2 py-1.5 border-border-3 bg-transparent rounded-lg focus:ring-0 focus:ring-offset-0">
            <SelectValue placeholder={limit} className="text-sm" />
          </SelectTrigger>
          <SelectContent align="middle" className="min-w-20">
            {LIMITS.map((item, key) => (
              <SelectItem key={key} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="hidden md:inline-block text-sm sm:text-base text-text-2 font-medium">
        <span className="hidden lg:inline-block">Showing</span>
        &nbsp;
        <span>
          {limit * page > totalRecords ? totalRecords : limit} out of {totalRecords}
        </span>
        &nbsp;
        <span className="hidden lg:inline-block">results</span>
      </div>

      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious to={helpers.canGoToPrevStep ? `${pathname}?page=${page - 1}&limit=${limit}` : window.location.href} />
        </PaginationItem>

        {!helpers.canGoToNextStep && helpers.canGoToPrevStep && Boolean(page - 2) && page - 2 <= totalPages && (
          <PaginationItem>
            <PaginationLink to={`${pathname}?page=${page - 2}&limit=${limit}`}>{page - 2}</PaginationLink>
          </PaginationItem>
        )}

        {(!helpers.canGoToNextStep || page == totalPages - 1) && helpers.canGoToPrevStep && (
          <PaginationItem>
            <PaginationLink to={`${pathname}?page=${page - 1}&limit=${limit}`}>{page - 1}</PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationLink className="bg-pagination-button-background" to={`${pathname}?page=${page}&limit=${limit}`} isActive>
            {page}
          </PaginationLink>
        </PaginationItem>

        {helpers.canGoToNextStep && (
          <PaginationItem>
            <PaginationLink to={`${pathname}?page=${page + 1}&limit=${limit}`}>{page + 1}</PaginationLink>
          </PaginationItem>
        )}

        {helpers.canGoToNextStep && totalPages >= page + 2 && (
          <PaginationItem>
            <PaginationLink to={`${pathname}?page=${page + 2}&limit=${limit}`}>{page + 2}</PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext to={helpers.canGoToNextStep ? `${pathname}?page=${page + 1}&limit=${limit}` : window.location.href} />
        </PaginationItem>
      </PaginationContent>
    </div>
  )
}

export default Pagination
