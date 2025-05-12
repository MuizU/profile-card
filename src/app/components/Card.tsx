"use client";

import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import Button from "@/app/components/Button";
type TProps = {
  name: string;
  role: string;
  description: string;
  className: string | undefined;
  org: string;
  ghId: string;
  emailId: string;
  liId: string;
  xId: string;
  igId: string;
};
const Card = ({
  className,
  name,
  role,
  org,
  description,
  emailId,
  ghId,
  liId,
  xId,
  igId,
}: TProps) => {
  const handleContactClick = () => {
    window.location.assign(emailId);
  };

  const socialLinks = [
    {
      icon: "/github.svg",
      href: ghId,
    },
    {
      icon: "/linkedin.svg",
      href: liId,
    },
    {
      icon: "/instagram.svg",
      href: igId,
    },
    {
      icon: "/x.svg",
      href: xId,
    },
  ];
  return (
    <section className={`${styles.container} ${className}`}>
      <section className={styles.infoSection}>
        <header className={styles.headerWrapper}>
          <Image
            src={"/profile_pic.jpg"}
            alt="profile-pic"
            width={64}
            className={styles.headerImage}
            height={64}
          />
        </header>

        <section className={styles.userInfo}>
          <h1 className={styles.userName}>{name}</h1>
          <p className={styles.userRole}>
            {role} @ {org}
          </p>
        </section>

        <section className={styles.description}>{description}</section>
      </section>
      <section className={styles.buttonsContainer}>
        <Button onClick={handleContactClick}>Contact Me</Button>
        <section className={styles.linkSection}>
          {socialLinks.map(({ icon, href }) => (
            <a
              href={href}
              key={href}
              target="_blank"
              className={styles.hyperLink}
            >
              <Image src={icon} alt={href} height={16} width={16} />
            </a>
          ))}
        </section>
      </section>
    </section>
  );
};

export default Card;
