import type { ButtonProps as EnchaseButtonProps } from "enchase";
import type { ButtonProps as CoreButtonProps } from "@typings";

export type ButtonProps = CoreButtonProps;

export type ButtonVariantMap = Record<ButtonProps["variant"], NonNullable<EnchaseButtonProps["variant"]>>;
