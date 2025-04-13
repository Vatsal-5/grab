import { Email } from '@/assets/icons/Auth'
import { Loaction, Phone } from '@/assets/icons/Common'
import { GrabProfile } from '@/assets/icons/Sidebar'
import { Avatar } from '@/components/ui/Img'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { faker } from '@faker-js/faker'
import { Star } from 'lucide-react'
import moment from 'moment/moment'
import { useMemo } from 'react'
import { useWindowSize } from 'usehooks-ts'

const Profile = () => {
  const { width = 0 } = useWindowSize()

  const userProfile = useMemo(
    () => ({
      id: faker.database.mongodbObjectId(),
      user_img: faker.image.avatar(),
      fname: faker.person.firstName(),
      lname: faker.person.lastName(),
      email: faker.internet.email(),
      number: faker.phone.number({ style: 'international' }),
      location: `${faker.location.buildingNumber()} ${faker.location.state()}`,
      completedTasks: faker.number.int({ max: 1000 })
    }),
    []
  )

  const reviewData = useMemo(
    () =>
      new Array(userProfile.completedTasks).fill().map(() => ({
        id: faker.database.mongodbObjectId(),
        user_img: faker.image.avatar(),
        fname: faker.person.firstName(),
        lname: faker.person.lastName(),
        rating: faker.number.float({ min: 1, max: 5, fractionDigits: 2 }),
        date: faker.date.future(),
        msg: faker.word.words({ count: 20 })
      })),
    [userProfile.completedTasks]
  )

  return (
    <div className="w-full h-full flex justify-between gap-5 flex-col lg:flex-row overflow-hidden font-gilroy">
      <div className="w-full lg:min-w-[320px] lg:w-[35%] h-full p-4 flex gap-x-3 lg:flex-col border border-border-4 rounded-3xl bg-white overflow-hidden">
        <div className="flex items-center lg:min-h-[220px] relative">
          <div className="w-full h-[140px] hidden lg:block absolute top-0 rounded-t-3xl bg-[url(/assets/images/profileBG.png)]" />
          <div className="w-full lg:absolute top-[70px] flex flex-col items-center justify-center gap-y-2">
            <Avatar
              className="size-[75px] lg:size-[85px] xl:size-[100px] border-[2px] lg:border-[3px] border-white outline-[2px] lg:outline-[5px] outline outline-border-6 rounded-full"
              src={userProfile.user_img}
            />
            <h3 className="scroll-m-20 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[26px] text-text-4 font-semibold whitespace-nowrap tracking-tight">
              {userProfile.fname} {userProfile.lname}
            </h3>
          </div>
        </div>

        <div className="lg:px-5">
          <Separator orientation={width >= 1024 ? 'horizontal' : 'vertical'} className="mt-5 mb-[30px] bg-separator-1" />
        </div>

        <ScrollArea className="w-full h-full">
          <div className="lg:px-5 grid grid-cols-1 gap-4">
            <div className="w-full p-[10px] rounded-[10px] bg-profile-details-background flex gap-x-[10px]">
              <div className="p-[13px] flex rounded-full bg-white">
                <Email />
              </div>
              <div className="w-full flex flex-col justify-center overflow-hidden gap-y-0.5">
                <span className="text-xs font-medium text-text-2">Email</span>
                <p className="w-full font-medium text-text-4 truncate">{userProfile.email}</p>
              </div>
            </div>

            <div className="w-full p-[10px] rounded-[10px] bg-profile-details-background flex gap-x-[10px]">
              <div className="p-[13px] flex rounded-full bg-white">
                <Phone />
              </div>
              <div className="w-full flex flex-col justify-center overflow-hidden gap-y-0.5">
                <span className="text-xs font-medium text-text-2">Phone Number</span>
                <p className="w-full font-medium text-text-4 truncate">{userProfile.number}</p>
              </div>
            </div>

            <div className="w-full p-[10px] rounded-[10px] bg-profile-details-background flex gap-x-[10px]">
              <div className="p-[13px] flex rounded-full bg-white">
                <Loaction />
              </div>
              <div className="w-full flex flex-col justify-center overflow-hidden gap-y-0.5">
                <span className="text-xs font-medium text-text-2">Location</span>
                <p className="w-full font-medium text-text-4 truncate">{userProfile.location}</p>
              </div>
            </div>

            <div className="w-full p-[10px] rounded-[10px] bg-profile-details-background flex gap-x-[10px]">
              <div className="p-[13px] flex rounded-full bg-white">
                <GrabProfile className="stroke-text-1" />
              </div>
              <div className="w-full flex flex-col justify-center overflow-hidden gap-y-0.5">
                <span className="text-xs font-medium text-text-2">Total Task Posted</span>
                <p className="w-full font-medium text-text-4 truncate">{userProfile.completedTasks} tasks</p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>

      <div className="w-full lg:w-[65%] h-full p-4 flex flex-col border border-border-4 rounded-3xl bg-white overflow-hidden">
        <ScrollArea className="pr-[14px]">
          {reviewData.map((review) => {
            return (
              <div key={review.id} className="p-3 rounded-[10px] mt-4 first:mt-0 flex flex-col bg-profile-details-background">
                <div className="flex justify-between">
                  <div className="flex items-center gap-x-[10px]">
                    <Avatar className="size-[50px]" src={review.user_img} />
                    <p className="text-text-1 text-lg font-medium leading-7">
                      {review.fname} {review.lname}
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-1 items-end">
                    <p className="text-sm text-text-1 font-medium">{moment(review.date).format('DD MMM, YYYY')}</p>
                    <div className="flex items-center gap-x-1">
                      <Star className="size-[22px] fill-rating-star stroke-rating-star" />
                      <p className="text-sm text-text-1 font-medium">{review.rating}</p>
                    </div>
                  </div>
                </div>
                <Separator className="my-3 bg-separator-1" />
                <p className="text-text-2">{review.msg}</p>
              </div>
            )
          })}
        </ScrollArea>
      </div>
    </div>
  )
}

export default Profile
