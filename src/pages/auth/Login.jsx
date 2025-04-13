import { Email, Lock, Login as LoginIcon } from '@/assets/icons/Auth'
import Input from '@/components/common/inputs/Input'
import Password from '@/components/common/inputs/Password'
import Img from '@/components/ui/Img'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { LIMIT, PAGE } from '@/constant/common/query'
import { login as defaultValues } from '@/constant/defaultValues/auth'
import { AUTH_IMAGE } from '@/constant/image'
import { LoginSchema } from '@/lib/schema'
import authRoute from '@/routes/names/auth'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router'

const Login = () => {
  const navigate = useNavigate()

  const loginForm = useForm({
    defaultValues,
    resolver: yupResolver(LoginSchema)
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
      <div className="flex-1 px-4 sm:px-5 md:px-8 lg:px-10 py-14 flex items-center">
        <div className="w-full max-w-[420px] sm:max-w-[520px] mx-auto space-y-6 sm:space-y-8">
          <div className="w-max mx-auto border-[6px] lg:border-8 border-ring-2 rounded-full">
            <LoginIcon className="m-7 lg:m-[34px] size-10 lg:size-14" />
          </div>
          <div className="w-full max-w-[332px] mx-auto space-y-1">
            <h4 className="text-2xl sm:text-[32px] leading-normal text-center font-bold text-text-5">Welcome!</h4>
            <p className="sm:text-base md:text-lg text-center text-text-2 font-medium">Please login to continue</p>
          </div>
          <Form {...loginForm}>
            <form noValidate onSubmit={loginForm.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-y-4 sm:gap-y-6 lg:gap-y-8">
                <Input prefix={<Email className="size-5 md:size-6" />} placeholder="Enter email" name="email" />
                <Password prefix={<Lock className="size-5 md:size-6" />} placeholder="Enter password" name="password" />
              </div>
              <Link
                to={authRoute.fogotPassword}
                className="block mt-3 sm:mt-4 mb-8 sm:mb-11 font-medium text-sm sm:!text-base lg:text-lg text-text-3 text-end"
              >
                Forgot Password?
              </Link>
              <Button
                className="w-full py-3 sm:py-3.5 rounded-lg sm:rounded-xl lg:rounded-2xl text-base sm:text-lg lg:text-xl font-medium"
                type="submit"
              >
                Login
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login
