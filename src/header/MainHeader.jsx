/* eslint-disable react/prop-types */

export default function MainHeader({ day }) {
  
  const day_indicator_KR = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];

  const today_day = day_indicator_KR[day];



  return (
    <div className="flex flex-row border-b border-gray-400 w-full h-[10%] p-2">
      <div className="flex flex-row justify-center w-1/5">
        <img src="/logossafy.png" alt="empty image" className="h-full" />
      </div>
      <div className="w-4/5 flex items-center p-1 gap-2">
        <div className="w-2/5 flex text-xl m-3 items-center">오늘은... 
        {day === 5 ? <div className=" flex text-red-500 font-semibold m-1 items-center">금요일! 집갈때 까지 화이팅!</div> : <div className=" flex  m-1 items-center">{today_day}</div>}
        </div>
      </div>
    </div>
  );
}

