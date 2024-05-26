import pinataSDK from '@pinata/sdk';

const pinata = new pinataSDK({ pinataJWTKey: process.env.PINATA_JWT });

export const pinFileToIPFS = async (stream, options)=> {
  try {
    const response = await pinata.pinFileToIPFS(stream, options);
    return response;
  } catch (error) {
    throw error;
  }
};

export const listPinnedFiles = async () => {
  try {
    const response = await pinata.pinList(
      {
        pinataJWTKey: process.env.PINATA_JWT,
      },
      {
        pageLimit: 1,
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};
