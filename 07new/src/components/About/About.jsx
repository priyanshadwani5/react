import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 text-gray-700 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-8 lg:items-center lg:gap-12">
          {/* Image Section */}
          <div className="md:w-5/12 lg:w-5/12">
            <img
              src="https://cdn.pixabay.com/photo/2020/06/29/16/24/meeting-5354275_1280.png"
              alt="Team Collaboration"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-3xl text-gray-900 font-bold md:text-4xl">
              Empowering Teams with Smart Collaboration
            </h2>
            <p className="mt-6 text-gray-600">
              We believe that great things are built by great teams. Our
              platform enhances team coordination, streamlines task management,
              and helps you deliver results faster with less hassle.
            </p>
            <p className="mt-4 text-gray-600">
              Whether you're tracking projects or improving communication, our
              tools are built to scale with your goals. Join thousands of teams
              boosting their productivity every day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
