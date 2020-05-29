import React from 'react';
import Course from './course';
import { graphql, useStaticQuery } from 'gatsby';
import styles from '../../css/courses.module.css';
import Title from '../Title';

const query = graphql`
{
  allStrapiCourse(sort: {fields: published, order: DESC}) {
    nodes {
      url
      size
      title
      id
      published
      image {
        url
      }
    }
  }
}
`;

const Courses = () => {
  const { allStrapiCourse: { nodes: courses } } = useStaticQuery(query);
  console.log(courses);
  return (
    <section className={styles.courses}>
      <Title title='all' subtitle='courses'/>
      <div className={styles.center}>
        {
          courses.map(item => {
            return <Course key={item.id} {...item}/>;
          })
        }
      </div>
    </section>
  );
};

export default Courses;