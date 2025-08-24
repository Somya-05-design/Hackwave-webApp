"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface InteractiveGridPatternProps {
  className?: string
  size?: number
  width?: number
  height?: number
  x?: number
  y?: number
  strokeWidth?: number
  squares?: [number, number][]
}

export function InteractiveGridPattern({
  className,
  size = 60,
  width = 800,
  height = 600,
  x = -1,
  y = -1,
  strokeWidth = 1,
  squares = [],
}: InteractiveGridPatternProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width={size}
            height={size}
            patternUnits="userSpaceOnUse"
            className="text-neutral-200 dark:text-neutral-800"
          >
            <path
              d={`M ${size} 0 L 0 0 0 ${size}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              className="opacity-50"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#grid-pattern)"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
          }}
        />
        {squares && squares.length > 0 && (
          <svg x={x} y={y} className="overflow-visible">
            {squares.map(([x, y], index) => (
              <motion.rect
                key={`${x}-${y}-${index}`}
                fill="currentColor"
                strokeWidth="0"
                className="fill-neutral-800/90 dark:fill-neutral-100/90"
                width={size - 1}
                height={size - 1}
                x={x * size + 1}
                y={y * size + 1}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                  delay: index * 0.05,
                }}
              />
            ))}
          </svg>
        )}
      </svg>
    </div>
  )
}
