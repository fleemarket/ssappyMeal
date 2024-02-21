import mealJson from "@/json/meal.json"

const which_day = new Date().getDay()

console.log(which_day)


export default function MealBody() {
  return (
    <div className="flex flex-row w-full h-full p-3">
      <div className="flex flex-col w-1/2 p-3 m-2 border-gray-200 border-2 rounded-lg items-center">
        <h1 className="flex w-full justify-center items-center text-2xl">메뉴 1</h1>
        <div className="flex w-1/2 h-1/2 justify-center items-center">
          {mealJson[which_day].menu1}
        </div>
      </div>
      <div className="flex flex-col w-1/2 p-3 m-2 border-gray-200 border-2 rounded-lg items-center">
        {/* TODO 메뉴가 지금까지 관촬 된 바로는 2개지만, 1개일 경우에 대비해 해당 탭에 예외사항을 고려 */}
        <h1 className="flex w-full justify-center text-2xl">메뉴 2</h1>
        <div className="flex w-1/2 h-1/2 items-center justify-center p-3">
          {mealJson[which_day].menu2}
        </div>
      </div>
    </div>
  );
}
