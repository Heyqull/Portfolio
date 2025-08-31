import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const SnowEffect = () => {
  const [snowflakes, setSnowflakes] = useState([])

  useEffect(() => {
    const createSnowflake = () => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: -10,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      sway: Math.random() * 2 - 1
    })

    const initialSnowflakes = Array.from({ length: 50 }, createSnowflake)
    setSnowflakes(initialSnowflakes)

    const interval = setInterval(() => {
      setSnowflakes(prev => {
        const updated = prev.map(flake => ({
          ...flake,
          y: flake.y + flake.speed,
          x: flake.x + flake.sway * 0.1
        })).filter(flake => flake.y < window.innerHeight + 10)

        // Add new snowflakes to maintain the effect
        if (updated.length < 50) {
          updated.push(createSnowflake())
        }

        return updated
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 1000,
      overflow: 'hidden'
    }}>
      {snowflakes.map(flake => (
        <motion.div
          key={flake.id}
          style={{
            position: 'absolute',
            width: flake.size,
            height: flake.size,
            background: 'white',
            borderRadius: '50%',
            opacity: flake.opacity,
            boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)'
          }}
          animate={{
            x: flake.x,
            y: flake.y,
            rotate: [0, 360]
          }}
          transition={{
            duration: flake.speed * 2,
            ease: 'linear',
            repeat: Infinity
          }}
        />
      ))}
    </div>
  )
}

export default SnowEffect 