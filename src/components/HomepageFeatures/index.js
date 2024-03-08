import clsx from "clsx";
import Heading from "@theme/Heading";
import Translate from "@docusaurus/Translate";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: (
      <Translate description="The homepage VSCode heading text">
        Helpota VSCode käyttämistä
      </Translate>
    ),
    Svg: require("@site/static/img/vscode.svg").default,
    description: (
      <Translate description="The homepage VSCode text">
        Tämä web-sivu on tehty TiVi ryhmälle. Käyttäkää kaikkea mitä tänne on
        laitettu sillä nämä voivat helpottaa opetustane!
      </Translate>
    ),
  },
  {
    title: (
      <Translate description="The homepage caution text">
        Koodaus on niin vaikeaa
      </Translate>
    ),
    Svg: require("@site/static/img/logos.svg").default,
    description: (
      <Translate description="The homepage Coding heading text">
        Eipä ole, käy kattoo vähä noita HELPOTUKSIA joita oon tehny! Ne kyl
        auttaa ees jonkin verran ja helpottaa elämää.
      </Translate>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
