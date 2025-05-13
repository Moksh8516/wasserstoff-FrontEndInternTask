import React from 'react'

function FileUpload() {
  return (
  <div className="mb-4">
  <label htmlFor="id-upload" className="block text-base text-white">Upload ID card</label>
  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-600 backdrop-blur-md border-dashed rounded-md">
    <div className="space-y-1 text-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className='text-orange-500 text-center w-8 h-8 mx-auto mb-3'
    >
      <path
        d="M352 115h90c3.3 0 6-2.7 6-6 0-8.2-3.7-16-10-21.3l-77.1-64.2c-4.9-4.1-14.2-7.4-20.6-7.4-4.1 0-7.4 3.3-7.4 7.4V96c.1 10.5 8.6 19 19.1 19z"
        fill="currentColor"
      ></path>
      <path
        d="M307 96V16H176c-17.6 0-32 14.4-32 32v336c0 17.6 14.4 32 32 32h240c17.6 0 32-14.4 32-32V141h-96c-24.8 0-45-20.2-45-45z"
        fill="currentColor"
      ></path>
      <path
        d="M116 412V80H96c-17.6 0-32 14.4-32 32v352c0 17.6 14.4 32 32 32h256c17.6 0 32-14.4 32-32v-20H148c-17.6 0-32-14.4-32-32z"
        fill="currentColor"
      ></path>
    </svg>
      <div className="flex text-sm text-gray-400">
        <label htmlFor="file-upload" className="relative cursor-pointer bg-white/20 rounded-md font-medium text-gray-100 hover:text-gray-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
          <span>Drag & drop or click to upload</span>
        </label>
        <p className="pl-1">PDF, JPG, PNG up to 1MB</p>
      </div>
      <input id="file-upload" type="file" className="sr-only"/>
      <p className="text-xs text-gray-400">JPG, PNG, GIF up to 10MB</p>
    </div>
  </div>
</div> 
  )
}

export default FileUpload