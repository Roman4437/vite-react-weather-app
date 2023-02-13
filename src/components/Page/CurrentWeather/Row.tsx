interface Props {
  path: string
  string: String
}

function Row({ path, string }: Props) {
  return (
    <div className="flex items-center ml-1">
      <img className="w-5 h-5" src={path} alt={string.split(":")[0]} />
      <span className="text-xs">{string}</span>
    </div>
  )
}

export default Row