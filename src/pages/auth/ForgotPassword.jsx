import { Email, ForgotPassword as ForgotPasswordIcon } from '@/assets/icons/Auth'
import Back from '@/components/common/auth/Back'
import Input from '@/components/common/inputs/Input'
import Img from '@/components/ui/Img'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { forgotPassword as defaultValues } from '@/constant/defaultValues/auth'
import { AUTH_IMAGE } from '@/constant/image'
import { ForgotPasswordSchema } from '@/lib/schema'
import authRoute from '@/routes/names/auth'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

const ForgotPassword = () => {
  const navigate = useNavigate()

  const fogotPasswordForm = useForm({
    defaultValues,
    resolver: yupResolver(ForgotPasswordSchema)
  })

  const onSubmit = (values) => {
    navigate(authRoute.codeVerification, {
      state: {
        email: values.email
      }
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
            <ForgotPasswordIcon className="m-7 lg:m-[34px] size-10 lg:size-14" />
          </div>
          <div className="w-full max-w-[332px] mx-auto space-y-1">
            <h4 className="text-2xl sm:text-[32px] leading-normal text-center font-bold text-text-5">Forgot Password</h4>
            <p className="sm:text-base md:text-lg text-center text-text-2 font-medium">
              No worries, we will help you to reset your password
            </p>
          </div>
          <Form {...fogotPasswordForm}>
            <form noValidate onSubmit={fogotPasswordForm.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6 lg:space-y-8">
              <Input prefix={<Email className="size-5 md:size-6" />} placeholder="Enter email" name="email" />
              <Button
                className="w-full py-3 sm:py-3.5 rounded-lg sm:rounded-xl lg:rounded-2xl text-base sm:text-lg lg:text-xl font-medium bg-text-1"
                type="submit"
              >
                Send
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
