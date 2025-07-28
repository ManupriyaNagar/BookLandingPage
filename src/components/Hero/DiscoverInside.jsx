import Image from 'next/image';
import { FaTrophy,FaPencilAlt, FaUniversity, FaGraduationCap, FaTruck, FaLock, FaUndo ,FaDove,FaFlag,FaFeatherAlt } from 'react-icons/fa';
import { MdSelfImprovement } from "react-icons/md";

export default function DiscoverInside() {
  return (
    <section id="idz-about" className="py-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-start relative">
        {/* Left Content */}
        <div>
          <div className="relative mb-6">
            <div className="absolute -top-12 text-[120px] text-gray-200 -z-10">
              <FaPencilAlt />
            </div>
            <h2 className="text-[42px] font-bold text-gray-800">Discover what's Inside</h2>
          </div>
          <p className="text-gray-500 mb-8 max-w-xl">
            7 Decades. 7 Acts. A Nation's History Through One Life
          </p>

          {/* Feature List */}
          <ul className="space-y-8 text-xl">
            <li className="flex items-center">
              <div className="bg-[#f3a612] text-white p-4 rounded-full mr-4">
               <FaDove className="text-xl text-[#fffff] " />
              </div>
              <div>
                <h4 className="font-bold text-gray-800  text-xl">First Love & Loss</h4>
              </div>
            </li>
            <li className="flex items-center">
              <div className="bg-[#f3a612] text-white p-4 rounded-full mr-4">
                <FaUniversity className="text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Early Days With Youth Congress</h4>
              
              </div>
            </li>
              <li className="flex items-center">
              <div className="bg-[#f3a612] text-white p-4 rounded-full mr-4">
                <FaFlag className="text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 ">Rise as a poet and public speaker</h4>
              </div>
            </li>
              <li className="flex items-center">
              <div className="bg-[#f3a612] text-white p-3 rounded-full mr-4">
               
<MdSelfImprovement className="text-3xl" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">The Fail of congress from a loyalist's view</h4>
              </div>
            </li>
            <li className="flex items-center">
              <div className="bg-[#f3a612] text-white p-4 rounded-full mr-4">
              <FaFeatherAlt className="text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 ">Poetic tributes relationships, and  redemption</h4>
             
              </div>
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image 
            src="/images/about-img.png" 
            alt="About illustration"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>

      {/* Order Features */}
     
    </section>
  );
}
