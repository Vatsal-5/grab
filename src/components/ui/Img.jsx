import { USER_FALLBACK_ICON } from '@/constant/image'
import { cn, onImageError } from '@/lib/utils'

const Img = (props) => {
  return <img {...props} onError={onImageError} />
}

const Avatar = ({ className, ...rest }) => {
  return <Img src={USER_FALLBACK_ICON} alt="error" className={cn('rounded-full', className)} {...rest} />
}

export { Avatar }

export default Img
