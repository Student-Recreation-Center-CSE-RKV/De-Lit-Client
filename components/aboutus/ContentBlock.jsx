
export default function ContentBlock({title, description}) {
  return (
    <div className="my-24">
      <h1 className="text-center lg:text-5xl text-4xl">{title}</h1>
      <p className="text-center my-10 md:w-2/3 w-5/6 mx-auto leading-7 md:text-lg">{description}</p>
    </div>
  )
}
