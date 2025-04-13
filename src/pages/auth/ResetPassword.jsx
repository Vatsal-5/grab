import { Lock, ResetPassword as ResetPasswordIcon } from '@/assets/icons/Auth'
import Back from '@/components/common/auth/Back'
import Password from '@/components/common/inputs/Password'
import Img from '@/components/ui/Img'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { LIMIT, PAGE } from '@/constant/common/query'
import { resetPassword as defaultValues } from '@/constant/defaultValues/auth'
import { AUTH_IMAGE } from '@/constant/image'
import { ResetPasswordSchema } from '@/lib/schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

const ResetPassword = () => {
  const navigate = useNavigate()

  const resetPasswordForm = useForm({
    defaultValues,
    resolver: yupResolver(ResetPasswordSchema)
  })

  const onSubmit = () => {
    navigate({
      pathname: '/grab-profile',
      search: new URLSearchParams({ page: PAGE, limit: LIMIT }).toString()
    })
  }

  return (
    <div className="h-dvh flex flex-col md:flex-row font-gilroy">
      <div className="w-full md:w-1/2 lg:w-[40%] hidden md:flex justify-center">
        <Img className="w-full rounded-r-[7%] object-cover" src={AUTH_IMAGE} alt="logo" />
      </div>
      <div className="flex-1 px-4 sm:px-5 md:px-8 lg:px-10 py-14 flex items-center relative">
        <Back onClick={() => navigate(-1)} />

        <div className="w-full max-w-[420px] sm:max-w-[520px] mx-auto space-y-6 sm:space-y-8">
          <div className="w-max mx-auto border-[6px] lg:border-8 border-ring-2 rounded-full">
            <ResetPasswordIcon className="m-7 lg:m-[34px] size-10 lg:size-14" color="var(--text-1)" />
          </div>
          <div className="w-full max-w-[380px] mx-auto space-y-1">
            <h4 className="text-2xl sm:text-[32px] leading-normal text-center font-bold text-text-5">Reset Password</h4>
            <p className="sm:text-base md:text-lg text-center text-text-2 font-medium">
              Your new password must be different from your previous one
            </p>
          </div>
          <Form {...resetPasswordForm}>
            <form noValidate onSubmit={resetPasswordForm.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6 lg:space-y-8">
              <Password
                prefix={<Lock strokeWidth={1.5} className="size-5 md:size-6" />}
                placeholder="Enter new password"
                name="new_password"
              />
              <Password
                prefix={<Lock strokeWidth={1.5} className="size-5 md:size-6" />}
                placeholder="Enter confirm password"
                name="confirm_password"
              />
              <Button
                className="w-full py-3 sm:py-3.5 rounded-lg sm:rounded-xl lg:rounded-2xl text-base sm:text-lg lg:text-xl font-medium bg-text-1"
                type="submit"
              >
                Update
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
