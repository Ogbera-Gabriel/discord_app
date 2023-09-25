'use client';

import { X } from 'lucide-react'
import  Image  from 'next/image';
import { UploadDropzone } from "@/lib/uploadthing";
import '@uploadthing/react/styles.css'

interface FileUploadProps {
    onChange: (url?: string) => void;
    value: string;
    endpoint: "messageFile" | "serverImage"
  }

export const FileUpload = ({
    endpoint, 
    value, 
    onChange
}: FileUploadProps) => {
    const fileType = value?.split('.').pop()

    const handleError = (error: Error) => {
        console.error(error);
        // Optionally, you can notify the parent component about the error
        // by calling the onChange function with an error parameter.
        // Example: onChange(undefined, error);
      };

    if(value && fileType !== 'pdf') {
        return (
            <div className='relative h-20 w-20'>
              <Image
                fill
                src={value}
                alt='Upload'
                className='rounded-full'
              /> 
              <button
              onClick={() => onChange('')}
              className='bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm'
              type='button'
              >
                <X className='h-4 w-4'/>
              </button>
            </div>
        )
    }
    return (
        <UploadDropzone
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
          onChange(res?.[0].url);
          console.log("Files: ", res);
        }}
        onUploadError={(error: Error) => {
          handleError(error);
        }}
      />
    )
}