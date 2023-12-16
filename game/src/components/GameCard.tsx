import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/userGames';
import getCroppedImgUrl from '../services/image-url';
import CriticScore from './CriticScore';
import PlatformIconsList from './PlatformIconsList';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Image src={getCroppedImgUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <Heading fontSize='1xl'>{game.name}</Heading>
        <HStack justifyContent={'space-between'}>
          <PlatformIconsList platforms={game.parent_platforms.map((p) => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;