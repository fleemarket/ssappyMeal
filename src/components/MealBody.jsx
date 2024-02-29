import mealJson from "@/json/meal.json";
import { Badge } from "./ui/badge";
import MainFooter from "@/footer/MainFooter";
import RadioButton from "./Radio/RadioButton";
import { useState } from "react";

const which_day = new Date().getDay();

export default function MealBody() {

  const [dayValue, setDayValue] = useState(which_day)


  return (
    <>
      <div className="flex flex-col w-full h-full">
        <div className="flex justify-center items-center h-1/6 w-full ">
          <RadioButton days={dayValue} setDays={setDayValue} />
        </div>
        <div className="flex flex-row w-full h-2/3 p-3 justify-center box-border">
          <div className="flex w-1/6 h-full m-3">{/* 사이드 바 요소 */}</div>
          <div className="flex flex-col w-1/3 h-full p-3 m-2 border-gray-100 border-2 rounded-lg items-center justify-between">
            <Badge variant="indigo" className="w-1/3">
              <h1 className="flex w-full justify-center items-center text-2xl">
                메뉴 1
              </h1>
            </Badge>
            {mealJson[dayValue].menu1.map((menu, idx) => (
              <div
                className="flex w-1/2 m-2 justify-center items-center"
                key={idx}
              >
                {menu}
              </div>
            ))}
            <div className="flex w-1/2 m-2 justify-center items-center">
              식수 인원 : {mealJson[dayValue].capa1}
            </div>
          </div>
          <div className="flex flex-col w-1/3 h-full p-3 m-2 border-gray-100 border-2 rounded-lg items-center justify-between">
            {/* TODO 메뉴가 지금까지 관촬 된 바로는 2개지만, 1개일 경우에 대비해 해당 탭에 예외사항을 고려 */}
            <Badge variant="other" className="w-1/3">
              <h1 className="flex w-full justify-center items-center text-2xl">
                메뉴 2
              </h1>
            </Badge>
            {mealJson[dayValue].menu2.map((menu, idx) => (
              <div
                className="flex w-1/2 m-2 justify-center items-center"
                key={idx}
              >
                {menu}
              </div>
            ))}
            <div className="flex w-1/2 m-2 justify-center items-center">
              식수 인원 : {mealJson[dayValue].capa2}
            </div>
          </div>
          <div className="flex w-1/6 m-2">{/* 사이드 바 요소 */}</div>
        </div>
        <div className="flex w-full h-1/6 mt-3 items-center bg-gray-200">
          <MainFooter />
        </div>
      </div>
    </>
  );
}
