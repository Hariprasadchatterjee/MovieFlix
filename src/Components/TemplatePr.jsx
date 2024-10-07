

export const TemplatePr = ({data}) => {

  const {thumbnail,title,id} = data
  return (
    <li>
 
      <figure className="w-[100%] bg-slate-500">

      <img src={thumbnail} alt="id" />
      <figcaption className="text-white">{title}</figcaption>
      </figure>
    </li>
  )
}
