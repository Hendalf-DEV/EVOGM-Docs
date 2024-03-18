import clsx from "clsx";
import Heading from "@theme/Heading";
import Translate from "@docusaurus/Translate";
import styles from "./styles.module.css";

const LisaInfo = [
  {
    title: (
      <Translate description="The homepage caution text">
        EVO GM - Kuka? Mikä?
      </Translate>
    ),
    description: (
      <Translate description="The homepage caution text">
        Tämän web-sivuston idea on kehittää ja neuvoa muita kuinka voi
        tehokkaasti käyttää menetelmiä jotka voivat edistää omaa työtä.
        Käsittelyssä on paljon asioita.
      </Translate>
    ),
  },
];

function Lista({ title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function AdditionalInfo() {
  return (
    <section className={styles.list}>
      <div className="container">
        <div className="row">
          {LisaInfo.map((props, idx) => (
            <Lista key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
