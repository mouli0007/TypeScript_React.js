#### CMD 

   npx create-react-app --templeate typescript
   
   ########### Basics Checking of PROPS ##########3
  
   import React, { ReactElement } from "react";

     type HeadingProps = { 
       title: string;
      };

     const Heading = ({ title }: HeadingProps): ReactElement => {
         return <h1>{title}</h1>;
       };

       export default Heading;
	   
	   
	   import React, { ReactElement, ReactNode } from "react";

       type SectionProps = {
          title: string;
          children: ReactNode;
        };

     const Section = ({ children, title = "My Sub Heading !" }: SectionProps) => {
         return (
            <section>
           <h2>{title}</h2>
           <h2>{children}</h2>
           </section>
        );
      };

     export default Section;


################ TypeScript with Hooks #################

####### 1=> UseState 

import React, { ReactNode } from "react";
import { useState } from "react";

type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};
const Counter = ({ setCount, children }: CounterProps) => {
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
      <br />
      <br />
      {children}
    </>
  );
};

export default Counter;


####### TypeScript a Simple Way to Render a List Items ###################

import React from "react";

interface ListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}

const List = <T extends {}>({ items, render }: ListProps<T>) => {
  return (
    <>
      <ul>
        {items.map((item, i) => {
          return (
            <>
              <li key={i}>{render(item)}</li>
            </>
          );
        })}
      </ul>
    </>
  );
};

####       <List items={["coffee", "Milk", "TEA", "CODE"]} render={render} />


export default List;
