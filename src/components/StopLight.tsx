import { useState } from 'react'

const lights = {
  Red: 0,
  Yellow: 1,
  Green: 2
}

type StoplightProps = {
    disabled?: boolean,
    setScore?: React.Dispatch<React.SetStateAction<number>>
}

export default function Stoplight(props: StoplightProps) {
  const { disabled, setScore } = props;
  const [activeLight, setActiveLight] = useState<number>(lights.Red);

  const cycleLight = () => {
    setActiveLight(Math.floor(Math.random() * 100 % 3));
    if (setScore) setScore((prev) => prev + 1);
  }

  if (disabled) {
    return (
        <div className="m-4 flex flex-col items-center justify-center w-fit bg-gray-100">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <div className="flex flex-col gap-4 mb-4">
              <Light color={lights.Red} isActive={activeLight === lights.Red} />
              <Light color={lights.Yellow} isActive={activeLight === lights.Yellow} />
              <Light color={lights.Green} isActive={activeLight === lights.Green} />
            </div>
          </div>      
        </div>
      )
  }
  return (
    <div>
      <div className="mx-auto flex flex-col items-center justify-center w-fit bg-gray-100">
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <div className="flex flex-col gap-4 mb-4">
            <Light color={lights.Red} isActive={activeLight === lights.Red} onSuccess={cycleLight}/>
            <Light color={lights.Yellow} isActive={activeLight === lights.Yellow} onSuccess={cycleLight}/>
            <Light color={lights.Green} isActive={activeLight === lights.Green} onSuccess={cycleLight}/>
          </div>
        </div>
      </div>

      <div className='flex space-x-5 mt-10'>
        <button className='outline outline-1 outline-gray-100 hover:bg-gray-400 px-3 py-2 rounded' onClick={() => {
          if (activeLight === lights.Red) cycleLight();
        }}>
          Stop!
        </button>
        <button className='outline outline-1 outline-gray-100 hover:bg-gray-400 px-3 py-2 rounded' onClick={() => {
          if (activeLight === lights.Yellow) cycleLight();
        }}>
          Slow Down!
        </button>
        <button className='outline outline-1 outline-gray-100 hover:bg-gray-400 px-3 py-2 rounded' onClick={() => {
          if (activeLight === lights.Green) cycleLight();
        }}>
          Go!
        </button>
      </div>
    </div>
  )
}

interface LightProps {
  color: number
  isActive: boolean,
  onSuccess?: () => void
}

function Light({ color, isActive, onSuccess }: LightProps) {
  const baseClasses = "w-16 h-16 rounded-full border-4 border-gray-700"
  const activeClass = isActive ? 'opacity-100' : 'opacity-30'
  const colorClasses = ['bg-red-500', 'bg-yellow-500', 'bg-green-500']

  return (
    <div 
      className={`${baseClasses} ${colorClasses[color]} ${activeClass}`}
      role="img"
      aria-label={`${color} light ${isActive ? 'on' : 'off'}`}
      onClick={() => {
        if (isActive && onSuccess) onSuccess();
      }}
    />
  )
}

