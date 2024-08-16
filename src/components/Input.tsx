import { CheckIcon } from "@chakra-ui/icons";
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { Controller, Path, useFormContext, FieldError } from "react-hook-form";

type InputProps<T> = Omit<ChakraInputProps, "name"> & {
  name: Path<T>;
  label?: string;
};

function Input<T>({ name, label, ...restInputProps }: InputProps<T>) {
  const {
    control,
    formState: { errors, touchedFields },
  } = useFormContext();

  const fieldError = errors[name] as FieldError;
  const isFieldValid = touchedFields[name] && !fieldError;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl isInvalid={!!fieldError}>
          <FormLabel htmlFor={name} pl={1}>
            {label}
          </FormLabel>
          <InputGroup alignItems="center">
            <ChakraInput
              {...field}
              {...restInputProps}
              size="lg"
              variant="outline"
              autoComplete="off"
            />
            {isFieldValid && (
              <InputRightElement top="auto">
                <CheckIcon color="green.500" />
              </InputRightElement>
            )}
          </InputGroup>
          {!!fieldError && (
            <FormErrorMessage pl={1}>
              <Text _firstLetter={{ textTransform: "capitalize" }}>
                {fieldError.message}
              </Text>
            </FormErrorMessage>
          )}
        </FormControl>
      )}
    />
  );
}

export default Input;
