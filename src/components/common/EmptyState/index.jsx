import { Button } from '@/components/ui/button'
import { LIMIT, PAGE } from '@/constant/common/query'
import { useNavigate } from 'react-router'

import Heading from './Heading'

const EmptyState = ({
  title = 'No exact matches',
  subtitle = 'Try changing or removing some of your filters.',
  showReset,
  reset,
  label
}) => {
  const navigate = useNavigate()

  return (
    <div className="w-full h-dvh flex flex-col gap-2 justify-center items-center overflow-hidden font-gilroy">
      <Heading center title={title} subtitle={subtitle} />
      <div className="w-48 mt-4 flex flex-row gap-2">
        {showReset && <Button onClick={() => reset && reset()}>Reset</Button>}
        <Button
          onClick={() =>
            navigate({
              pathname: '/grab-profile',
              search: new URLSearchParams({ page: PAGE, limit: LIMIT }).toString()
            })
          }
        >
          {label}
        </Button>
      </div>
    </div>
  )
}

export default EmptyState
