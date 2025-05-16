import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  // 1. raw mouse coords
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  // 2. smooth spring values
  const springConfig = { damping: 20, stiffness: 300 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  // hover state
  const [hovered, setHovered] = useState(false)

  // update coords on mousemove
  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mouseX, mouseY])

  // detect hover on interactive elements
  useEffect(() => {
    const selector = 'a, button, input, [data-cursor-pointer]'
    const els = Array.from(document.querySelectorAll<HTMLElement>(selector))
    const enter = () => setHovered(true)
    const leave = () => setHovered(false)

    els.forEach(el => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })
    return () =>
      els.forEach(el => {
        el.removeEventListener('mouseenter', enter)
        el.removeEventListener('mouseleave', leave)
      })
  }, [])

  return (
    <motion.div
      className={`
        fixed pointer-events-none 
        w-4 h-4 border-2 border-gray-800 
        rounded-full mix-blend-difference 
        -translate-x-1/2 -translate-y-1/2 
        z-[9999]
      `}
      style={{
        x: cursorX,
        y: cursorY,
      }}
      animate={{
        scale: hovered ? 2 : 1,
        backgroundColor: hovered ? 'rgba(31, 41, 55, 0.2)' : 'transparent',
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    />
  )
}

