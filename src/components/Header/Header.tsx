'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import Link from 'next/link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Header = () => {
  return (
    <>
      <div className="m-auto px-[80px] py-4 w-full z-[10] fixed">
        <div className="flex flex-wrap flex-row justify-between">
          <div className="flex-[1]">
            <div className="flex flex-wrap gap-4 items-center">
            <h1 className="font-bold text-4xl text-white">ReCom.</h1>
            <Link href="#" className="text-sm text-white"><LocationOnIcon fontSize="small" /> Jaipur</Link>
            </div>
          </div>
          <div className="flex-[1]">
            <div className="flex flex-wrap justify-end flex-row gap-6 items-center">
            <Link href="#" className="font-semibold text-[#f1f1f1]">For Buyers</Link>
            <Link href="#" className="font-semibold text-[#f1f1f1]">Sellers Area</Link>
            <Link href="#" className="font-semibold text-[#f1f1f1]">Owners</Link>
            <Link href="#" className="font-semibold text-[#f1f1f1]">About</Link>
            <Link href="#" className="font-semibold text-[#f1f1f1]">Contact</Link>
            <button className='transition bg-white rounded-[5px] shadow-lg py-1 px-4 text-sm font-semibold hover:shadow-none'>Post Property</button>
              <DropdownMenu>
  <DropdownMenuTrigger className="text-white"><AccountCircleIcon /></DropdownMenuTrigger>
  <DropdownMenuContent className="bg-white rounded-[10px] shadow-lg">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="font-semilight !rounded-[5px] hover:!bg-[#f1f1f1]">Login</DropdownMenuItem>
    <DropdownMenuItem className="font-semilight !rounded-[5px] hover:!bg-[#f1f1f1]">Register</DropdownMenuItem>
    <DropdownMenuItem className="font-semilight !rounded-[5px] hover:!bg-[#f1f1f1]">Team</DropdownMenuItem>
    <DropdownMenuItem className="font-semilight !rounded-[5px] hover:!bg-[#f1f1f1]">Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
              <button className='text-white'><MenuIcon /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header