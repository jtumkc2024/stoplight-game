import { useState } from 'react'

type LightColor = 'red' | 'yellow' | 'green'

type StoplightProps = {
    disabled?: boolean
}

export default function Stoplight(props: StoplightProps) {
    const [activeLight, setActiveLight] = useState<LightColor>('red')

  const cycleLight = () => {
    setActiveLight(current => {
      switch (current) {
        case 'red': return 'green'
        case 'green': return 'yellow'
        case 'yellow': return 'red'
      }
    })
  }

  if (props.disabled) {
    return (
        <div className="m-4 flex flex-col items-center justify-center w-fit bg-gray-100">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <div className="flex flex-col gap-4 mb-4">
              <Light color="red" isActive={activeLight === 'red'} />
              <Light color="yellow" isActive={activeLight === 'yellow'} />
              <Light color="green" isActive={activeLight === 'green'} />
            </div>
          </div>      
        </div>
      )
  }
  return (
    <div className="m-4 flex flex-col items-center justify-center w-fit bg-gray-100">
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <div className="flex flex-col gap-4 mb-4">
          <Light color="red" isActive={activeLight === 'red'} />
          <Light color="yellow" isActive={activeLight === 'yellow'} />
          <Light color="green" isActive={activeLight === 'green'} />
        </div>
      </div>
      
      <button onClick={cycleLight} className="btn">
        Change Light
      </button>
    </div>
  )
}

interface LightProps {
  color: LightColor
  isActive: boolean
}

function Light({ color, isActive }: LightProps) {
  const baseClasses = "w-16 h-16 rounded-full border-4 border-gray-700"
  const activeClass = isActive ? 'opacity-100' : 'opacity-30'
  const colorClasses = {
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
    green: 'bg-green-500'
  }

  return (
    <div 
      className={`${baseClasses} ${colorClasses[color]} ${activeClass}`}
      role="img"
      aria-label={`${color} light ${isActive ? 'on' : 'off'}`}
    />
  )
}

