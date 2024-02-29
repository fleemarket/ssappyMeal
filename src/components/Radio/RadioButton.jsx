/* eslint-disable react/prop-types */
import { useState } from "react";
import RadioGroup from "./RadioGroup";
import Radio from "./Radio";

export default function RadioButton({ days, setDays }) {
  const day_indicator = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];

  const today_day = day_indicator[days];
  
  console.log(today_day);

  return (
    <div>
      <RadioGroup value={String(days)} onChange={setDays}>
        <Radio value="1">월요일</Radio>
        <Radio value="2">화요일</Radio>
        <Radio value="3">수요일</Radio>
        <Radio value="4">목요일</Radio>
        <Radio value="5">금요일</Radio>
      </RadioGroup>
      {days === 0 || days === 6 ?
      <div className="flex justify-center mt-2 text-xl">주말입니다.</div>
      :
      <div className="flex justify-center mt-2 text-xl">{today_day} 식단표 제공중</div>
      }
    </div>
  )
}
