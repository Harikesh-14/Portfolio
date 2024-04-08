import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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
    tags: ["React", "Redux", "Node.js", "Express", "MongoDB", "Tailwind"],
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
  "Rust",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;