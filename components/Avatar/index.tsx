import {
  Box,
  Image as ChkImage,
  SkeletonCircle,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { avatarAnimation } from 'config/animations'
import styles from './styles.module.css' // adjust path if needed

const AvatarImages = {
  DarkMode: '/profile.png',
  LightMode: './profile.png',
}

declare global {
  interface Window {
    preloadedPictures?: HTMLImageElement[]
  }
}

const Avatar = () => {
  const MotionBox = motion(Box)

  const imgAvatar = useColorModeValue(
    AvatarImages.LightMode,
    AvatarImages.DarkMode
  )

  useEffect(() => {
    const images = [AvatarImages.DarkMode, AvatarImages.LightMode]
    const preloadedImages = images.map((imageSrc) => {
      const img = new Image()
      img.src = imageSrc
      return img
    })
    window.preloadedPictures = preloadedImages
  }, [])

  return (
    <AnimatePresence>
      <MotionBox
        id="klAvatar"
        boxSize={{ base: 64, lg: 'sm' }}
        padding={{ base: 8 }}
        marginBottom={{ base: 0, md: 0, lg: 0 }}
        initial="initial"
        animate="animate"
        variants={avatarAnimation}
        exit={{ opacity: 0 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {/* Ring Wrapper with Pulsing Glow */}
        <Box className={styles.glowWrapper}>
          <ChkImage
            src={imgAvatar}
            alt="KlentMicko,CT"
            htmlWidth="200"
            htmlHeight="200"
            borderRadius="full"
            fallback={<SkeletonCircle height="100%" width="100%" />}
          />
        </Box>
      </MotionBox>
    </AnimatePresence>
  )
}

export default Avatar
