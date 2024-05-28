"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { Button } from "@/components/ui/button";

const NewCoin = () => {
  const { register, handleSubmit, setValue, watch } = useForm();
  const [image, setImage] = React.useState<File | null>(null);

  const txb = new TransactionBlock();

  // const createCoin = (name:string,description:string,image:string) => {

  //   txb.moveCall({ target: 'pacakgeid::amm_swap::mint_input_coin_init_pool',
  //   arguments: [
  //   txb.pure.string(name),
  //    txb.pure.string(description),
  //     txb.pure.string(image),
  //     ] })
  // }

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
    <div className="flex-col max-w-[1608px] w-full mx-auto h-screen flex mt-20 items-center">
      <div className="flex justify-start w-full max-w-[386px] mb-[9px]">
        <Button className="w-[112px] rounded-[8px] bg-indigo-500">Back</Button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-[386px] flex-col justify-start items-start gap-3.5 inline-flex">
        <div className="h-[75px] flex-col justify-start items-start gap-[7px] flex">
          <label className="text-indigo-200 text-sm font-bold leading-normal">Name</label>
          <Input
            type="text"
            {...register("name")}
            className="w-full pl-2.5 py-2.5 rounded-[8px] border-2 border-slate-500 text-slate-500 text-sm font-normal leading-normal"
          />
        </div>
        <div className="w-full h-[123px] flex-col justify-start items-start gap-[7px] flex">
          <label className="text-indigo-200 text-sm font-medium  leading-tight">Description</label>
          <Textarea
            {...register("description")}
            className="w-full h-24 pl-2.5 py-2.5 rounded-[8px] border-2 border-slate-500 text-slate-500 text-sm font-medium  leading-tight"
          />
        </div>
        <div className="w-full h-[66px] flex-col justify-start items-start gap-[7px] flex">
          <label className="text-indigo-200 text-sm font-medium  leading-tight">Image</label>
          <div className="w-full pl-2.5 pr-[167px] py-2 rounded-[8px] border-2 border-slate-500 flex items-center gap-[9px]">
            <label className="w-[89px] px-2.5 py-2 bg-indigo-950 rounded-2xl text-center text-slate-500 text-sm font-medium  leading-tight cursor-pointer">
              <Input
                type="file"
                onChange={handleImageChange}
                className="hidden"
              />
              INSERT
            </label>
            <div className="text-slate-500 text-sm font-medium  leading-tight">
              {image ? image.name : "No images..."}
            </div>
          </div>
        </div>
        <div className="flex gap-1 text-indigo-200 text-sm font-medium  leading-tight">
        </div>
        <Button type="submit" className="w-full h-[37px] px-4 py-2 bg-indigo-500 rounded-[8px] flex justify-center items-center gap-2.5 cursor-pointer">
          <div className="text-white text-base font-bold">Create coin</div>
        </Button>
        <div className="text-indigo-200 text-sm font-medium  leading-tight">Cost to deploy: ~0.02 SUI</div>
      </form>
    </div>
  );
};

export default NewCoin;
