import { useEffect, useState, useRef } from "react";
import { useWindowSize } from "./Hooks";
import { Card, Header, Search } from "./Components";

import {
  account,
  eyecam,
  airFilterCompany,
  faceit,
  insure,
  loopStudio,
  manage,
  myHome,
  photosnap,
  shortly,
} from "../assets";

const App = () => {
  const [tags, setTags] = useState([]);
  const [clear, setClear] = useState(false);
  const addTag = (tag) => {
    const exist = tags.includes(tag);
    if (exist) return;
    setTags([...tags, tag]);
  };

  const removeTag = (id) => {
    setTags(tags.filter((el, i) => i != id));
  };

  useEffect(() => {
    clear && setTags([]);
    setClear(false);
  }, [clear]);

  const Data = [
    {
      id: 1,
      company: "Photosnap",
      logo: photosnap,
      new: true,
      featured: true,
      position: "Senior Frontend Developer",
      role: "Frontend",
      level: "Senior",
      postedAt: "1d ago",
      contract: "Full Time",
      location: "USA Only",
      languages: ["HTML", "CSS", "JavaScript"],
      tools: [],
    },
    {
      id: 2,
      company: "Manage",
      logo: manage,
      new: true,
      featured: true,
      position: "Fullstack Developer",
      role: "Fullstack",
      level: "Midweight",
      postedAt: "1d ago",
      contract: "Part Time",
      location: "Remote",
      languages: ["Python"],
      tools: ["React"],
    },
    {
      id: 3,
      company: "Account",
      logo: account,
      new: true,
      featured: false,
      position: "Junior Frontend Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "2d ago",
      contract: "Part Time",
      location: "USA Only",
      languages: ["JavaScript"],
      tools: ["React", "Sass"],
    },
    {
      id: 4,
      company: "MyHome",
      logo: myHome,
      new: false,
      featured: false,
      position: "Junior Frontend Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "5d ago",
      contract: "Contract",
      location: "USA Only",
      languages: ["CSS", "JavaScript"],
      tools: [],
    },
    {
      id: 5,
      company: "Loop Studios",
      logo: loopStudio,
      new: false,
      featured: false,
      position: "Software Engineer",
      role: "Fullstack",
      level: "Midweight",
      postedAt: "1w ago",
      contract: "Full Time",
      location: "Worldwide",
      languages: ["JavaScript"],
      tools: ["Ruby", "Sass"],
    },
    {
      id: 6,
      company: "FaceIt",
      logo: faceit,
      new: false,
      featured: false,
      position: "Junior Backend Developer",
      role: "Backend",
      level: "Junior",
      postedAt: "2w ago",
      contract: "Full Time",
      location: "UK Only",
      languages: ["Ruby"],
      tools: ["RoR"],
    },
    {
      id: 7,
      company: "Shortly",
      logo: shortly,
      new: false,
      featured: false,
      position: "Junior Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "2w ago",
      contract: "Full Time",
      location: "Worldwide",
      languages: ["HTML", "JavaScript"],
      tools: ["Sass"],
    },
    {
      id: 8,
      company: "Insure",
      logo: insure,
      new: false,
      featured: false,
      position: "Junior Frontend Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "2w ago",
      contract: "Full Time",
      location: "USA Only",
      languages: ["JavaScript"],
      tools: ["Vue", "Sass"],
    },
    {
      id: 9,
      company: "Eyecam Co.",
      logo: eyecam,
      new: false,
      featured: false,
      position: "Full Stack Engineer",
      role: "Fullstack",
      level: "Midweight",
      postedAt: "3w ago",
      contract: "Full Time",
      location: "Worldwide",
      languages: ["JavaScript", "Python"],
      tools: ["Django"],
    },
    {
      id: 10,
      company: "The Air Filter Company",
      logo: airFilterCompany,
      new: false,
      featured: false,
      position: "Front-end Dev",
      role: "Frontend",
      level: "Junior",
      postedAt: "1mo ago",
      contract: "Part Time",
      location: "Worldwide",
      languages: ["JavaScript"],
      tools: ["React", "Sass"],
    },
  ];

  return (
    <>
      <main>
        <header>
          <Header />
        </header>
        <Search tags={tags} setClear={setClear} removeTag={removeTag} />
        <div className="searchOut">
          {Data.map((item, i) => {
            if (tags.length == 0) {
              return <Card data={item} key={i} addTag={addTag} />;
            } else {
              const ftags = [item.role, item.level, ...item.languages];
              for (const tg of tags) {
                if (ftags.includes(tg)) {
                  return <Card data={item} key={i} addTag={addTag} />;
                }
              }
            }
          })}
        </div>
      </main>
    </>
  );
};

export default App;
