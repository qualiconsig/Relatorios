import { Box, Flex, Text } from "@chakra-ui/react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

const Sphere = ({ position, size, color }:any) => {
  const ref = useRef<any>();

  const [isHovered, setisHovered] = useState(false);

  useFrame((state, delta) => {
    if (ref.current ) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }

   
  });

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={(event) => (event.stopPropagation(), setisHovered(true))}
      onPointerLeave={() => setisHovered(false)}
    >
      
      <sphereGeometry args={size} />
      <meshStandardMaterial color={isHovered ? "blue": "green"} wireframe />
    </mesh>
  );
};

export const TypeEffect = ({text}:any) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(()=> {
      if(currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 120)
    return () => clearInterval(interval);
  },[text, currentIndex])

  return (
    <Text color={'white'} fontSize={'30px'}>{displayText}</Text>
  )
}

export default function Load() {
  return (
    <Flex flexDir={'column'} align={'center'}  bg={"black"}  h={"100vh"}>
     <Box>
        <TypeEffect text={"Qualiconsig"}/>
      </Box>
      
      <Canvas>
      <OrbitControls/>
        <directionalLight position={[0, 0, 2]} intensity={0.5} />
        <ambientLight intensity={0.1} />

        <Sphere position={[0, 0, 0]} size={[1.5, 50, 30]} color="blue" />
        
      </Canvas>
    </Flex>
  );
}
