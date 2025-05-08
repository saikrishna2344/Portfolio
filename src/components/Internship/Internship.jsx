import React from "react";
import styles from "./Internship.module.css"
import skills from "../../data/skills.json"; // Import skills.json
import history from "../../data/history.json"

// Import the images manually from the correct path (src/assets/skills)
import htmlImg from "../../assets/skills/html.png";
import cssImg from "../../assets/skills/css.png";
import jsImg from "../../assets/skills/js.png";
import pythonImg from "../../assets/skills/python.png";
import sqlImg from "../../assets/skills/sql.png";
import reactImg from "../../assets/skills/react.png";
import { getImageUrl } from "../../util";

// Create an object to map skill titles to their respective images
const images = {
  HTML: htmlImg,
  CSS: cssImg,
  Javascript: jsImg,
  Python: pythonImg,
  SQL: sqlImg,
  React: reactImg,
};

// Apply styles based on image size (specific to each image)
const imageStyle = (title) => {
  switch (title) {
    case "HTML":
      return { maxWidth: "85px", maxHeight: "85px", objectFit: "contain" };
    case "CSS":
      return { maxWidth: "85px", maxHeight: "85px", objectFit: "contain" }; 
    case "Javascript":
      return { maxWidth: "75px", maxHeight: "75px", objectFit: "contain" }; // Resize JavaScript image
    case "Python":
      return { maxWidth: "85px", maxHeight: "85px", objectFit: "contain" }; // Resize Python image
    case "SQL":
      return { maxWidth: "85px", maxHeight: "85px", objectFit: "contain" }; // Resize SQL image
      case "React":
        return { maxWidth: "85px", maxHeight: "85px", objectFit: "contain" }; 
    // You can add more cases for other images if necessary
    default:
      return {}; // Default, no resizing
  }
};

export const Internship = () => {
  return (
    <section className={styles.container} id="Internships">
      <h2 className={styles.title}>Internships</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={images[skill.title]} alt={skill.title} style={imageStyle(skill.title)}/>
              </div>
              <p>{skill.title}</p>
            </div>
          ))}        
        </div>
        <ul className={styles.history}>
          {
            history.map((historyItem, id) => {
              return <li key={id} className={styles.historyItem}>
                <img src={getImageUrl(historyItem.imageSrc)} width="80" height="80" />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role},${historyItem.organization}`}</h3>
                  <p className={styles.p}>{`${historyItem.start_date} - ${historyItem.end_date}`}</p>
                  <ul className ={styles.e}>{historyItem.experiences.map((experience, id) => {
                    return <li key = {id}>{experience}</li>
                  })}</ul>
                </div>
              </li>
            })
          }
        </ul>
      </div>
    </section>
  );
};
