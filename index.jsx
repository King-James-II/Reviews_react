import React from "react";
import ReactDOM from "react-dom";

// Testimonial component to display individual testimonials
export const Testimonial = (props) => {
    // Destructuring props for easier access
    const { title, author, date, stars, content } = props;
   return (
      <div className="card">
            <h2>{title}</h2>
            <h5>Submitted by {author} on {date}</h5>
            <h5>{stars} / 5 Stars</h5>
            <p>{content}</p>
        </div>
   );
}

// App component to render multiple testimonials
export const App = () => {
 return (
    <div>
        {/* Testimonial components with sample data */}
        <Testimonial title="Great atmosphere!" author="Sheila S." date="11/10/20" stars={4} content="Great food, wait staff, and ambience. We'll be returning!" />
        <Testimonial title="Loved the Apps!" author="Kim Z." date="10/15/20" stars={3} content="The appetizers were fantastic, but the overall menu could be expanded." />
        <Testimonial title="Needs improving" author="Riley T." date="8/24/22" stars={3} content="The app is good for the most part, but one bug that I found is when I try to change menus it gets stuck sometimes." />
    </div>
 )
}

// Render the App component into the root element
ReactDOM.render(
 <App />,
 document.getElementById("root")
);
