import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SquibblyLines } from './components/squibblyLines'
import { RoundedImgAbstract } from './components/roundedImgAbstract'
import { RoundedButton } from './components/roundedButton'
import { OutLinedButton } from './components/outlinedButton'
import { RoundedImg } from './components/roundedImg'
import { RoundedDiv } from './components/RoundedDiv'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
      <div className='text-3xl bg-red-500 rounded-full w-16 h-16'>
        </div>
      <div className='mt-10 flex justify-between'>
        <div className='flex items-center'>
        <div>
        <SquibblyLines/>
        <div className='h-1'></div>
        <SquibblyLines/>
        </div>
        </div>
        <RoundedImgAbstract/>
      </div>
      <div className='text-5xl mt-5 mb-5 text-start font-bold font-roboto'>
        Caring for Your Loved Ones with Dedication
      </div>
      <RoundedImgAbstract/>
      <div className='flex mt-14'>
      <RoundedButton/>
      <div className='w-2'/>
      <OutLinedButton/>
      </div>
      <div className='font-roboto mt-10 mb-10 text-start text-gray-700'>
      At HummbleCare, we provide compassionate and professional care services for the elderly and disabled, ensuring they receive the attention and support they deserve.
      </div>
      <RoundedImg/>
      <div className='mt-3'/>
      <RoundedDiv/>
      </div>
    </>
  )
}

export default App
