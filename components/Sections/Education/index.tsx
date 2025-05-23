import { memo } from 'react'
import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  HStack,
  Icon,
  Avatar,
} from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { FaGraduationCap } from 'react-icons/fa'

const educationData = [
  {
    level: 'Elementary',
    school: 'Kalilangan Central Elementary School',
    years: '2006 – 2012',
    description:
      'Laid the academic foundation and cultivated an early love for science, storytelling, and art.',
    logo: '/school-logo/kces.jpg',
  },
  {
    level: 'Junior High School',
    school: 'Laguindingan National High School',
    years: '2012 – 2016',
    description:
      'Explored interests in computer hardware, digital design, and traditional arts through various extracurriculars.',
    logo: '/school-logo/lanhs.jpg',
  },
  {
    level: 'Senior High School',
    school: 'Alubijid National Comprehensive High School',
    years: '2016 – 2018',
    description:
      'Pursued the STEM strand with a focus on engineering principles, analytical problem-solving, and applied sciences.',
    logo: '/school-logo/anchs.jpg',
  },
  {
    level: 'College',
    school: 'Mindanao State University at Naawan',
    years: '2018 – 2023',
    description:
      'Earned a BS in Information Technology, majoring in Databases, while excelling in Web Development and UI/UX Design.',
    logo: '/school-logo/naawan.jpg',
  },
]

const Education = () => {
  const timelineColor = useColorModeValue('teal.600', 'teal.300')
  const cardBg = useColorModeValue('whiteAlpha.900', 'whiteAlpha.100')
  const textSecondary = useColorModeValue('gray.700', 'gray.300')
  const subtextColor = useColorModeValue('gray.500', 'gray.400')
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

  return (
    <Stack
      width={{ base: '100%', md: '95%', lg: '75%' }}
      spacing={12}
      py={{ base: 12, md: 16 }}
      px={{ base: 4, md: 6 }}
    >
      <Box>
        <Heading
          size="2xl"
          letterSpacing="widest"
          textAlign="left"
          sx={{ fontVariant: 'small-caps' }}
        >
          Education
        </Heading>
        <Box
          h="3px"
          w="250px"
          mt={3}
          bg="teal.300"
          borderRadius="full"
          animation={`${pulseGlow} 2s ease-in-out infinite`}
        />
        <Text fontSize="md" color={subtextColor} mt={4}>
          A visual walkthrough of my academic journey.
        </Text>
      </Box>

      {educationData.map((item, index) => (
        <Box
          key={index}
          w="100%"
          bg={cardBg}
          px={6}
          py={5}
          rounded="md"
          shadow="md"
          borderLeft="4px solid transparent"
          transition="all 0.3s ease"
          position="relative"
          _hover={{
            borderColor: timelineColor,
            boxShadow: `0 0 12px ${glowColor}, 0 0 24px ${glowColor}`,
            transform: 'translateY(-4px)',
          }}
        >
          <HStack
            align="start"
            spacing={5}
            flexDirection={{ base: 'column', sm: 'row' }}
            textAlign={{ base: 'center', sm: 'left' }}
          >
            <Avatar
              name={item.school}
              src={item.logo}
              size="xl"
              bg="teal.500"
              boxShadow="lg"
              border="2px solid"
              borderColor={timelineColor}
              mx={{ base: 'auto', sm: '0' }}
            />
            <Box flex="1">
              <HStack
                spacing={2}
                mb={1}
                justify={{ base: 'center', sm: 'start' }}
              >
                <Icon as={FaGraduationCap} color={timelineColor} boxSize={4} />
                <Heading size="sm" fontWeight="bold">
                  {item.level}
                </Heading>
              </HStack>
              <Text fontWeight="semibold" fontSize="sm" color={timelineColor}>
                {item.school}
              </Text>
              <Text fontSize="xs" color={subtextColor} mb={2}>
                {item.years}
              </Text>
              <Text fontSize="sm" color={textSecondary} lineHeight="tall">
                {item.description}
              </Text>
            </Box>
          </HStack>
        </Box>
      ))}
    </Stack>
  )
}

export default memo(Education)
