import React from "react";
import styles from "./FacultyProfile.module.css";


export default function FacultyProfile(props: any) {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h2>{props.name}</h2>
        <p>{props.department}</p>
        <p>{props?.branch}</p>
        <p>{props.phone}</p>
        <p>{props.email}</p>
        <p>{props.course}</p>
      </div>
    </div>
  );
}
