interface InfoCardProps {
  img: string;
  header: string;
  text: string;
}

export default function HomeInfoCard({ img, header, text }: InfoCardProps) {
  return (
    <div className="mt-10 flex items-center justify-center md:mt-14">
      <div className="kasa-surface kasa-floating-card h-64 w-full max-w-sm p-6 flex flex-col justify-between">
        <div className="flex items-start space-x-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-[#eb455f] bg-gradient-to-br from-[#FFD5DB] to-[#fff0dd] shadow-sm">
            <img src={img} alt="" className="p-2" loading="lazy" decoding="async" />
          </div>
          <h2 className="mt-2 text-xl font-black text-blue">{header}</h2>
        </div>
        <div className="mt-4">
          <p className="text-base leading-relaxed text-slate-700">{text}</p>
        </div>
      </div>
    </div>
  );
}
