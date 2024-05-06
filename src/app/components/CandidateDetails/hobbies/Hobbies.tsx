
const Hobbies = ({hobbies}:{hobbies:string[]}) => {
  return (
    <div className="py-8 px-4">
    <h4 className="text-xl font-semibold capitalize">hobbies</h4>
    {hobbies.map((hobby) => (<span key={hobby} className="text-gray text-sm pr-2">{hobby}</span>))}
  </div>  )
}

export default Hobbies