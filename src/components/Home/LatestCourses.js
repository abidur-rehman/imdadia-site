import React from 'react';
import Course from '../Courses/course';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styles from '../../css/courses.module.css';
import Title from '../Title';

const query = graphql`
{
  allStrapiCourse(sort: {fields: published, order: DESC}, limit:2) {
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

const LatestCourses = () => {
  const { allStrapiCourse: { nodes: courses } } = useStaticQuery(query);
  console.log(courses);
  return (
    <section className={styles.courses}>
      <Title title='top' subtitle='courses'/>
      <div className={styles.center}>
        {
          courses.map(item => {
            return <Course key={item.id} {...item}/>;
          })
        }
      </div>
      <Link to='/courses' className='btn-primary'>All courses </Link>
    </section>
  );
};

export default LatestCourses;