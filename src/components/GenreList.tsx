import { HStack, Image, List, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../hooks/image-url";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <List.Root variant="plain">
      {data.map((genre) => (
        <List.Item key={genre.id} padding={1}>
          <HStack>
            <Image borderRadius={8} boxSize="32px" src={getCroppedImageUrl(genre.image_background) ?? undefined} />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
