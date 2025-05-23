import { memo } from 'react'
import {
  Box,
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
  useColorModeValue,
  keyframes,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'

const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)

  // Use hook inside the component
  const glowColor = useColorModeValue(
    'rgba(56, 178, 172, 0.6)',
    'rgba(94, 234, 212, 0.6)'
  )

  const pulseGlow = keyframes`
    0% {
      box-shadow: 0 0 6px ${glowColor}, 0 0 12px ${glowColor}, 0 0 18px ${glowColor};
    }
    50% {
      box-shadow: 0 0 14px ${glowColor}, 0 0 28px ${glowColor}, 0 0 42px ${glowColor};
    }
    100% {
      box-shadow: 0 0 6px ${glowColor}, 0 0 12px ${glowColor}, 0 0 18px ${glowColor};
    }
  `

  const titles = [
    'Frontend Development',
    'UI/UX Design',
    'Graphic Design',
    'Mobile App Development',
  ]

  const descriptions = [
    'A sleek e-commerce experience built with React and Next.js. I handled the entire frontend implementation.',
    'A project management platform concept, designed and prototyped from scratch — from UX flows to high-fidelity UI.',
    'Developed a clean visual identity and designs for a local brand, from print to digital.',
    'Designed and developed the UI for a mobile app with strong focus on usability and minimalism.',
  ]

  const imagePaths = [
    '/works/2.png',
    '/works/1.png',
    '/works/4.png',
    '/works/3.png',
  ]

  return (
    <Stack
      width={{ base: '100%', lg: '80%' }}
      spacing={{ base: 8, lg: 12 }}
      px={{ base: 4, md: 8 }}
    >
      <Heading
        size="2xl"
        fontWeight="black"
        letterSpacing="wide"
        textTransform="uppercase"
      >
        My Sample Projects
      </Heading>

      {/* Glowing Line */}
      <Box
        h="3px"
        w="520px"
        mt={3}
        bg="teal.300"
        borderRadius="full"
        animation={`${pulseGlow} 2s ease-in-out infinite`}
      />

      <Text
        fontSize={{ base: 'sm', md: 'md' }}
        color="gray.500"
        lineHeight="tall"
        maxW="4xl"
      >
        Explore a mix of professional and personal works—from UI/UX concepts to
        deployed products. Each reflects my passion for building smart,
        user-first experiences.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 6, md: 8 }}
        px={{ base: 1, md: 0 }}
        variants={galleryStagger}
      >
        {[...Array(4)].map((_, i) => (
          <MotionGridItem key={i} colSpan={6} variants={fadeInUpSlower}>
            <FeaturedCard
              idx={i + 1}
              title={titles[i]}
              src={imagePaths[i]}
              description={descriptions[i]}
              height={{ base: '160px', md: '240px', '2xl': '300px' }}
              objectPosition="center"
              isMobile={isMobile}
            />
          </MotionGridItem>
        ))}
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
