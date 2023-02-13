interface Props {
  string: String
  measure: String
}

function Row({ string, measure }: Props) {
  return (
    <div className="flex flex-col justify-center">
      <span className="text-white/90 mx-auto">{string}</span>
      <span className="text-xl mx-auto">{measure}</span>
    </div>
  )
}

export default Row