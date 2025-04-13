import { Usericon } from '@/assets/icons/Header'

const Profile = () => {
  return (
    <div>
      <div className="p-2 lg:p-[10px] bg-background rounded-full">
        <Usericon className="min-w-8 min-h-8 lg:min-w-10 lg:min-h-10" />
      </div>
    </div>
  )
}

export default Profile
