import useSelectStore from "@/store/useSelectStore";

import mealJson from "@/json/meal.json";
import { Badge } from "./ui/badge";
import { RadioButton } from "./RadioButton";

const which_day = new Date().getDay();


export default function MealBody() {
  
  const {days, setDays} = useSelectStore();

  return (
    <>
      <div className="flex justify-center w-full h-[10%]">
        <RadioButton days={days} setDays={setDays} />
      </div>
      <div className="flex flex-row w-full h-3/5 p-3 justify-center">
        <div className="flex w-1/6 m-3">
          {/* 사이드 바 요소 */}
        </div>
        <div className="flex flex-col w-1/3 p-4 m-3 border-gray-100 border-2 rounded-lg items-center justify-between">
          <Badge variant="indigo" className="w-1/3">
            <h1 className="flex w-full justify-center items-center text-2xl">
              메뉴 1
            </h1>
          </Badge>
          {mealJson[which_day].menu1.map((menu, idx) => (
            <div
              className="flex w-1/2 m-3 justify-center items-center"
              key={idx}
            >
              {menu}
            </div>
          ))}
        </div>
        <div className="flex flex-col w-1/3 p-4 m-3 border-gray-100 border-2 rounded-lg items-center justify-between">
          {/* TODO 메뉴가 지금까지 관촬 된 바로는 2개지만, 1개일 경우에 대비해 해당 탭에 예외사항을 고려 */}
          <Badge variant="other" className="w-1/3">
            <h1 className="flex w-full justify-center items-center text-2xl">
              메뉴 2
            </h1>
          </Badge>
          {mealJson[which_day].menu2.map((menu, idx) => (
            <div
              className="flex w-1/2 m-3 justify-center items-center"
              key={idx}
            >
              {menu}
            </div>
          ))}
        </div>
        <div className="flex w-1/6 m-3">
          {/* 사이드 바 요소 */}
        </div>
      </div>
      <footer className="flex w-full h-1/5">
        {/* 푸터 요소 */}
      </footer>
    </>
  );
}
