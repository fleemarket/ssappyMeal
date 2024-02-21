import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react"

export function RadioButton({day}) {

  console.log(day)
  const day_indicator = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

  const today_day = day_indicator[day]
  console.log(today_day)

  return (
    <RadioGroup defaultValue={today_day} className="flex flex-row">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="sunday" id="r1" />
        <Label htmlFor="r1">일요일</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="monday" id="r2" />
        <Label htmlFor="r2">월요일</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="tuesday" id="r3" />
        <Label htmlFor="r3">화요일</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="wednesday" id="r4" />
        <Label htmlFor="r4">수요일</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="thursday" id="r5" />
        <Label htmlFor="r5">목요일</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="friday" id="r6" />
        <Label htmlFor="r6">금요일</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="saturday" id="r7" />
        <Label htmlFor="r7">토요일</Label>
      </div>
    </RadioGroup>
  )
}
