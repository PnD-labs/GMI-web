"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { ArrowDown } from "lucide-react";
import { IncomingMessage } from "http";
import formidable, { Fields, Files } from "formidable";

const NewCoin = () => {
  const { register, handleSubmit, setValue, watch } = useForm();
  const [image, setImage] = React.useState<File | null>(null);

  const txb = new TransactionBlock();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setValue("image", file);
    }
  };
  
  const onSubmit = async (data: any) => {
   
  };

  return (
    <div className="max-w-[1608px] w-full mx-auto h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-[386px] flex-col justify-start items-start gap-3.5 inline-flex">
        <div className="h-[75px] flex-col justify-start items-start gap-[7px] flex">
          <label className="text-indigo-200 text-sm font-bold leading-normal">Name</label>
          <Input
            type="text"
            {...register("name")}
            className="w-full pl-2.5 py-2.5 rounded-lg border-2 border-slate-500 text-slate-500 text-sm font-normal leading-normal"
          />
        </div>
        <div className="w-full h-[123px] flex-col justify-start items-start gap-[7px] flex">
          <label className="text-indigo-200 text-sm font-medium font-['Inter'] leading-tight">Description</label>
          <Textarea
            {...register("description")}
            className="w-full h-24 pl-2.5 py-2.5 rounded-lg border-2 border-slate-500 text-slate-500 text-sm font-medium font-['Inter'] leading-tight"
          />
        </div>
        <div className="w-full h-[66px] flex-col justify-start items-start gap-[7px] flex">
          <label className="text-indigo-200 text-sm font-medium font-['Inter'] leading-tight">Image</label>
          <div className="w-full pl-2.5 pr-[167px] py-2 rounded-lg border-2 border-slate-500 flex items-center gap-[9px]">
            <label className="w-[89px] px-2.5 py-2 bg-indigo-950 rounded-2xl text-center text-slate-500 text-sm font-medium font-['Inter'] leading-tight cursor-pointer">
              <Input
                type="file"
                onChange={handleImageChange}
                className="hidden"
              />
              이미지 넣기
            </label>
            <div className="text-slate-500 text-sm font-medium font-['Inter'] leading-tight">
              {image ? image.name : "선택된 이미지 없음"}
            </div>
          </div>
        </div>
        <div className="flex gap-1 text-indigo-200 text-sm font-medium font-['Inter'] leading-tight">
          <span>Show more options</span>
          <ArrowDown size={16} className="text-indigo-200" />
        </div>
        <button type="submit" className="w-full h-[37px] px-4 py-2 bg-indigo-500 rounded-lg flex justify-center items-center gap-2.5 cursor-pointer">
          <div className="text-white text-base font-bold">Create coin</div>
        </button>
        <div className="text-indigo-200 text-sm font-medium font-['Inter'] leading-tight">Cost to deploy: ~0.02 SUI</div>
      </form>
    </div>
  );
};

export default NewCoin;
