import { USER_FALLBACK_ICON } from '@/constant/image'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs) => {
  return twMerge(clsx(inputs))
}

export const onImageError = (e) => {
  e.target.src = USER_FALLBACK_ICON
}
