import { EyeOff, EyeOn } from '@/assets/icons/Auth'
import { Button } from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { useRef } from 'react'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useEventListener } from 'usehooks-ts'

const Password = ({ name, placeholder = '', label = '', className = '', prefix, ...other }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const { control } = useFormContext()
  const inputRef = useRef()

  useEventListener('focusin', () => setIsFocused(true), inputRef)
  useEventListener('focusout', () => setIsFocused(false), inputRef)

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, formState: { errors } }) => (
        <div>
          {label && <label className="text-text-1 font-medium">{label}</label>}
          <FormItem className="space-y-0 relative">
            <FormControl>
              <Input
                {...field}
                {...other}
                ref={inputRef}
                type={showPassword ? 'text' : 'password'}
                autoComplete="off"
                id={name}
                required
                placeholder={placeholder}
                className={cn(
                  'px-6 py-3 pr-[54px] bg-background rounded-xl sm:rounded-2xl font-medium !text-base sm:!text-lg placeholder:text-text-2 placeholder:font-medium placeholder:text-base sm:placeholder:text-lg focus-visible:!ring-border-1 focus-visible:ring-offset-0 font-gilroy',
                  errors?.[name]?.message
                    ? 'text-red-500 focus-visible:ring-red-500 border border-red-500 focus-visible:ring-1'
                    : 'text-text-1 border border-transparent focus-visible:ring-1 focus-visible:ring-main',
                  prefix ? 'pl-[46px] sm:pl-[60px]' : '',
                  className
                )}
              />
            </FormControl>
            {prefix && <div className="absolute flex items-center top-1/2 -translate-y-1/2 left-4 sm:left-[22px]">{prefix}</div>}

            <Button
              className={cn(
                'h-full p-0 aspect-square rounded-l-none rounded-r-2xl text-text-1 absolute top-1/2 -translate-y-1/2 right-0 border border-transparent bg-transparent hover:bg-transparent',
                isFocused ? 'hover:border-l-border-1' : 'hover:border-border-1'
              )}
              onClick={() => setShowPassword(!showPassword)}
              type="button"
            >
              {showPassword ? (
                <EyeOn className="min-w-5 min-h-5 sm:min-w-6 sm:min-h-6" />
              ) : (
                <EyeOff className="min-w-5 min-h-5 sm:min-w-6 sm:min-h-6" />
              )}
            </Button>
          </FormItem>
          <FormMessage className="pt-1 pl-3 text-xs sm:text-sm font-medium text-red-500" />
        </div>
      )}
    ></FormField>
  )
}

export default Password
