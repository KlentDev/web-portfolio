import {
  Stack,
  Heading,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
  Container,
  Link,
  Box,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import styles from './styles.module.css'
import {
  fadeInUp,
  letterSpace,
  simpleOpacity,
  stagger,
  scaleUp,
} from 'config/animations'
import { SocialMedias } from 'config/sidebar'
import Avatar from 'components/Avatar'

const Sidebar = () => {
  const { colorMode } = useColorMode()
  const display = useBreakpointValue({ base: 'none', lg: 'block' })
  const surNameSize = useBreakpointValue({ base: '3xl', md: '4xl' })
  const MotionHeading = motion(Heading)
  const MotionText = motion(Text)
  const MotionStack = motion(Stack)
  const MotionButton = motion(Button)
  const MotionBox = motion(Box)

  // Dynamic color values based on mode
  const mainTextColor = useColorModeValue('gray.400', 'gray.800')
  const subTextColor = useColorModeValue('gray.500', 'gray.400')
  const highlightColor = useColorModeValue('blue.600', 'blue.300')
  const glowColor = useColorModeValue('#3182ce', '#97DFFC')

  return (
    <MotionBox
      initial="initial"
      animate="animate"
      position={{ xl: 'fixed' }}
      maxWidth={{ xl: '34%' }}
      top={{ lg: 0 }}
      px={{ base: 4, lg: 12 }}
      py={{ base: 6, lg: 12 }}
    >
      <motion.div
        id="sidebarCircle"
        className={`${styles.sidebar} ${
          colorMode === 'light' ? styles.light : styles.dark
        }`}
        variants={scaleUp}
        style={{ display: display }}
        animate={colorMode === 'dark' ? 'animate' : 'lightMode'}
      />

      <Container
        padding={0}
        margin={0}
        height={{ xl: '85vh' }}
        display={{ xl: 'flex' }}
        alignItems={{ xl: 'center' }}
      >
        <MotionStack spacing={{ base: 4, lg: 6 }} w="100%" variants={stagger}>
          <MotionText fontSize="sm" color={subTextColor} variants={fadeInUp} />
          <Avatar />

          <MotionHeading
            as="h1"
            size="2xl"
            fontWeight="extrabold"
            textTransform="uppercase"
            color={highlightColor}
            variants={fadeInUp}
          >
            Klent Micko
          </MotionHeading>

          <MotionBox
            variants={letterSpace}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            textAlign="left"
          >
            <MotionHeading
              as="h2"
              size={surNameSize}
              textTransform="uppercase"
              fontWeight="black"
              color={mainTextColor}
              className={styles.outlinedText}
            >
              Bering.
            </MotionHeading>
          </MotionBox>

          <MotionBox>
            <Box className={styles.glowLine} />
          </MotionBox>

          <MotionText
            fontSize="sm"
            color={subTextColor}
            className={styles.marginTopForce}
            variants={fadeInUp}
          >
            💻 Developer · 🎨 Artist · 🧠 Designer
          </MotionText>

          <MotionHeading
            as="h3"
            fontSize="md"
            fontWeight="medium"
            color={highlightColor}
            className={styles.marginTopSmall}
            variants={fadeInUp}
          >
            🧪 Creative Technologist
          </MotionHeading>

          {/* Updated Button Section */}
          <MotionBox
            display="flex"
            gap={4}
            flexWrap="wrap"
            variants={simpleOpacity}
          >
            <MotionButton
              size="lg"
              variant="outline"
              borderRadius="md"
              borderWidth="1px"
              fontWeight="semibold"
              fontSize="sm"
              width="140px"
              colorScheme="blue"
              href="mailto:klentmickobering@gmail.com"
              target="_blank"
              as="a"
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 12px ${glowColor}, 0 0 24px ${glowColor}`,
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Get in touch
            </MotionButton>

            <MotionButton
              size="lg"
              variant="solid"
              borderRadius="md"
              fontWeight="semibold"
              fontSize="sm"
              width="140px"
              colorScheme="gray"
              bg={useColorModeValue('gray.800', 'blue.200')}
              color={useColorModeValue('white', 'gray.800')}
              href="https://drive.google.com/file/d/1zu5Fp3lo7RU-YAtF5yUEqizRtRJzQc2R/view?usp=drive_link"
              target="_blank"
              as="a"
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 12px ${glowColor}, 0 0 24px ${glowColor}`,
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              See my CV
            </MotionButton>
          </MotionBox>

          <MotionBox display="flex" gap={4} pt={4} variants={simpleOpacity}>
            {SocialMedias.map((socMedia) => (
              <Link
                key={socMedia.label}
                aria-label={socMedia.label}
                rel="noreferrer"
                href={socMedia.href}
                target="_blank"
                _focus={{ boxShadow: 'none' }}
                _hover={{
                  svg: {
                    filter: `drop-shadow(0 0 6px ${glowColor})`,
                    transition: 'all 0.3s ease',
                  },
                }}
              >
                <Icon w={6} h={6} as={socMedia.icon} color={highlightColor} />
              </Link>
            ))}
          </MotionBox>
        </MotionStack>
      </Container>
    </MotionBox>
  )
}

export default Sidebar
