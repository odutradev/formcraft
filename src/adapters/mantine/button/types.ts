import type { ButtonProps as CoreButtonProps } from "@typings";

export type ButtonProps = CoreButtonProps;

export type MantineButtonVariant = "filled" | "outline" | "subtle";

export type ButtonVariantMap = Record<ButtonProps["variant"], MantineButtonVariant>;
