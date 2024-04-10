import React from 'react'
import FormBody from './FormBody'
import DisplayPreview from './DisplayPreview'

const Main = () => {
  return (
    <div className='w-full h-full pr-7 flex'>
        <FormBody/>
        <DisplayPreview/>
    </div>
  )
}

export default Main