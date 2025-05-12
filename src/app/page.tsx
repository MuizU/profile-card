import Card from "@/app/components/Card";
import styles from "./page.module.css";

export default function Home() {
  const description =
    "I transform caffeine into clean, elegant code that powers innovation and rarely breaks. Trusted contributor on Stack Overflow.";

  return (
    <article className={styles.container}>
      <Card
        className={styles.card}
        description={description}
        emailId="mailto:muizuvais99@gmail.com"
        name="Muiz Uvais"
        role="Software Development Engineer II"
        org="noon.com"
        ghId="https://github.com/MuizU"
        liId="https://www.linkedin.com/in/muizuvais/"
        igId="http://instagram.com/muiz_developer"
        xId="http://x.com/muiz_the_dev"
      />
      <div className={styles.credits} data-gfe-screenshot-exclude="true">
        A challenge by <s></s>
        <a
          href="https://www.greatfrontend.com/projects?ref=challenges"
          target="_blank"
        >
          GreatFrontEnd Projects
        </a>
        . Built by <s />
        <a
          href="https://www.greatfrontend.com/projects/u/MuizU"
          target="_blank"
        >
          Muiz Uvais
        </a>
        .
      </div>
    </article>
  );
}
