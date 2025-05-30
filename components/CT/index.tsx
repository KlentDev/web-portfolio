import { Box, Text } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import styles from './styles.module.css' // Adjust if needed

const Creative = () => {
  const MotionBox = motion(Box)

  useEffect(() => {
    // Preload logic removed since no image used anymore
  }, [])

  return (
    <AnimatePresence>
      <MotionBox
        id="klAvatar"
        boxSize={{ base: 80, lg: 'sm' }}
        padding={{ base: 8 }}
        marginBottom={{ base: 10, md: 0, lg: 0 }}
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {/* Glow wrapper for text */}
        <Box className={styles.glowWrapper}>
          <Text className={styles.verticalText}>CREATIVE DEVELOPER</Text>
        </Box>
      </MotionBox>
    </AnimatePresence>
  )
}

export default Creative
