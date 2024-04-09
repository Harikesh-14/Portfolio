import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import blogAppImg from "@/public/BlogApp.png";
import fileOpsImg from "@/public/FileOps.png";
import veggiesMartImg from "@/public/Veggies-Mart.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Developer Intern",
    location: "Centre for Railway Information Systems, New Delhi, India",
    description:
      "I worked here as a frontend developer intern. I worked on the frontend of a websites using JSP, HTML, CSS and JavaScript.",
    icon: React.createElement(LuGraduationCap),
    date: "5th June 2023 - 5th July 2023",
  },
  {
    title: "Backend Developer",
    location: "SRM University, Chennai, India",
    description:
      "I am currently working in the tech team of Directorate of Student's Affairs (DSA) as a backend developer. I'm working on a project that involves building a website for the club. DSA organizes the cultural fest of the university",
    icon: React.createElement(CgWorkAlt),
    date: "August 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "BlogApp",
    description:
      "A blog app where users can create, read, update and delete blog posts. It secures user's data with authentication.",
    tags: ["React", "Mongo DB", "Tailwind", "MongoDB", "Express", "Node.js"],
    imageUrl: blogAppImg,
  },
  {
    title: "E-Commerce Store",
    description:
      "An e-commerce store where users can buy vegetables. It also has authentication. It secures user's data with authentication.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    imageUrl: veggiesMartImg,
  },
  {
    title: "File System CLI Tool",
    description:
      "A CLI tool for file operations like copying, moving, deleting and creating files and directories. It's built with Rust. It uses the std::fs module.",
    tags: ["Rust", "fs"],
    imageUrl: fileOpsImg,
  },
  {
    title: "TodoX CLI Tool",
    description:
      "A CLI tool for managing todos. It's built with Rust and uses sqlite3 for the database. It uses the std::fs module.",
    tags: ["Rust", "sqlite3"],
    imageUrl: fileOpsImg,
  },
] as const;

export const skillsData = [
  "C/C++",
  "Python",
  "Rust",
  "HTML",
  "CSS",
  "Tailwind",
  "Bootstrap",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Framer Motion",
  "Git",
] as const;