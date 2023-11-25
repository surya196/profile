import docker from "../assets/svg/skills/docker.svg";
import javascript from "../assets/svg/skills/javascript.svg";
import typescript from "../assets/svg/skills/typescript.svg";
import postgresql from "../assets/svg/skills/postgresql.svg";
import java from "../assets/svg/skills/java.svg";
import git from "../assets/svg/skills/git.svg";
import graphql from "../assets/svg/skills/graphql.svg";
import mysql from "../assets/svg/skills/mysql.svg";
import node from "../assets/svg/skills/node.png";
import elastic from "../assets/svg/skills/elastic.png";
import redis from "../assets/svg/skills/redis.png";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "docker":
      return docker;
    case "javascript":
      return javascript;
    case "typescript":
      return typescript;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    case "java":
      return java;
    case "git":
      return git;
    case "graphql":
      return graphql;
    case "node":
      return node;
    case "elastic":
      return elastic;
    case "":
      return redis;
    default:
      break;
  }
};
