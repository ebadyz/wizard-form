import { z } from "zod";

type FieldName = string;

const VALIDATION_MESSAGES = {
  required: (fieldName: FieldName) => `${fieldName} is required`,
  selectRequired: (fieldName: FieldName) => `Please select a ${fieldName}`,
  invalid: (fieldName: FieldName) => `${fieldName} is invalid`,
  englishLetter: (fieldName: FieldName) =>
    `${fieldName} should contain English letters`,
  min: (minNumber: number) =>
    `The field must have at least ${minNumber} character${
      minNumber > 1 ? "s" : ""
    }`,
};

const englishLettersRegExp = /^[A-Za-z\s]+$/;

export const zodString = (fieldName: FieldName) =>
  z
    .string({ required_error: VALIDATION_MESSAGES.required(fieldName) })
    .trim()
    .min(1, { message: VALIDATION_MESSAGES.min(1) });

export const zodSelectRequired = (fieldName: FieldName) =>
  z.string({ required_error: VALIDATION_MESSAGES.selectRequired(fieldName) });

export const zodEmail = (fieldName: FieldName) =>
  z
    .string({ required_error: VALIDATION_MESSAGES.required(fieldName) })
    .trim()
    .email({
      message: VALIDATION_MESSAGES.invalid(fieldName),
    });

export const zodPhoneNumber = (fieldName: FieldName) =>
  z
    .string({ required_error: VALIDATION_MESSAGES.required(fieldName) })
    .trim()
    .regex(/^(0|\+98)[0-9]{10}$/, {
      message: VALIDATION_MESSAGES.invalid(fieldName),
    });

export const zodEnglishLetter = (fieldName: FieldName) =>
  zodString(fieldName).regex(englishLettersRegExp, {
    message: VALIDATION_MESSAGES.englishLetter(fieldName),
  });
