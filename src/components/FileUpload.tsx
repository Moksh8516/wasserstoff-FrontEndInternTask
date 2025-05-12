import React from 'react'

function FileUpload() {
  return (
  <div className="mb-4">
  <label htmlFor="id-upload" className="block text-sm font-medium text-white">Upload ID card</label>
  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-600 backdrop-blur-md border-dashed rounded-md">
    <div className="space-y-1 text-center">
      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-8m32-8V12a4 4 0 014-4h8a4 4 0 014 4v8m-32 8h8M8 28a4 4 0 014-4h8a4 4 0 014 4v8M8 28h8v8H8z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      <div className="flex text-sm text-gray-400">
        <label htmlFor="file-upload" className="relative cursor-pointer bg-white/20 rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
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