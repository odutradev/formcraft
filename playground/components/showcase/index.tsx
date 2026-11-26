import showcaseSections from "@playground/config/showcaseSections";
import ShowcaseSection from "./subcomponents/showcaseSection";
import "./styles.css";

import type { ShowcaseProps } from "./types";

const Showcase = ({ adapterView }: ShowcaseProps) => (
  <div className="showcase">
    <div className="page-intro">
      <h1>Galeria de componentes</h1>
      <p>
        Cada bloco é um formulário de uma etapa que usa um grupo de recursos da config. Todos os tipos de campo, mensagens, grupos, tabela, busca e modal
        aparecem aqui.
      </p>
    </div>
    <nav className="showcase-nav" aria-label="Seções da galeria">
      {showcaseSections.map((section, index) => (
        <a key={section.id} href={`#${section.id}`}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          {section.title}
        </a>
      ))}
    </nav>
    {showcaseSections.map((section, index) => (
      <ShowcaseSection key={section.id} section={section} index={index} adapterView={adapterView} />
    ))}
  </div>
);

export default Showcase;
