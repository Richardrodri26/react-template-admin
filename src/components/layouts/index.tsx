import { cn } from "@/lib/utils"
import { Outlet } from "react-router-dom"
import { Navbar } from "../Navbar"
import { Toaster } from "../ui/toaster"


export const MainLayout = () => {

  return (
    <>
      <main className={cn('bg-white text-slate-900 antialiased light min-h-[90vh]')}>


        <div className='pt-12 bg-slate-50 antialiased'>
          <Navbar />

          <div className='container max-w-7xl mx-auto h-full pt-12'>
            <Outlet />

          </div>
        </div>

      </main>

      <Toaster />
    </>
  )
}