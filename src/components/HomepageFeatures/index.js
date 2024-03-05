import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Helpota VSCode käyttämistä",
    Svg: require("@site/static/img/vscode.svg").default,
    description: (
      <>
        Tämä web-sivu on tehty TiVi ryhmälle. Käyttäkää kaikkea mitä tänne on
        laitettu sillä nämä voivat helpottaa opetustane!
      </>
    ),
  },
  {
    title: "Koodaus on niin vaikeaa",
    Svg: require("@site/static/img/logos.svg").default,
    description: (
      <>
        Eipä ole, käy kattoo vähä noita <code>HELPOTUKSIA</code> joita oon
        tehny! Ne kyl auttaa ees jonkin verran ja helpottaa elämää.
      </>
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
