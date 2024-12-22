import React from "react";
import DummyImage from "../assets/memberImages/JohnDoe.jpg";

export default function TeamCards({
  name = "John Doe",
  post = "Member",
  data = "Bio not provided",
  linkedin,
  instagram,
  phone,
  img,
  github,
}) {
  return (
    <div className="p-4 lg:w-1/2">
      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <img
          alt="team"
          className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
          src={img || DummyImage}
        />
        <div className="flex-grow sm:pl-8">
          <h2 className="title-font font-medium text-lg text-gray-200">{name}</h2>
          <h3 className="text-gray-300 mb-3">{post}</h3>
          <p className="mb-4 text-gray-300">{data}</p>
          <span className="inline-flex">
            {linkedin && (
              <a
                className="text-gray-500 hover:text-blue-600"
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            )}
            {instagram && (
              <a
                className="ml-2 text-gray-500 hover:text-pink-500"
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 3a5 5 0 00-5 5v8a5 5 0 005 5h8a5 5 0 005-5V8a5 5 0 00-5-5H8zm8 2a3 3 0 013 3v8a3 3 0 01-3 3H8a3 3 0 01-3-3V8a3 3 0 013-3h8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M17.5 6.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
                </svg>
              </a>
            )}
            {phone && (
              <a
                className="ml-2 text-gray-500 hover:text-lime-500"
                href={`tel:${phone}`}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            )}
            {github && (
              <a
                className="ml-2 text-gray-500 hover:text-rose-500"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.57v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.83 1.23 1.83 1.23 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.31-5.47-1.34-5.47-5.96 0-1.31.47-2.39 1.23-3.23-.12-.31-.53-1.57.11-3.28 0 0 1-.32 3.28 1.23.96-.27 2-.4 3.03-.4 1.03 0 2.07.13 3.03.4 2.28-1.55 3.28-1.23 3.28-1.23.64 1.71.23 2.97.11 3.28.76.84 1.23 1.92 1.23 3.23 0 4.63-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.21v3.27c0 .31.22.69.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"></path>
                </svg>
              </a>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
