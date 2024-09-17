import React from "react";
import Particles from "react-tsparticles";
import reactParticle from "../Assets/Particles_img/React_ParticlesImage.png";
import nodeParticle from "../Assets/Particles_img/Node_ParticlesImage.png";
import HTML_Particles from "../Assets/Particles_img/HTML_ParticlesImage.png";
import CSS_Particles from "../Assets/Particles_img/CSS_ParticlesImage.png";
import javascriptParticle from "../Assets/Javascript_icon.png";
import MysqlParticle from "../Assets/MySQL_icon.jpg";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          // Optional: Set background color
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 40,
              duration: 2,
              opacity: 0.9,
              size: 10,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 50,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff", // Star color
          },
          links: {
            color: "#ffffff",
            distance: 15,
            enable: false, // Set to false to avoid connecting lines between stars
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 0.5, // Adjust the speed of the star movement
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 20, // Number of asteroids
          },
          opacity: {
            value: 0.7,
          },
          shape: {
            type: "image", // Set the shape type to image
            image: [
              {
                src: reactParticle, // Replace with your asteroid image path
                width: 25,
                height: 25,
              },
              {
                src: nodeParticle, // You can use multiple asteroid images
                width: 25,
                height: 25,
              },
              {
                src: javascriptParticle, // You can use multiple asteroid images
                width: 25,
                height: 25,
              },
              {
                src: HTML_Particles, // You can use multiple asteroid images
                width: 25,
                height: 25,
              },
              {
                src: CSS_Particles, // You can use multiple asteroid images
                width: 25,
                height: 25,
              },
              {
                src: MysqlParticle, // You can use multiple asteroid images
                width: 25,
                height: 25,
              },
            ],
          },
          size: {
            value: { min: 5, max: 15 }, // Size of asteroids
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Ensures particles stay in the background
      }}
    />
  );
}

export default Particle;
