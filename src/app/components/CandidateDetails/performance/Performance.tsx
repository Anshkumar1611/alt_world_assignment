import Score from "../score/Score"

const Performance = ({behavioural,communication,situation_handling}:{behavioural:number,communication:number,situation_handling:number}) => {
    return (
        <>
            <div className="flex flex-col gap-4 justify-center text-sm font-semibold text-gray">
                <p>Behavioural</p>
                <p>Communcation</p>
                <p>Situation handling</p>
            </div>
            <section className="flex flex-col gap-4 grow">
                <div className="flex gap-4 justify-between  items-center">
                    <Score percent={(behavioural / 10) * 100} />
                    <p className="basis-1/5">{behavioural}/10</p>
                </div>
                <div className="flex gap-4 justify-between  items-center">
                    <Score percent={(communication / 10) * 100} />
                    <p className="basis-1/5">{communication}/10</p>
                </div>
                <div className="flex gap-4 justify-between items-center">
                    <Score percent={(situation_handling / 10) * 100} />
                    <p className="basis-1/5">{situation_handling}/10</p>
                </div>
            </section>
        </>
    )
}

export default Performance