interface InfoCardProps {
    img: string,
    header: string,
    text: string
}

export default function HomeInfoCard({ img, header, text }: InfoCardProps) {
    return (
    <div className="flex items-center justify-center mt-[64px]">
      <div className="w-[320px] h-[220px] bg-white border-2 border-[#d9d9d9] rounded-[32px]">
        <div id="headerWrapper" className="flex m-[24px]">
          <div className="inline-block w-[64px] h-[64px] bg-[#FFD5DB] border-2 border-[#eb455f] rounded-2xl flex justify-center">
              <img src={img} alt="" className="p-[8px] m-[4px]"/>
          </div>
          <div className="inline-block font-bold text-[24px] ml-4 mt-3">{header}</div>
        </div>

        <div id="contentWrapper">
          <div className="w-[280px] h-[150px] ml-[24px]">
            <p className="text-[16px]">{text}</p>
          </div>
        </div>
      </div>
    </div>
    )
}