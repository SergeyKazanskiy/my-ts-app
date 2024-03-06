import './App.css';
import { VStack, useDisclosure, Center } from "@chakra-ui/react"
import { Header } from './pages/Header';
import Library from './pages/library';

function App() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Center>
      <VStack mt={10} w='1000px' h='650px' alignItems='center' pos="relative"
        borderWidth={1} borderColor='blue.500' rounded='md'>
        <Header onToggle={onToggle}/>
        <Library isOpen={isOpen}/>
      </VStack>
    </Center>
  );
}

export default App;
