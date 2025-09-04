import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, Image, HStack } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../hooks/image-url'
import Emoji from './Emoji'

interface Props {
    game: Game
}

const GameCard = ({ game } : Props) => {
  return (
    <Card.Root >
        <Image src={getCroppedImageUrl(game.background_image) ?? undefined}/>
        <CardBody>
            <HStack justifyContent={'space-between'} marginBottom={3}>
            <PlatformIconList platform={game.parent_platforms.map(p => p.platform)}/>
            <CriticScore score={game.metacritic}/>    
            </HStack>
            <Heading fontSize='2xl'>{game.name}<Emoji rating={game.rating_top}/></Heading>
        </CardBody>
    </Card.Root>
  )
}

export default GameCard