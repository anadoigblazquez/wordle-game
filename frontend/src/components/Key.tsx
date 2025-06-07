
type Letter = {
  keyLetter: string
}

const Key = ({ keyLetter }: Letter) => {
  return (
    <div className="
      font-bold
      text-xl 
      rounded-md 
      bg-gray-300
      min-w-[40px]
      px-2 
      h-[55px]
      flex
      justify-center
      flex-wrap
      content-center
      cursor-pointer">
        {keyLetter}
      </div>
  )
}

export default Key