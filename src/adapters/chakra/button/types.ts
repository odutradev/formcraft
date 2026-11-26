import type { ButtonProps as CoreButtonProps } from "@typings";

export type ButtonProps = CoreButtonProps;

export type ChakraButtonVariant = "solid" | "outline" | "ghost";

export type ButtonVariantMap = Record<ButtonProps["variant"], ChakraButtonVariant>;
