import {
  VStack,
  Text,
  Button,
  ButtonProps,
  List,
  ListItem,
} from "@chakra-ui/react";
import {
  Controller,
  useFormContext,
  Path,
  FieldValues,
  FieldError,
} from "react-hook-form";

type ListSelectProps<T> = Omit<ButtonProps, "name"> & {
  name: Path<T>;
  items: ListSelectItem[];
};

type ListSelectItem = {
  id: `${string}-${string}-${string}-${string}-${string}`;
  label: string;
};

type fieldValue = string;

function ListSelect<T extends FieldValues>({
  items,
  name,
  ...props
}: ListSelectProps<T>) {
  const {
    control,
    formState: { errors },
  } = useFormContext<T>();

  const fieldError = errors[name] as FieldError;

  const fieldVariant = (fieldValue: fieldValue, item: ListSelectItem) => {
    return fieldValue === item.label ? "solid" : "outline";
  };

  const isActive = (fieldValue: fieldValue, item: ListSelectItem) => {
    return fieldValue === item.label;
  };

  return (
    <VStack as={List} spacing={6} w="100%">
      {items.map((item) => (
        <ListItem key={item.id} w="100%">
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <Button
                {...props}
                variant={fieldVariant(field.value, item)}
                isActive={isActive(field.value, item)}
                _active={{ bg: "purple.500" }}
                _hover={{ bg: "purple.500" }}
                borderColor="purple.500"
                onClick={() => field.onChange(item.label)}
              >
                <Text>{item.label}</Text>
              </Button>
            )}
          />
        </ListItem>
      ))}
      {!!fieldError && (
        <Text color="red.300" _firstLetter={{ textTransform: "capitalize" }}>
          {fieldError.message}
        </Text>
      )}
    </VStack>
  );
}

export default ListSelect;
