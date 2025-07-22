import React from "react";

function Card(props) {
  //console.log(props);
  return (
    <div>
      <img
        src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
      <h1 className="text-2xl bg-green-400 p-4 rounded-md">
        A card for photos
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quis
        beatae. Odio aut nihil illo minima natus incidunt eos molestias eius,
        aliquid sapiente doloremque enim commodi deleniti quis recusandae
        aperiam.
      </p>
    </div>
  );
}

export default Card;
