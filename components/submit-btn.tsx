import React from 'react'
import { useFormStatus } from 'react-dom'
import { FaPaperPlane } from 'react-icons/fa'

function SubmitBtn() {
  const { pending } = useFormStatus()

  return (
    <button
      type='submit'
      className='group h-[3rem] w-[8rem] mx-auto bg-gray-900 text-white rounded-full mt-4 flex items-center justify-center gap-2 outline-none focus:outline-none hover:bg-gray-800 transition-all ease-linear hover:scale-110 disabled:scale-100 disabled:bg-opacity-65'
      disabled={pending}

    >
      {pending ? (
        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
      ) : (
        <>
          Submit
          <FaPaperPlane
            className='group-hover:translate-x-1 group-hover:-translate-y-1 transition-all ease-linear'
          />
        </>
      )}
    </button>
  )
}

export default SubmitBtn