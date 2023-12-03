import React from 'react'
import { Button } from './ui/button'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { useToast } from './ui/use-toast'


export const Navbar = () => {
  return (
    <div className="fixed top-0 inset-x-0 h-fit z-[10] py-2 bg-white/75 backdrop-blur-md">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">

        <p className='md:min-w-[200px] text-center font-extrabold text-xl'>Template</p>

        {/* <ul className='hidden lg:flex gap-5 '>
          <li>Discover</li>
          <li>Destinations</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul> */}

        <MobileNavbar />

        {/* <div className='hidden lg:flex gap-5 md:min-w-[200px]'>
          <Button variant='outline'>Sign in</Button>
          <Button>Register</Button>
        </div> */}

      </div>
    </div>
  )
}

const MobileNavbar = () => {
  const { toast } = useToast()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className='font-bold'>UVVAI</SheetTitle>
        </SheetHeader>

        <SheetDescription>
          Menu de opciones
        </SheetDescription>

        <ul className='mt-5'>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
          <li>Option 4</li>
        </ul>



        <SheetFooter>
          <Button variant='outline'>Sign in</Button>
          <Button onClick={() => {
            toast({
              title: "Scheduled: Catch up",
              description: "Friday, February 10, 2023 at 5:57 PM",
            })
          }}>Register</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>

  )
}
