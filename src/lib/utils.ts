import { type ClassValue, clsx } from "clsx"
import dayjs from "dayjs"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = (value?: string | number | null, withHours?: boolean) => {
  if (!value) return "----"

  return dayjs(value.toString().split("T")[0]).format(`DD/MM/YYYY ${withHours ?? false ? "HH:mm" : ""}`)
}

/**
 * Gets the current date 
 * @returns 
 */
export const getCurrentDate = () => {
  let currentDate = dayjs().format('YYYY-MM-DD')
  return currentDate
}
