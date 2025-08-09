export default function Header() {
  return (
    <div className="flex flex-col justify-center items-center gap-[20px] mt-[40px] mb-[30px]">
      <h1 className="text-blue-300 text-[30px] font-bold"> React.js Q&A</h1>
      <p className="text-blue-300 text-[20px] w-[370px] md:w-[30%] text-center">რეაქტის ყველა მნიშვნელოვანი კითხვები და პასუხები ქართულ ენაზე</p>
      <div className="h-[10px] w-[150px] rounded-[20px] bg-blue-400"></div>
      <div className="absolute top-10 right-10 w-[50px] h-[40px] md:w-32  md:h-32 bg-gradient-to-br bg-blue-300 rounded-full blur-xl animate-pulse" />
    </div>
  )
}
