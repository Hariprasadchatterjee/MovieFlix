import { useTimeSaver } from "../Context/ApiDataProvider"
import { ShowStories } from "../ui/ShowStories";

export const Stories = () => {
  const {hits,isLoading} =useTimeSaver();
  if (isLoading) {
    return <h2 className="text-center">....Loading</h2>
  }
  return (
   <section>
    <ul className="flex flex-col items-center justify-center gap-5 bg-emerald-200">
      {hits.map( (curStorie)=> <ShowStories data={curStorie} key={curStorie.objectID}/> )}
    </ul>
   </section>
  )
}
