import { Button, HStack, Image, List, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../hooks/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  if(error) return null;
  if(isLoading) return <Spinner />
  return (
    <List.Root variant="plain">
      {data.map((genre) => (
        <List.Item key={genre.id} padding={1}>
          <HStack>
            <Image borderRadius={8} boxSize="32px" src={getCroppedImageUrl(genre.image_background) ?? undefined} />
            <Button  onClick={() => console.log(genre)} variant="plain" asChild fontSize="lg"><a href="#" >{genre.name}</a></Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
