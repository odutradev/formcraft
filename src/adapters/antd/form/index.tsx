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
    "--fc-antd-space-xs": `${token.paddingXS}px`,
    "--fc-antd-space-sm": `${token.paddingSM}px`,
    "--fc-antd-space-md": `${token.padding}px`,
    "--fc-antd-space-lg": `${token.paddingLG}px`,
    "--fc-antd-radius": `${token.borderRadiusLG}px`,
    "--fc-antd-border": token.colorBorderSecondary,
    "--fc-antd-subtle": token.colorFillQuaternary,
    "--fc-antd-primary": token.colorPrimary,
    "--fc-antd-text-secondary": token.colorTextSecondary,
    "--fc-antd-error": token.colorError,
    "--fc-antd-success": token.colorSuccess,
    "--fc-antd-surface": token.colorBgContainer
  };

  return (
    <ConfigProvider locale={antdLocales[locale]}>
      <style href="formcraft-antd" precedence="default">
        {stylesheet}
      </style>
      <Spin spinning={isLoading} description={labels.processing} size="large">
        <form noValidate className="fc-antd-form" style={style} onSubmit={(event) => event.preventDefault()}>
          {header}
          {children}
        </form>
      </Spin>
    </ConfigProvider>
  );
};

export default Form;
