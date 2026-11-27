import { FormcraftProvider } from "formcraft";

import FormComparison from "@playground/components/formComparison";
import "./styles.css";

import type { ShowcaseSectionProps } from "./types";

const ShowcaseSection = ({ section, index, adapterView }: ShowcaseSectionProps) => (
  <section id={section.id} className="showcase-section" aria-labelledby={`${section.id}-title`}>
    <header className="showcase-section-header">
      <span className="showcase-section-number">{String(index + 1).padStart(2, "0")}</span>
      <div>
        <h2 id={`${section.id}-title`}>{section.title}</h2>
        <p>{section.description}</p>
        <ul className="feature-list" aria-label="Recursos usados">
          {section.features.map((feature) => (
            <li key={feature}>
              <code>{feature}</code>
            </li>
          ))}
        </ul>
      </div>
    </header>
    {section.defaults ? (
      <FormcraftProvider {...section.defaults}>
        <FormComparison config={section.config} adapterView={adapterView} />
      </FormcraftProvider>
    ) : (
      <FormComparison config={section.config} adapterView={adapterView} />
    )}
  </section>
);

export default ShowcaseSection;
