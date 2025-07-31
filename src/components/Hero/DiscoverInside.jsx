import {
  FaUniversity,
  FaDove,
  FaFlag,
  FaFeatherAlt,
} from 'react-icons/fa';
import { MdSelfImprovement, MdFamilyRestroom } from 'react-icons/md';
import { PiFlowerLotus } from 'react-icons/pi';

const features = [
  {
    icon: <FaDove className="w-5 h-5" />,
    title: 'First Love & Loss',
  },
  {
    icon: <FaUniversity className="w-5 h-5" />,
    title: 'Early Days With Youth Congress',
  },
  {
    icon: <FaFlag className="w-5 h-5" />,
    title: 'Rise as a poet and public speaker',
  },
  {
    icon: <MdSelfImprovement className="w-5 h-5" />,
    title: "The Fall of Congress from a loyalist's eye",
  },
  {
    icon: <FaFeatherAlt className="w-5 h-5" />,
    title: 'Poetic tributes and relationships',
  },
  {
    icon: <MdFamilyRestroom className="w-5 h-5" />,
    title: 'Family turmoil',
  },
  {
    icon: <PiFlowerLotus className="w-5 h-5" />,
    title: 'In search of enlightenment',
  },
];

export default function DiscoverInside() {
  const leftFeatures = features.slice(0, 4); // First 4 features
  const rightFeatures = features.slice(4, 7); // Last 3 features

  return (
    <section id="idz-about" className="pb-10 bg-white">
      <img src="/aboutbg.png" alt="" className="h-60 w-full -mt-30"/>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
         

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Discover what's Inside
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            <span className="font-semibold text-gray-900">7 Decades.</span> A Nation's History Through Author's Life
          </p>
        </div>

        {/* Features Grid - 4:3 ratio */}
        <div className="grid lg:grid-cols-7 gap-12 items-start">
          {/* Left Column - 4 features */}
          <div className="lg:col-span-4 space-y-6">
            {leftFeatures.map((feature, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-4 rounded-xl bg-orange-50 transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 group-hover:bg-orange-200 transition-colors duration-200">
                  {feature.icon}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-200">
                    {feature.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - 3 features */}
          <div className="lg:col-span-3 space-y-6">
            {rightFeatures.map((feature, index) => (
              <div
                key={index + 4}
                className="group flex items-start gap-4 p-4 rounded-xl bg-orange-50 transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 group-hover:bg-orange-200 transition-colors duration-200">
                  {feature.icon}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-200">
                    {feature.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
