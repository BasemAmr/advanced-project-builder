

interface ColorCircleProps {
    color: string,
    onClick?: () => void
}

const ColorCircle = ({color, onClick} : ColorCircleProps) => {
  return (
    <div className="w-6 h-6 rounded-full border border-gray-300 box-border cursor-pointer" onClick={onClick} style={{backgroundColor: color}}></div>
  )
}

export default ColorCircle