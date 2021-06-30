import React from "react";
import MeetupItem from "./MeetupItem";
import styles from "./MeetupList.module.css";

export default function MeetupList(props) {
  console.log(props);

  return (
    <>
      {props.data.length > 0 ? (
        <ul className={styles.list}>
          {props.data.map((item) => {
            return (
              <MeetupItem
                key={item.id}
                image={item.image}
                title={item.title}
                id={item.id}
                description={item.description}
                address={item.address}
              />
            );
          })}
        </ul>
      ) : (
        <p>Uh-Oh! No Meetups created.</p>
      )}
    </>
  );
}
