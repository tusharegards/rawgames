import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder: string;
}

const SortSelector = ({onSelectSortOrder , sortOrder} : Props) => {
    const sortOrders = [{
        value: "", label: "Relevance"
    }, {
        value: "-added", label: "Date Added"
    }, {
        value: "name", label: "Name"
    }, {
        value: "-released", label: "Release Date"
    }, {
        value: "-metacritic", label: "Popularity"
    }, {
        value: "-rating", label: "Average rating"
    }]

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          <BsChevronDown />
          Order By :  {sortOrders.find(order => order.value === sortOrder)?.label || "Relevance"}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map(order => (
                <Menu.Item onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
