import CardItem from "./CardItem";
import Stack from "@mui/material/Stack";
function CardList() {
  return (

      <Stack gap={5} maxWidth={732} height="93vh" overflow="scroll" position="fixed">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </Stack>

  );
}

export default CardList;
