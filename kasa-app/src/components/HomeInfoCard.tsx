interface InfoCardProps {
  img: string;
  header: string;
  text: string;
}

export default function HomeInfoCard({ img, header, text }: InfoCardProps) {
  return (
    <div className="flex items-center justify-center mt-16">
      {/* Card container with consistent width and height */}
      <div className="w-full max-w-sm h-64 bg-white border border-gray-300 rounded-2xl p-6 flex flex-col justify-between">
        <div className="flex items-start space-x-4">
          <div className="flex items-center justify-center w-16 h-16 bg-[#FFD5DB] border-2 border-[#eb455f] rounded-2xl">
            <img src={img} alt="" className="p-2" loading="lazy" decoding="async" />
          </div>
          <h2 className="font-bold text-xl mt-2">{header}</h2>
        </div>
        <div className="mt-4">
          <p className="text-base leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
}
