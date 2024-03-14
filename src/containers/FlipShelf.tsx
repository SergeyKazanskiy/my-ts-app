// App.tsx
import { useState } from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';
import './styles.css'; // Import CSS file for styling
import { Shelf } from '../components/Shelf';


interface IProps {
  title: string;
  children: JSX.Element[] | JSX.Element;
}

export function FlipShelf({ title, children }: IProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
      <Flex justifyContent="center" alignItems="center" height="60px">
        <Box className={`card ${isFlipped ? 'is-flipped' : ''}`} onClick={handleFlip}>
          <Box className="card-inner">
            <Box className="card-front">
              <h1>Front</h1>
              <Button onClick={handleFlip}>Flip</Button>
              {children}
            </Box>
            <Box className="card-back">
              <h1>Back</h1>
              <Button onClick={handleFlip}>Flip Back</Button>
            </Box>
          </Box>
        </Box>
      </Flex>
  );
}

