/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function RadioButton({days, setDays}) {

  const day_indicator = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

  const today_day = day_indicator[days]
  console.log(today_day)

  useEffect(() => {
    console.log(days)
  },[days])


  return (
    <RadioGroup defaultValue={today_day} className="flex flex-row">
      {/* <div className="flex items-center space-x-2 hidden">
        <RadioGroupItem value="sunday" id="r1" onChange={() => onDayChange("0")} />
        <Label htmlFor="r1">일요일</Label>
      </div> */}
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="monday" id="r2" onChange={() => setDays("1")} />
        <Label htmlFor="r2">월요일</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="tuesday" id="r3" onChange={() => setDays("2")}/>
        <Label htmlFor="r3">화요일</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="wednesday" id="r4" onChange={() => setDays("3")} />
        <Label htmlFor="r4">수요일</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="thursday" id="r5" onChange={() => setDays("4")} />
        <Label htmlFor="r5">목요일</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="friday" id="r6" onChange={() => setDays("5")}/>
        <Label htmlFor="r6">금요일</Label>
      </div>
      {/* <div className="flex items-center space-x-2 hidden">
        <RadioGroupItem value="saturday" id="r7" onChange={() => onDayChange("6")} />
        <Label htmlFor="r7">토요일</Label>
      </div> */}
    </RadioGroup>
  )
}
