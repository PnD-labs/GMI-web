import { useState } from "react"
import { Switch } from "../ui/switch"



const AnimationOnOff = () => {

  const [isOn, setIsOn] = useState(true)
  const onCheckedChange = () => {
    setIsOn(!isOn)
  }


  const isCheckOn = isOn ? 'bg-indigo-500' : 'bg-transparent'
  const isCheckOnText = isOn ? 'text-white' : 'text-slate-500'
  const isCheckoff = !isOn ? 'bg-indigo-500' : 'bg-transparent'
  const isCheckOffText = !isOn ? 'text-white' : 'text-slate-500'
  return (
    <div className="w-42 h-5  items-center flex ">
      <div className="text-slate-500 text-xs font-bold pr-1 ">Show animations</div>
      <div className={`cursor-pointer ${isCheckOn} ${isCheckOnText} duration-200 px-[5px] py-[1px] bg-indigo-500 rounded-[6px] justify-center items-center gap-2.5 flex`}
        onClick={onCheckedChange}
      >
        <div className=" text-xs font-bold ">On</div>
      </div>
      <div className={`cursor-pointer ${isCheckoff} ${isCheckOffText} duration-200 px-[5px] py-[1px] bg-indigo-500 rounded-[6px] justify-center items-center gap-2.5 flex`}
        onClick={onCheckedChange}
      >
        <div className=" text-xs font-bold ">Off</div>
      </div>
    </div>
  )
}
export default AnimationOnOff
