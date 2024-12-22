import React from "react";

export default function HomeBottom() {
  return (
    <div
      className="overflow-hidden"
      style={{
        width: "80vw",
        marginLeft: "10vw",
        marginTop: "890px",
        position: "relative",
      }}
    >
      <h1
        className="font-medium text-5xl mt-0 mb-10 text-gray-400 text-center md:text-left"
        style={{
          letterSpacing: "-0.02em",
          fontWeight: "800",
        }}
      >
        Departments
      </h1>

      {/* Web Development Section */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-[20%] lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="w-36 object-cover object-center rounded mx-auto block"
              alt="Web Development"
              src="https://thumbs.dreamstime.com/z/web-development-icon-trendy-flat-vector-white-background-programming-collection-illustration-can-be-use-mobile-eps-130326341.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-10 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
              Web Development
            </h1>
            <p className="mb-8 leading-relaxed text-gray-200">
              Learn to design and build modern, responsive websites using the
              latest frameworks and technologies like React, Tailwind, and more.
              Gain practical experience by working on real-world projects.
            </p>
          </div>
        </div>
      </section>

      {/* Android Development Section */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-[20%] lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="w-36 object-cover object-center rounded mx-auto block"
              alt="Android Development"
              src="https://www.pinclipart.com/picdir/big/376-3765631_android-png-photo-android-app-development-icon-clipart.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-10 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
              Android Development
            </h1>
            <p className="mb-8 leading-relaxed text-gray-200">
              Dive into Android app development and create robust, user-friendly
              mobile applications. Learn Kotlin, Jetpack Compose, and industry
              best practices.
            </p>
          </div>
        </div>
      </section>

      {/* AI/ML Section */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-[20%] lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="w-36 object-cover object-center rounded mx-auto block"
              alt="AI/ML"
              src="https://www.meritas.in/wp-content/uploads/2022/04/AI-ML-sevices.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-10 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
              AI & ML
            </h1>
            <p className="mb-8 leading-relaxed text-gray-200">
              Explore the world of artificial intelligence and machine learning.
              Work on data-driven projects and understand cutting-edge
              algorithms to solve real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Competitive Programming Section */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-[20%] lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="w-36 object-cover object-center rounded mx-auto block"
              alt="Competitive Programming"
              src="https://static.vecteezy.com/system/resources/previews/015/086/787/original/programming-skills-glyph-icon-vector.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-10 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
              Competitive Programming
            </h1>
            <p className="mb-8 leading-relaxed text-gray-200">
              Master problem-solving skills with regular practice in competitive
              programming. Participate in contests, workshops, and collaborate
              with peers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
