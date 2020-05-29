import React from 'react';
import Image from 'gatsby-image';
import styles from '../../css/single-course.module.css';
import logo from '../../images/addict-logo.svg';

const Course = ({ title, size, url, image }) => {
  return (
    <article className={styles.course}>
      <div className={styles.imgContainer}>
        <img src={`http://localhost:1337${image[0].url}`} alt={title} className={styles.img} />
        <a href={url} className={styles.link} target='__blank'>enroll</a>
      </div>
      <div className={styles.footer}>
        <div className={styles.text}>
          <h3>{title}</h3>
          <p>{size} hours</p>
        </div>
        <img src={logo} alt='coding addict logo'/>
      </div>
    </article>
  );
};

export default Course;