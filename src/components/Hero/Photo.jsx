import Image from "next/image";

export default function TwoColFlexGallery({
  photos = [
        { src: "/img3.jpeg", caption: "" },
         { src: "/img2.jpeg", caption: "" },
    { src: "/img1.jpeg", caption: "The author pays floral tributes at Hazrat Nizamuddin Aulia Mazar alongside the late Rajesh Khanna, who was contesting the June 1992 by-election from New Delhi, and Salman Khurshid, then Union Minister for Foreign Affairs, before commencing the campaign." },
   
    { src: "/img4.jpeg", caption: "Hon’ble President of India Pranab Mukherjee releasing the French translations of author Mahesh Manzar’s poetry A La Recherche De Moi-Même; In Search of The Self (English) at the Rashtrapati Bhavan in the presence of his mentor Mani Shankar Aiyar & the author's wife, on 29 March 2017." },

  ],
}) {
  return (
    <section className="py-12 px-4 md:px-20 bg-white">
      <div className="flex flex-wrap -mx-2">
        {photos.map((item, idx) => (
          <div key={idx} className="w-full sm:w-1/2 px-2 mb-8">
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-md">
              <Image
                src={item.src}
                alt={`Photo ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
            <p className="mt-3 text-black text-sm leading-none">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
