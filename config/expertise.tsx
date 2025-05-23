// expertise.tsx
import { ReactNode } from 'react'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiChakraui,
  SiTailwindcss,
  SiFigma,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiJavascript,
  SiFramer,
  SiCanva,
  SiBlender,
} from 'react-icons/si'

export type ExpertiseKey = 'Frontend' | 'UIUX' | 'GraphicDesign' | 'MobileApp'

export type Tool = {
  icon: ReactNode
  label: string
}

export type ExpertiseDetail = {
  icon: string
  name: string
  description: ReactNode[]
  tools?: Tool[]
}

export const Expertise: {
  [key in ExpertiseKey]: ExpertiseDetail
} = {
  Frontend: {
    name: 'Frontend Development',
    icon: '⚛️',
    description: [
      <>
        I build sleek, high-performance interfaces using <strong>React</strong>,{' '}
        <strong>Next.js</strong>, and <strong>TypeScript</strong>, emphasizing
        speed, scalability, and maintainable architecture.
      </>,
      <>
        I combine clean code with design systems like <strong>Chakra UI</strong>
        , <strong>Tailwind CSS</strong>, and <strong>ShadCN</strong> to deliver
        responsive, accessible, and pixel-perfect UIs.
      </>,
      <>
        My frontend approach prioritizes developer experience, reusability, and
        seamless user interaction across devices.
      </>,
    ],
    tools: [
      { label: 'JavaScript', icon: <SiJavascript /> },
      { label: 'React', icon: <SiReact /> },
      { label: 'Next.js', icon: <SiNextdotjs /> },
      { label: 'TypeScript', icon: <SiTypescript /> },
      { label: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { label: 'Chakra UI', icon: <SiChakraui /> },
    ],
  },
  UIUX: {
    name: 'UI/UX Design',
    icon: '🎨',
    description: [
      <>
        I design intuitive, human-centered interfaces that blend aesthetics with
        functionality, ensuring seamless digital experiences.
      </>,
      <>
        I prototype rapidly with <strong>Figma</strong>, animate ideas in{' '}
        <strong>Framer</strong>, and deliver pixel-precise specs via{' '}
        <strong>Adobe XD</strong>.
      </>,
      <>
        Every decision I make is guided by usability, clarity, and emotional
        resonance.
      </>,
    ],
    tools: [
      { label: 'Figma', icon: <SiFigma /> },
      { label: 'Adobe XD', icon: <SiAdobexd /> },
      { label: 'Framer', icon: <SiFramer /> },
    ],
  },
  GraphicDesign: {
    name: 'Graphic Design',
    icon: '🖌️',
    description: [
      <>
        I craft compelling visuals and brand assets that communicate stories,
        evoke emotion, and establish strong identities.
      </>,
      <>
        My expertise spans digital marketing graphics, social media content,
        posters, and motion design using <strong>Photoshop</strong>,{' '}
        <strong>Illustrator</strong>, and <strong>Canva</strong>.
      </>,
      <>
        I also explore 3D and visual experiments with tools like{' '}
        <strong>Blender</strong> for creative edge.
      </>,
    ],
    tools: [
      { label: 'Photoshop', icon: <SiAdobephotoshop /> },
      { label: 'Illustrator', icon: <SiAdobeillustrator /> },
      { label: 'Canva', icon: <SiCanva /> },
      { label: 'Blender', icon: <SiBlender /> },
    ],
  },
  MobileApp: {
    name: 'Mobile App Development',
    icon: '📱',
    description: [
      <>
        I build fast, cross-platform mobile apps using <strong>Flutter</strong>{' '}
        and <strong>Dart</strong>, optimized for both performance and elegance.
      </>,
      <>
        From UI layouts to backend integration, I focus on delivering a
        native-like feel, smooth animations, and real-time functionality.
      </>,
      <>
        I integrate with services like <strong>Firebase</strong> and REST APIs
        to provide full-featured mobile solutions.
      </>,
    ],
    tools: [
      { label: 'Flutter', icon: <SiFlutter /> },
      { label: 'Dart', icon: <SiDart /> },
      { label: 'Firebase', icon: <SiFirebase /> },
      { label: 'React Native', icon: <SiReact /> },
    ],
  },
}

export const ExpertiseList = [
  Expertise.Frontend,
  Expertise.UIUX,
  Expertise.GraphicDesign,
  Expertise.MobileApp,
]
