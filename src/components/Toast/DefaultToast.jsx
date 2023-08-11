'use client';

import { Toast } from 'flowbite-react';

export default function DefaultToast() {
  return (
    <Toast className='fixed bottom-5 right-5 z-10' role="alert">
      <div className="ml-3 text-sm font-normal">
        Para financiar el sitio utilizamos publicidad, disculpe las molestias!
      </div>
      <Toast.Toggle base="color-black" className='bg-color-main-dark '/>
    </Toast>
  )
}

