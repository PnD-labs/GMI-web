'use client'
import { useState } from "react"
import { Progress, Progress2 } from "../ui/progress"


const ProgressBox = () => {

  const [bondingCurveProgress, setBondingCurveProgress] = useState(25)
  const [hillsProgress, setHillsProgress] = useState(29);
  return (
    <div className="w-[400px] flex-col gap-7 mt-[80px]">
      <div>
        <span className="mx-[33px] text-indigo-200 text-2xl font-semibold ">
          {`bonding curve progress: ${bondingCurveProgress}%`}
        </span>
        <div className="w-full pt-[28px]">
          <Progress2 value={bondingCurveProgress} color="#00E2C7" />
        </div>
      </div>
      <div className="pt-[37px]">
        <span className="mx-[33px] text-indigo-200 text-2xl font-semibold ">
          {`king of the hill progress: ${hillsProgress}%`}
        </span>
        <div className="w-full pt-[28px]">
          <Progress value={hillsProgress} color="#FAFF00" />
        </div>
        <span className="flex justify-center pt-[24px] text-white text-sm font-bold">dethrone the current king at a $28,974 mcap</span>
      </div>
    </div>
  )
}

export default ProgressBox
