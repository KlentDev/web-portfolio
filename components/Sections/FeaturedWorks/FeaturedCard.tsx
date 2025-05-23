/* eslint-disable react/no-multi-comp */
import {
  Box,
  Image,
  ResponsiveValue,
  Divider,
  Text,
  SimpleGrid,
  Container,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import styles from './styles.module.css'
import { easing, DURATIONS } from 'config/animations'

export type FeaturedCardProps = {
  // Still can't find what's correct value for responsive value
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  height: string | ResponsiveValue<any>
  src: string
  idx: number
  title: string
  description: string
  objectPosition?: string
  isMobile?: boolean
}

const variants = {
  normal: {
    opacity: 0.85,
  },
  hover: {
    scale: 1.1,
    opacity: 1,
    transition: {
      duration: DURATIONS.Fast,
      ease: 'backOut',
    },
  },
  tap: {
    scale: 0.85,
    opacity: 1,
    transition: {
      duration: DURATIONS.Fast,
      ease: easing,
    },
  },
}

const MotionImage = motion(Image)

const ProjectDescription = ({
  idx,
  title,
  description,
  isLeft,
}: {
  idx?: number
  title: string
  description: string
  isLeft: boolean
}) => (
  <Container
    px={5}
    py={4}
    display="flex"
    alignItems="center"
    justifyContent="space-around"
    flexDirection="column"
  >
    <Stack spacing={2} width="100%">
      <Text
        fontSize={{ base: 'md', md: 'large', '2xl': 'xx-large' }}
        fontWeight="bold"
        letterSpacing={2}
        width="90%"
        alignSelf={isLeft ? 'flex-end' : 'flex-start'}
        textTransform="uppercase"
        as="span"
      >
        <Text variant="accentAlternative" fontSize="md" as="span" mr={1}>
          #0{idx}
        </Text>
        {title}
      </Text>

      <Divider
        borderColor="#A6A6A6"
        width="90%"
        alignSelf={isLeft ? 'flex-end' : 'flex-start'}
        mb={2} // Add margin bottom to separate from description
      />

      <Text
        fontSize="sm"
        variant="accentAlternative"
        width="90%"
        alignSelf={isLeft ? 'flex-end' : 'flex-start'}
        wordBreak="break-word"
        lineHeight="1.6"
        mt={1}
      >
        {description}
      </Text>
    </Stack>
  </Container>
)

const FeaturedCard = ({
  idx,
  height,
  src,
  title,
  description,
  objectPosition,
  isMobile,
}: FeaturedCardProps) => {
  const isLeftImage = isMobile ? false : idx % 2 === 0
  const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.200')
  const CoverImage = () => (
    <MotionImage
      height={height}
      width="100%"
      src={src}
      alt={title}
      objectFit="cover"
      objectPosition={objectPosition}
      loading="lazy"
      opacity={0.75}
      whileHover={variants.hover}
      whileTap={variants.tap}
    />
  )

  return (
    <Box
      height="auto"
      bg={bg}
      borderRadius="1em"
      className={styles.featureCard}
      borderColor={bg}
      borderWidth="1px"
    >
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 3, md: 0 }}
        display={{ base: 'flex', md: 'grid' }}
        flexDirection={{ base: 'column-reverse', md: 'initial' }}
      >
        {isLeftImage && <CoverImage />}
        <ProjectDescription
          idx={idx}
          title={title}
          description={description}
          isLeft={isLeftImage}
        />
        {!isLeftImage && <CoverImage />}
      </SimpleGrid>
    </Box>
  )
}
export default FeaturedCard
