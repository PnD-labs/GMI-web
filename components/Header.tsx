"use client"

import { Box, Heading } from "@radix-ui/themes"
import { Search } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { ConnectModal, useCurrentAccount, useDisconnectWallet, useSuiClient } from "@mysten/dapp-kit"
import { useEffect, useState } from "react"
import { CoinBalance } from "@mysten/sui.js/client"
import { usePathname, useRouter } from "next/navigation"
import { useToast } from "./ui/use-toast"

const Header = () => {
  const client = useSuiClient();
  const currentAccount = useCurrentAccount();
  const { mutate: disconnect } = useDisconnectWallet();
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [balance, setBalance] = useState<CoinBalance>();

  const accountAddress = currentAccount?.address
  const pathname = usePathname();
  const router = useRouter();
  const { toast } = useToast()

  useEffect(() => {

    const fetchBalance = async () => {
      if (client && accountAddress) {
        try {
          const balance = await client.getBalance({ owner: accountAddress });
          setBalance(balance);
        } catch (error) {
          console.error('Error fetching balance:', error);
        }
      }
    };

    fetchBalance();
    if (!accountAddress) {
      toast({
        title: 'Disconnected!',
        duration: 5000,
      })
    }
  }, [client, accountAddress]);


  // const isNotConnectedCSS =

  return (
    <div className="flex justify-center w-full">
      <div className="max-w-[1608px] flex  py-4  w-full border-b-2 border-indigo-900">
        <Box>
          <Heading className="cursor-pointer" onClick={()=>router.push("/")}>GMI</Heading>
        </Box>

        {
          accountAddress ? <>
            <div className="ml-[54px] mr-[68px] w-full max-w-[377px]  h-10 px-5 py-2.5 rounded-xl border border-indigo-500 justify-center items-center gap-1 inline-flex">
              <div className="w-[18px] h-[18px] rounded  bg-green-500" />
              <div className="text-white text-lg font-extrabold">created </div>
              <div className="text-white text-lg font-extrabold">Wodu</div>
              <div className="w-[18px] h-[18px] rounded  bg-green-500" />
              <div className="text-white text-lg font-extrabold">on 05/10/24</div>
            </div>
            <div className="w-full max-w-[519px] flex gap-2.5">
              <div className="relative w-full">
                <Search size={16} className="absolute left-3 top-[52%]  transform -translate-y-1/2 text-slate-500" />
                <Input
                  className="pl-8 text-sm border-2 border-indigo-900 rounded-xl text-slate-500"
                  type="text"
                  placeholder="Search the token"
                />
              </div>
              <Button className="w-[110px] h-10 px-4 py-2 rounded-xl bg-indigo-500 text-white text-base font-bold hover:bg-indigo-400">
                Search
              </Button>
            </div>
          </> :
            <>
              <div className="ml-[54px] mr-[56px] w-full max-w-[377px]  h-10 px-5 py-2.5 rounded-xl border border-indigo-500 justify-center items-center gap-1 inline-flex">
                <div className="w-[18px] h-[18px] rounded  bg-green-500" />
                <div className="text-white text-lg font-extrabold">created </div>
                <div className="text-white text-lg font-extrabold">Wodu</div>
                <div className="w-[18px] h-[18px] rounded  bg-green-500" />
                <div className="text-white text-lg font-extrabold">on 05/10/24</div>
              </div>
              <div className="w-full max-w-[519px] flex gap-2.5 ml-3">
                <div className="relative w-full">
                  <Search size={16} className="absolute left-3 top-[52%]  transform -translate-y-1/2 text-slate-500" />
                  <Input
                    className="pl-8 text-sm border-2 border-indigo-900 rounded-xl text-slate-500"
                    type="text"
                    placeholder="Search the token"
                  />
                </div>
                <Button className="w-[110px] h-10 px-4 py-2 rounded-xl bg-indigo-500 text-white text-base font-bold hover:bg-indigo-400">
                  Search
                </Button>
              </div>
            </>
        }


        <div className="flex gap-3 w-full justify-end">


          {
            currentAccount && pathname !== '/newCoin' && (
              <div
                onClick={() => router.push('/newCoin')}
                className="cursor-pointer duration-200 w-[185px] h-10 px-4 py-2 rounded-xl shadow border-2 border-indigo-500 justify-center items-center gap-2 inline-flex hover:bg-indigo-400">
                <div className="text-slate-50 text-base font-bold ">Start a new coin</div>
              </div>
            )
          }
          {
            currentAccount && (
              <div className="h-10 px-4 py-2 rounded-xl shadow border-2 border-indigo-500 justify-center items-center gap-2 inline-flex">
                <div className="text-slate-50 text-base font-bold ">{balance ? (BigInt(balance.totalBalance)/BigInt(10**9)).toString() : 0.0} SUI</div>
              </div>
            )
          }
          <div
            className="cursor-pointer relative h-10 w-28"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {
              isHovered && currentAccount ? (
                <div
                  onClick={() => {
                    disconnect()
                    setOpen(false)
                  }}
                  className="hover:bg-zinc-700 flex justify-center items-center cursor-pointer absolute inset-0 h-full w-full bg-zinc-500 rounded-xl text-white text-base font-bold transition-all duration-500">
                  <div className="text-slate-50 text-base font-bold ">Disconnect</div>
                </div>
              ) : <ConnectModal
                trigger={
                  <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <button
                      className="hover:bg-indigo-400 cursor-pointer absolute inset-0 h-full w-full bg-indigo-500 rounded-xl text-white text-base font-bold transition-all duration-300"
                    >
                      {currentAccount ? `${currentAccount.address.slice(0, 6)}` : 'Connect'}
                    </button>
                  </div>

                }
                open={open}
                onOpenChange={(isOpen) => setOpen(isOpen)}
              />
            }

          </div>


        </div>
      </div>
    </div>
  )

}

export default Header
