import { motion } from 'framer-motion'

const FadeDown = ({children, duration, delay }) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration,
          delay,
          ease: 'easeInOut',
        },
      }}
    >
      {children}
    </motion.div>
  )

}

export default FadeDown