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
