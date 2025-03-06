"use client";

const appUrl = process.env.NEXT_PUBLIC_URL;

export default function HelloWorld() {
  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold mb-4">Hello, World!</h1>
    
      <img 
        src={`${appUrl}/opengraph-image`}
        alt="Hello, world!" 
        className="mx-auto mb-4 w-64 h-auto rounded-md"
      />
      
    </div>
  );
}