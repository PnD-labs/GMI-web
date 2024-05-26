import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  import { useState } from "react"
  
  const PaginationCoinDetail = () => {
  
    const [pagination, setPagenation] = useState(1)
  
    const handleAddPagination = (e: any) => {
      e.preventDefault()
      setPagenation(pagination + 1)
    }
    const handleSubtractPagination = (e: any) => {
      e.preventDefault()
      if (pagination <= 1) {
        setPagenation(1)
      } else {
        setPagenation(pagination - 1)
      }
    }
    return (
      <Pagination className="justify-end">
        <PaginationContent>
          {
            pagination > 1 && (
              <PaginationItem className="
               hover:text-indigo-50
                text-indigo-200
              text-sm
              font-medium cursor-pointer">
                <PaginationPrevious onClick={handleSubtractPagination} />
              </PaginationItem>
            )
          }
          <PaginationItem className="text-gray-50 text-sm font-medium w-10 h-10 p-2.5 bg-blue-950 rounded-[8px] justify-center items-center gap-2.5 inline-flex">
            <PaginationLink>{pagination}</PaginationLink>
          </PaginationItem>
          <PaginationItem className="
             hover:text-indigo-50
            text-indigo-200
          text-sm
          font-medium cursor-pointer">
            <PaginationNext onClick={handleAddPagination} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  }
  
  export default PaginationCoinDetail
  