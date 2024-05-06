import Image from "next/image"

const Profile = ({name,email}:{name:string,email:string}) => {
    return (
        <div className="flex items-center gap-2 p-2">
            <div className="w-20 h-20 relative">
                <Image
                    src="/profile.jpg"
                    fill
                    alt="profile"
                    className="rounded-xl object-cover"
                />
            </div>
            <div>
                <p className="font-bold">{name}</p>
                <p className="text-gray text-sm">{email}</p>
            </div>
        </div>)
}

export default Profile