import { useTimeSaver } from "../Context/ApiDataProvider"

export const ShowStories = ({data}) => {
  const {handleRemove} =useTimeSaver();

  // eslint-disable-next-line react/prop-types
  const {title,author,num_comments,objectID} =data
  return (
    <li className="bg-emerald-500 w-[30%] mx-auto py-4 px-8 rounded-md shadow-2xl">
      <h2 className="text-2xl">{title}</h2> 
        <p> <span>By {author} | {num_comments} comments</span> </p>
      <div className="flex items-center justify-between text">
        <p className="text-lg font-bold text-yellow-400 cursor-pointer">Read More</p>
        <p onClick={()=>handleRemove(objectID)} className="text-lg font-bold text-red-600 cursor-pointer">Remove</p>
      </div>
    </li>
  )
}
