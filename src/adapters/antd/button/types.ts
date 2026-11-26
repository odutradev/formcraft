import type { ButtonProps as CoreButtonProps } from "@typings";
import type { ButtonProps as AntdButtonProps } from "antd";

export type ButtonProps = CoreButtonProps;

export type ButtonVariantMap = Record<ButtonProps["variant"], NonNullable<AntdButtonProps["variant"]>>;
