export default function MainFooter() {
  return (
    <div className="flex flex-row w-full h-1/3">
      <div className="flex w-1/4 h-full"></div>
      <div className="flex flex-col w-1/2 h-full">
        <div className="flex flex-row w-full h-1/2 justify-center gap-3">
          <a href="https://github.com/fleemarket/ssappyMeal" className="font-semibold hover:text-gray-500">깃허브 repository</a>
          <div>|</div>
          <a href="http://open.kakao.com/me/Seagulls" className="font-semibold hover:text-gray-500">카카오톡 오픈채팅</a>
        </div>
        <div className="flex w-full h-1/2">
        </div>
      </div>
      <div className="flex w-1/4 h-full"></div>
    </div>
  );
}
