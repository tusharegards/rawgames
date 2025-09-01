import { Badge } from '@chakra-ui/react';

interface Props {
    score : number;
}

const CriticScore = ({score} : Props) => {
    const color = score > 90 ? 'green' : score > 85 ? 'yellow' : 'red';
  return (
    <Badge colorPalette={color} fontSize='14px' paddingX={2} borderRadius={2}>{score}</Badge>
  )
}

export default CriticScore