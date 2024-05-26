import formidable, { Fields, File, Files } from "formidable";
import { Input } from "./ui/input";
import  fs  from 'fs';
import pinFileToIPFS from "@pinata/sdk/types/commands/pinning/pinFileToIPFS";
import { IncomingMessage } from "http";



export const UploadImg = (image:File, handleImageChange:any) => {

    const saveFile = async (file: File) => {
        try {
          const stream = fs.createReadStream(file.filepath) as any;
          const options = {
            pinataMetadata: {
              name: file.originalFilename,
            },
          };
          const response = await pinFileToIPFS(stream, options);
          fs.unlinkSync(file.filepath);
      
          return response;
        } catch (error) {
          throw error;
        }
      };

      const parseForm = (req: IncomingMessage): Promise<{ fields: Fields; files: Files }> => {
        const form = new formidable.IncomingForm();
        return new Promise((resolve, reject) => {
          form.parse(req, (err, fields, files) => {
            if (err) {
              reject(err);
            } else {
              resolve({ fields, files });
            }
          });
        });
      };
      
      const upLoadImg = async (request:any) => {
        try {
          const { fields, files } = await parseForm(request as unknown as IncomingMessage);
          const fileArray = files.file as File[];
      
          if (!fileArray || fileArray.length === 0) {
            throw new Error('File not provided');
          }
      
          const file = fileArray[0];
          const response = await saveFile(file);
          const { IpfsHash } = response;
          return IpfsHash;
      
        } catch (e) {
          console.error(e);
        }
      }
   
    return(
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
            {image ? image.filepath : "선택된 이미지 없음"}
          </div>
        </div>
      </div>
    )
}