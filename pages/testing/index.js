import Image from 'next/image';
import {useEffect,useState} from 'react';


export default function testingPage() {
  const [imageSrc, setImageSrc] = useState('http://placekitten.com/200/300');
  useEffect(() => {
    const getRandomSize = () => {
      const width = Math.floor(Math.random() * (450 - 150 + 1)) + 150; // Random width between 150 and 450
      const height = Math.floor(Math.random() * (450 - 150 + 1)) + 150; // Random height between 150 and 450
      return `http://placekitten.com/${width}/${height}`;
    };
    // Change the image source after 3 seconds (for demonstration purposes)
    const timer = setTimeout(() => {
      setImageSrc(getRandomSize()); // New image source
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []); // Empty dependency array ensures this effect runs only once
  return (
    <>
      <div className="flex-1/2 bg-red-300 border border-solid border-white">
        <div className="h-full flex flex-col items-center justify-center text-white">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="rounded-full mb-4"
          />
          <h1 className="text-4xl mb-2">John Doe</h1>
          <p className="text-lg">Web Developer</p>
          {/* Other profile details */}
        </div>
      </div>

      <div className="flex bg-red-300 border border-solid border-white overflow-hidden ">
      {/* max-h-screen */}
        <div className="w-1/5 bg-blue-800 text-right h-96 overflow-y-auto ">
          <div className="mr-5 border border-black mt-10 mb-10">Total Project</div>
          <div className="mr-5 border border-black mt-10 mb-10">Add Project</div>
          <div className="mr-5 border border-black mt-10 mb-10">Delete Project</div>
          <div className="mr-5 border border-black mt-10 mb-10">Random Image</div>
          <div className="mr-5 border border-black mt-10 mb-10">Random Video</div>
          <div className="mr-5 border border-black mt-10 mb-10">Ramdom Quote</div>
          <div className="mr-5 border border-black mt-10 mb-10">Left Sidebar</div>
          <div className="mr-5 border border-black mt-10 mb-10">Left Sidebar</div>
          <div className="mr-5 border border-black mt-10 mb-10">Left Sidebar</div>
          <div className="mr-5 border border-black mt-10 mb-10">Left Sidebar</div>
          <div className="mr-5 border border-black mt-10 mb-10">Left Sidebar</div>
        </div>

        <div className="flex-1 bg-green-800">Main Content
        <Image
        src={imageSrc} // Path to your image in the public directory
        alt="Description of your image"
        width={500} // Set the width of the image
        height={300} // Set the height of the image
      />
        </div>
      </div>
    </>
  );
}
