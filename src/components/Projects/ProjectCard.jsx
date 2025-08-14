// import React from "react";
// import styles from "./ProjectCard.module.css";

// export const ProjectCard = ({
//   project: { title, imageSrc, description, skills, demo, source },
// }) => {

//   const getImage = (imageSrc) => {
//     try {
//       return require(`../../assets/project/${imageSrc}`);
//     } catch (error) {
//       console.error(`Error loading image: ${imageSrc}`, error);
//       return null; 
//     }
//   };

//   const image = getImage(imageSrc.split("/").pop());

//   return (
//     <div className={styles.container}>
     
//       {image ? (
//         <img
//           src={image}
//           alt={title}
//           className={styles.image}
//           style={{
//             backgroundColor: "#fdd", 
//             borderRadius: "12px",
//             objectFit: "cover",
//           }}
//         />
//       ) : (
//         <p style={{ color: "red" }}>
//           Missing image: {imageSrc.split("/").pop()}
//         </p>
//       )}

//       <h3 className={styles.title}>{title}</h3>
//       <p className={styles.description}>{description}</p>
//       <ul className={styles.skills}>
//         {skills.map((skill, id) => (
//           <li key={id} className={styles.skill}>
//             {skill}
//           </li>
//         ))}
//       </ul>
//       <div className={styles.links}>
//         <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
//           Demo
//         </a>
//         <a href={source} target="_blank" rel="noopener noreferrer" className={styles.link}>
//           Source
//         </a>
//       </div>
//     </div>
//   );
// };
import React from "react";
import styles from "./ProjectCard.module.css";

// Import images directly from the 'src/assets/project' folder
import droneImage from "../../assets/project/Drone_pic2.jpg";
import robotImage from "../../assets/project/linepic_fixed.jpg";
import militaryImage from "../../assets/project/Military_pic.jpg";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  // Dynamically select the image based on the imageSrc value
  let selectedImage = "";
  
  switch (imageSrc) {
    case "Drone_pic2.jpg":
      selectedImage = droneImage;
      break;
    case "linepic_fixed.jpg":
      selectedImage = robotImage;
      break;
    case "Military_pic.jpg":
      selectedImage = militaryImage;
      break;
    default:
      selectedImage = ""; // In case the image is missing
  }

  return (
    <div className={styles.container}>
      {/* Check if the selectedImage exists */}
      {selectedImage ? (
        <img
          src={selectedImage}
          alt={title}
          className={styles.image}
          style={{
            backgroundColor: "#fdd", // Temporary debug background
            borderRadius: "12px",
            objectFit: "cover",
          }}
        />
      ) : (
        <p style={{ color: "red" }}>Missing image: {imageSrc.split("/").pop()}</p>
      )}

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Demo
        </a>
        <a href={source} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};
