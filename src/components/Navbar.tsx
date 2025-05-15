import React from "react";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import { X, Menu, Droplet, Sun, Moon, ChevronDown, LogIn } from "lucide-react";


export default function Navbar() {
  const [scroll, setScroll] = useState(false)

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scroll ? "bg-black/70 backdrop-blur-md-py-2" : "bg-black/30 blackdrop-blur-sm py-4"}`}
    >
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-300 ${scroll ? "h-14" : "h-20"}`}>
          <a href="/" className="flex items-center gap-2 group">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, -10, 0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 4 }}
              className={`flex items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-700 shadow-lg group-hover:from-red-600 group-hover:to-red-800 transition-all duration-300 ${scroll ? "h-8 w-8" : "h-10 w-10"
                }`}
            >
              <Droplet
                className={`text-white drop-shadow-md transition-all duration-300 ${scroll ? "h-5 w-5" : "h-6 w-6"}`}
              />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className={`font-bold text-white drop-shadow-md transition-all duration-300 ${scroll ? "text-xl" : "text-2xl"
                }`}
            >
              LifeDrop
            </motion.span>
          </a>
        </div>
      </div>
    </header>
  )
}
