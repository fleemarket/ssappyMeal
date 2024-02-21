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
      <div className="w-4/5 flex flex-row items-center p-1 gap-2">
        <div className="w-2/5 flex text-xl m-3 items-center">오늘은... {today_day}
        {day > 4 ? <div className=" flex text-red-500 font-semibold m-3 items-center"> 금요일! 남은 하루 화이팅!</div> : null}
        </div>
        {/* <RadioButton day={selectedDay} /> */}
        {/* TODO 라디오버튼 선택에서 주차별 메뉴 선택해서 열리게끔. 라디오 버튼 컴포에서 상태관리가 되게끔? */}
      </div>
    </div>
  );
}

