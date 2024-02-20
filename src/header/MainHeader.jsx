import { useState, useEffect } from 'react';


export default function MainHeader() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Month needs to be 0-padded to match the format yyyy-mm-dd
    const day = today.getDate().toString().padStart(2, '0'); // Day also needs to be 0-padded
    const formattedDate = `${year}-${month}-${day}`;
    setCurrentDate(formattedDate);
  }, []);
  // FIXME 해당 요소 수정...

  return (
    <div className="flex flex-row border-b border-gray-200 w-full h-[10%] p-2">
      <div className='flex flex-row justify-center w-1/5'>
        <img src="/logossafy.png" alt="empty image" className='h-full' />
      </div>
      <div className="w-1/5 flex flex-row items-center p-1 gap-2">
        <div>날짜</div>
        <input className="w-3/4 text-center" type="date" id="date" defaultValue={currentDate} />
      </div>
    </div>
  );
}
