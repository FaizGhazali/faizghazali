import Image from 'next/image';


export default function testingPage() {
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
        src="http://placekitten.com/200/300" // Path to your image in the public directory
        alt="Description of your image"
        width={500} // Set the width of the image
        height={300} // Set the height of the image
      />
        </div>
      </div>
    </>
  );
}
