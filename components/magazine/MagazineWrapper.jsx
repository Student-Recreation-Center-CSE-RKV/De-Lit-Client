import React from "react";
import Magazine from "./Magazine";
import styles from "./Magazine.module.css";

if (!Promise.withResolvers) {
  if (typeof window !== 'undefined') {
    // @ts-expect-error This does not exist outside of polyfill which this is doing
    window.Promise.withResolvers = function () {
      let resolve, reject
      const promise = new Promise((res, rej) => {
        resolve = res
        reject = rej
      })
      return { promise, resolve, reject }
    }
  } else {
    // @ts-expect-error This does not exist outside of polyfill which this is doing
    global.Promise.withResolvers = function () {
      let resolve, reject
      const promise = new Promise((res, rej) => {
        resolve = res
        reject = rej
      })
      return { promise, resolve, reject }
    }
  }
}


export default function MagazineWrapper() {
  return (
    <div className={styles.container}>
      <Magazine
        title="Canyon"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        image="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop="
      />
      <Magazine
        title="Lake"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        image="https://images.unsplash.com/photo-1726564594505-52d6ace52710?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
      />
      <Magazine
        title="Mountains"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        image="https://images.unsplash.com/photo-1608659597669-b45511779f93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
      />{" "}
      <Magazine
        title="go"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        image="https://images.unsplash.com/photo-1705721357357-ab87523248f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJvb2tzfGVufDB8fDB8fHww"
      />{" "}
      <Magazine
        title="down"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        image="https://images.unsplash.com/photo-1512503959943-9d35a3636b51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D"
      />{" "}
      <Magazine
        title="eat"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        image="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d3JpdGluZ3xlbnwwfHwwfHx8MA%3D%3D"
      />
    </div>
  );
}
