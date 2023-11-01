import libratech from "../projects_img/libratech.png";
import datm from "../projects_img/datm.png";
import beart from "../projects_img/beart.png";
import iskolar from "../projects_img/iskolar.png";
import cake from "../projects_img/cake.png";
import crispy from "../projects_img/crispyking.png";
import emenu from "../projects_img/emenu.png";
import zlec from "../projects_img/zlec.png";
import burger from "../projects_img/burger.png";
import voting from "../projects_img/voting.png";
import roadgrill from "../projects_img/roadgrill.png";
import onlinegrading from "../projects_img/onlinegrading.png";
import pesoearn from "../projects_img/pesoearn.png";
import movingmarket from "../projects_img/movingmarket.png";
import projbyte from "../projects_img/projbyte.png";
import dmusic from "../projects_img/dmusic.png";
import d3ks from "../projects_img/d3ks.png";
import dcalculator from "../projects_img/dcalculator.png";
import dconverter from "../projects_img/dconverter.png";
import dyoutube from "../projects_img/dyoutube.png";
import dyt from "../projects_img/dyt.png";
import ictmod from "../projects_img/ictmod.png";
import digipa from "../projects_img/digipa.png";

import Projdetails from "./projdetails";

import OwlCarousel from "react-owl-carousel";
import React, { useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Projs = () => {
  const options = {
    autoplayTimeout: 1500,
    autoplay: true,
    dots: false,
    nav: false,
    margin: 15,
    loop: true,
    center: true,
    dotData: false,
    autoplayHoverPause: true,
    animateIn: true,
    animateOut: true,
    responsive: {
      1100: {
        items: 3,
      },
      724: {
        items: 2,
      },
      500: {
        items: 1,
      },
      370: {
        items: 1,
        innerHeight: "100%",
        innerWidth: "100%",
      },
    },
  };

  const projects = [
    {
      name: "Libratech",
      description:
        "LibraTech is a modern library management system designed to streamline library operations, improve patron experience, and enhance library engagement.",
      tech: ["Desktop", "Java", "Firebase", "SMTP"],
      img: libratech,
    },
    {
      name: "D3KS Keylogger",
      description:
        "It is a powerful software application that discreetly records and captures keystrokes entered on a computer system. This specialized keylogger not only logs the keystrokes but also incorporates an SMTP (Simple Mail Transfer Protocol)functionality.",
      tech: ["Desktop", "C#", "SMTP"],
      img: d3ks,
    },
    {
      name: "DATM Bank - Bank Management System",
      description:
        "dATM Bank System is a user-friendly banking system with various features. Authenticated users can perform tasks like checking their account balance, withdrawing and depositing cash, viewing account details, transaction history, changing account number and PIN, transferring money, and signing out.",
      tech: ["Console", "C"],
      img: datm,
    },
    {
      name: "DYoutube Downloader",
      description:
        "YouTube downloader written in C# with an API is a powerful tool that allows users to download videos from YouTube directly to their devices. It leverages the capabilities of the YouTube API to fetch video metadata and download the corresponding video files.",
      tech: ["Android", "C#", "API"],
      img: dyoutube,
    },
    {
      name: "Cake Onlineshop",
      description:
        "Concept mobile application for contactless doing of order and has an inventory system feature. It is a Digital-Menu where customers can select their desired order and get the total expenses in an instant. It supports in-store purchase and door-to-door delivery purchase.",
      tech: ["Android", "Java", "Firebase"],
      img: cake,
    },
    {
      name: "Crispy King",
      description:
        "Concept mobile application for contactless doing of order and has an inventory system feature. It is a Digital-Menu where customers can select their desired order and get the total expenses in an instant. It supports in-store purchase and door-to-door delivery purchase.",
      tech: ["Android", "Java", "Firebase"],
      img: crispy,
    },
    {
      name: "EMenu",
      description:
        "Concept mobile application for contactless doing of order and has an inventory system feature. It is a Digital-Menu where customers can select their desired order and get the total expenses in an instant. It supports in-store purchase and door-to-door delivery purchase.",
      tech: ["Android", "Java", "Firebase"],
      img: emenu,
    },
    {
      name: "ZLEC",
      description:
        "It is a social media platform that give user information, tutorials and awareness about cybersecurity. This app contains categories that represents hacking methods and there's a feed that can post their concerns.",
      tech: ["Android", "Java", "Firebase"],
      img: zlec,
    },
    {
      name: "Angels Burger Inventory System",
      description:
        "Commisioned by a student from Surigao State University, It is an automatic inventory system where staff can inventorize their products and materials. It has also an administrator access where managers can see their staffs' records. With this app there is a transparency that minimizes corruption and it helps the stores to be on track with the number of its material and products.",
      tech: ["Android", "Java", "Firebase"],
      img: burger,
    },
    {
      name: "SSCT Voting System",
      description:
        "Commissioned by a Student from Surigao State University, Its main function is an automated voting system where admistrators can add candidates and their respective positions. After the voting process the mobile application hosted in FireBase will automatically compute the tally of votes gathered during the contactless election.",
      tech: ["Android", "Java", "Firebase"],
      img: voting,
    },
    {
      name: "Online Grading System",
      description:
        "It is a concept of Automatic Information Management System a.k.a AIMS, It is a platform where professors or the management can add students, do announcements and can post the ratings/grades of students enrolled in their institution.",
      tech: ["Android", "Java", "Firebase"],
      img: onlinegrading,
    },
    {
      name: "Roadgrill Order System",
      description:
        "Concept mobile application for contactless doing of order and has an inventory system feature. It is a Digital-Menu where customers can select their desired order and get the total expenses in an instant. It supports in-store purchase and door-to-door delivery purchase.",
      tech: ["Android", "Java", "Firebase"],
      img: roadgrill,
    },
    {
      name: "Projbyte",
      description:
        "Projbyte is an innovative and dynamic mobile application that serves as a thriving hub for developers and technology students. This powerful platform fosters a vibrant community where users can explore a diverse range of engaging content such as blogs, tutorials, and forums.",
      tech: ["Android", "Java", "Firebase"],
      img: projbyte,
    },
    {
      name: "Beart",
      description:
        "Beart is an app that allows artist known by uploading it online and earning money through sales or commission pay.",
      tech: ["Android", "Java", "Firebase"],
      img: beart,
    },
    {
      name: "Pesoearn",
      description:
        "Pesoearn is a mobile application that offers users the opportunity to earn rewards while enjoying various audio content such as podcasts, audiobooks, and more. By listening to these audio materials, users can accumulate credits based on the value set by advertisers and sponsors.",
      tech: ["Android", "Java", "Firebase"],
      img: pesoearn,
    },
    {
      name: "Moving Market",
      description:
        "Moving Market is a mobile application designed to make shopping for vegetables and necessary items a convenient and hassle-free experience. With its innovative features, the app allows users to access a map that displays the available markets in their vicinity. Users can explore the map, identify nearby markets, and select the ones that suit their preferences. The app provides a platform for users to browse and purchase a variety of vegetables and other essential items directly from these markets.",
      tech: ["Android", "Java", "Firebase"],
      img: beart,
    },
    {
      name: "DMusic Player",
      description:
        "Java Firebase Console Music Player is a feature-rich app that offers users a seamless music streaming and downloading experience. Developed in Java, the app integrates with Firebase, a popular cloud-based platform, to provide a robust backend infrastructure.",
      tech: ["Android", "Java", "Firebase"],
      img: dmusic,
    },
    {
      name: "DCalculator",
      description:
        "The Simple Calculator with Clean UI is a user-friendly app that provides basic arithmetic functionality in a minimalist and intuitive interface. Designed for simplicity and ease of use, this calculator allows users to perform simple calculations quickly and efficiently.",
      tech: ["Android", "Java", "Firebase"],
      img: dcalculator,
    },
    {
      name: "DConverter",
      description:
        "The All-in-One Converter app in Java is a comprehensive tool that simplifies conversions in math, geometry, and measurements. It offers users a convenient way to convert values between different units and systems, making calculations and conversions hassle-free.",
      tech: ["Android", "Java", "Firebase"],
      img: dconverter,
    },
    {
      name: "ICT Modules",
      description:
        "ICT Modules is the app that stores many documents and lessons about ICT strand which free to browse to all users in order to learn. There is a quiz also to test your knowledge.",
      tech: ["Android", "Java", "Firebase"],
      img: ictmod,
    },
    {
      name: "Iskolar ng Bayan",
      description:
        "An application that hosts compiled, comprehensive, and concise reviewers for college entrance examinations. It features groupchats to keep students updated, It has video manuals and readable modules.",
      tech: ["Android", "Java", "Firebase", "Python"],
      img: iskolar,
    },
    {
      name: "DIGIPA",
      description:
        "An application that hosts compiled, comprehensive, and concise reviewers for college entrance examinations. It features groupchats to keep students updated, It has video manuals and readable modules.",
      tech: ["Android", "Java", "Firebase", "Python"],
      img: digipa,
    },
    {
      name: "Kemitoon",
      description:
        "An application that hosts compiled, comprehensive, and concise reviewers for college entrance examinations. It features groupchats to keep students updated, It has video manuals and readable modules.",
      tech: ["Android", "Java", "Firebase"],
      img: iskolar,
    },
    {
      name: "Cash Management System in Tisa",
      description:
        "An application that hosts compiled, comprehensive, and concise reviewers for college entrance examinations. It features groupchats to keep students updated, It has video manuals and readable modules.",
      tech: ["Android", "Java", "Firebase"],
      img: iskolar,
    },
  ];

  

  return (
    <div>
      <OwlCarousel className="owl-carousel owl-theme" {...options}>
        {projects.map((projectDetails, index) => (
          <Projdetails ProjDetails={projectDetails} key={index} />
        ))}
      </OwlCarousel>
    </div>
  );
};
export default Projs;
