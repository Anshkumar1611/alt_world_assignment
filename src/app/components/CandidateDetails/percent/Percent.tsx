
const Percent = ({percent}:{percent :number}) => {
    return (
        <div className={`font-bold ${percent >= 50 ? "text-green" : percent >= 30 ? "text-golden" : "text-orange"} text-4xl`}>
            {percent} %
        </div>)
}

export default Percent