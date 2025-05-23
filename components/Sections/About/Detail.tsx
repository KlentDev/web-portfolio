import React from 'react'
import {
  Text,
  Stack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  SlideFade,
  useColorModeValue,
  useBreakpointValue,
  Box,
  SimpleGrid,
  Tooltip,
} from '@chakra-ui/react'
import { ExpertiseList } from 'config/expertise'
import { mobileBreakpointsMap } from 'config/theme'

const Detail = () => {
  const activeBorderColor = useColorModeValue('teal.500', '#97DFFC')
  const isMobile = useBreakpointValue(mobileBreakpointsMap)

  const tabOrientation: 'horizontal' | 'vertical' =
    useBreakpointValue<'horizontal' | 'vertical'>({
      base: 'horizontal',
      sm: 'horizontal',
      md: 'vertical',
      lg: 'vertical',
      xl: 'vertical',
    }) ?? 'vertical'

  const tabMinWidth = useBreakpointValue({
    base: '160px',
    sm: '160px',
    md: 'auto',
    lg: 'auto',
    xl: 'auto',
  })

  return (
    <Box width="100%" overflow="visible" py={2}>
      <Tabs
        id="Details"
        orientation={tabOrientation}
        isLazy
        variant="unstyled"
        size="md"
        colorScheme="teal"
      >
        <TabList
          width={!isMobile ? '30%' : '100%'}
          borderColor="transparent"
          overflowX={isMobile ? 'auto' : 'visible'}
          overflowY="visible"
          className="skillModal"
          px={3}
          gap={3}
          userSelect="none"
          pb={2}
        >
          {ExpertiseList.map((item) => (
            <Tab
              key={`Tab-${item.name}`}
              fontSize={{ base: 'sm', md: 'md' }}
              h={{ base: '80px', md: '100px' }}
              px={6}
              minWidth={tabMinWidth}
              transition="all 0.3s ease"
              borderRadius="md"
              borderBottomWidth={tabOrientation === 'horizontal' ? '3px' : '0'}
              _hover={{
                boxShadow: '0 0 10px #81E6D9',
                transform: 'scale(1.05)',
                zIndex: 2,
              }}
              _selected={{
                borderColor: activeBorderColor,
                fontWeight: 'bold',
                background: 'whiteAlpha.100',
                animation: 'pulse 2.5s infinite',
                boxShadow: '0 0 14px #81E6D9',
                color: activeBorderColor,
                zIndex: 2,
              }}
            >
              {item.name} {item.icon}
            </Tab>
          ))}
        </TabList>

        <TabPanels px={isMobile ? 3 : 8} py={6}>
          {ExpertiseList.map((item) => (
            <TabPanel key={`TabPanel-${item.name}`}>
              <SlideFade offsetY="24px" in={true}>
                <Stack spacing={5}>
                  {item.description.map((desc, idx) => (
                    <Text
                      key={idx}
                      fontSize={{ base: 'sm', md: 'md' }}
                      lineHeight="tall"
                    >
                      {desc}
                    </Text>
                  ))}

                  {item.tools && (
                    <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4} pt={4}>
                      {item.tools.map((tool, idx) => (
                        <Tooltip label={tool.label} key={idx}>
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            borderRadius="md"
                            p={4}
                            bg="whiteAlpha.100"
                            transition="all 0.3s ease"
                            boxShadow="md"
                            _hover={{
                              boxShadow: '0 0 20px #63b3ed',
                              transform: 'scale(1.05)',
                              animation: 'pulse 2s infinite',
                              color: 'teal.300',
                            }}
                          >
                            {tool.icon}
                            <Text fontSize="xs" mt={2}>
                              {tool.label}
                            </Text>
                          </Box>
                        </Tooltip>
                      ))}
                    </SimpleGrid>
                  )}
                </Stack>
              </SlideFade>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default Detail
