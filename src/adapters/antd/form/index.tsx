import { ConfigProvider, Spin, theme } from "antd";
import enUS from "antd/locale/en_US";
import ptBR from "antd/locale/pt_BR";
import "dayjs/locale/pt-br";

import stylesheet from "@adapters/antd/stylesheet";
import useFormRuntime from "@hooks/useFormRuntime";

import type { CssVariables, FormLocale } from "@typings";
import type { Locale } from "antd/es/locale";
import type { FormProps } from "./types";

const antdLocales: Record<FormLocale, Locale> = { "pt-BR": ptBR, en: enUS };

const Form = ({ header, isLoading, children }: FormProps) => {
  const { labels, locale } = useFormRuntime();
  const { token } = theme.useToken();

  const style: CssVariables = {
    "--msf-antd-space-xs": `${token.paddingXS}px`,
    "--msf-antd-space-sm": `${token.paddingSM}px`,
    "--msf-antd-space-md": `${token.padding}px`,
    "--msf-antd-space-lg": `${token.paddingLG}px`,
    "--msf-antd-radius": `${token.borderRadiusLG}px`,
    "--msf-antd-border": token.colorBorderSecondary,
    "--msf-antd-subtle": token.colorFillQuaternary,
    "--msf-antd-primary": token.colorPrimary,
    "--msf-antd-text-secondary": token.colorTextSecondary,
    "--msf-antd-error": token.colorError,
    "--msf-antd-success": token.colorSuccess,
    "--msf-antd-surface": token.colorBgContainer
  };

  return (
    <ConfigProvider locale={antdLocales[locale]}>
      <style href="multi-step-form-antd" precedence="default">
        {stylesheet}
      </style>
      <Spin spinning={isLoading} tip={labels.processing} size="large">
        <form noValidate className="msf-antd-form" style={style} onSubmit={(event) => event.preventDefault()}>
          {header}
          {children}
        </form>
      </Spin>
    </ConfigProvider>
  );
};

export default Form;
