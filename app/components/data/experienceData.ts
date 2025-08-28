export interface ExperienceItem {
  id: number;
  startDate: string; // Format: "YYYY-MM"
  endDate: string | "Present"; // Format: "YYYY-MM" or "Present"
  title: string;
  organization: string;
  type: "work" | "education" | "organization" | "course"; // Category type
  status: "completed" | "ongoing"; // Current status
  details: string[];
  skills?: string[]; // Optional: skills gained
  location?: string; // Optional: location
}

export const experienceData: ExperienceItem[] = [
  {
    id: 0,
    startDate: "2025-06",
    endDate: "Present",
    title: "Information System and Network Analyst",
    organization: "FMIPA USK - Syiah Kuala University",
    type: "work",
    status: "ongoing",
    location: "Banda Aceh, Indonesia",
    skills: ["Web Development", "System Administration", "Database Management", "Server Monitoring"],
    details: [
      "Maintained and developed features for FMIPA USK academic websites.",
      "Managed and monitored web servers to ensure stable operations.",
      "Performed daily app and database backups to maintain uptime.",
    ],
  },
  {
    id: 1,
    startDate: "2024-07",
    endDate: "2024-08",
    title: "Backend Developer Intern",
    organization: "DPMPTSP Aceh",
    type: "work",
    status: "completed",
    location: "Banda Aceh, Indonesia",
    skills: ["PHP", "Laravel", "MySQL", "REST API", "Backend Development"],
    details: [
      "Managed backend development for government web applications.",
      "Implemented, tested, and maintained backend services.",
      "Collaborated with the development team to enhance application performance.",
    ],
  },
  {
    id: 2,
    startDate: "2024-02",
    endDate: "2024-07",
    title: "Mobile Development Cohort",
    organization: "Bangkit Academy - Google, Tokopedia, Gojek, Traveloka",
    type: "education",
    status: "completed",
    location: "Remote Program",
    skills: ["Android Development", "Kotlin", "Flutter", "Cloud Computing", "Soft Skills"],
    details: [
      "Received comprehensive training in mobile app development.",
      "Developed technical, soft skills, and English proficiency to prepare for career opportunities.",
    ],
  },
  {
    id: 3,
    startDate: "2024-02",
    endDate: "2025-01",
    title: "General Secretary",
    organization: "HMIF USK - Informatics Student Association",
    type: "organization",
    status: "completed",
    location: "Syiah Kuala University",
    skills: ["Leadership", "Communication", "Project Management", "Strategic Planning", "Teamwork"],
    details: [
      "Oversaw daily activities, managed correspondence, and provided strategic input to the chairman.",
      "Facilitated communication among members and coordinated organizational projects.",
      "Fostered teamwork synergy to achieve HMIF USK’s goals.",
    ],
  },
  {
    id: 4,
    startDate: "2023-02",
    endDate: "2024-01",
    title: "Staff of Student Welfare Management Department",
    organization: "HMIF USK - Informatics Student Association",
    type: "organization",
    status: "completed",
    location: "Syiah Kuala University",
    skills: ["Program Development", "Collaboration", "Event Organization"],
    details: [
      "Participated in formulating innovative plans and developing new programs.",
      "Collaborated with the department head, deputy head, and secretary.",
      "Established a work environment that promotes tranquility, enjoyment, and comfort.",
    ],
  },
  {
    id: 5,
    startDate: "2024-07",
    endDate: "2024-12",
    title: "DevOps Course Assistant",
    organization: "Syiah Kuala University",
    type: "course",
    status: "completed",
    location: "Banda Aceh, Indonesia",
    skills: ["DevOps", "Linux", "CI/CD", "Containerization", "Teaching"],
    details: [
      "Supported the delivery of DevOps principles and practices.",
      "Assisted in presenting course material and guiding students.",
    ],
  },
  {
    id: 6,
    startDate: "2024-01",
    endDate: "2024-06",
    title: "Software Engineering Course Assistant",
    organization: "Syiah Kuala University",
    type: "course",
    status: "completed",
    location: "Banda Aceh, Indonesia",
    skills: ["SCRUM", "Agile", "Mendix", "Teaching"],
    details: [
      "Taught SCRUM and Agile concepts and implemented them in Mendix applications.",
      "Helped students understand adaptive and collaborative software development methodologies.",
    ],
  },
  {
    id: 7,
    startDate: "2023-07",
    endDate: "2023-12",
    title: "Advanced Database Course Assistant",
    organization: "Syiah Kuala University",
    type: "course",
    status: "completed",
    location: "Banda Aceh, Indonesia",
    skills: ["Oracle SQL", "Database Design", "Teaching"],
    details: [
      "Specialized in instructing Oracle SQL Developer.",
      "Provided hands-on guidance to help students master complex database concepts.",
    ],
  },
  {
    id: 8,
    startDate: "2023-01",
    endDate: "2023-06",
    title: "Database Course Assistant",
    organization: "Syiah Kuala University",
    type: "course",
    status: "completed",
    location: "Banda Aceh, Indonesia",
    skills: ["MySQL", "Database Fundamentals", "SQL", "Teaching"],
    details: [
      "Specialized in instructing MySQL and teaching basic database principles.",
      "Provided a dynamic learning environment to support hands-on MySQL development.",
    ],
  },
];


// Utility functions for data manipulation
export const sortExperienceByDate = (experiences: ExperienceItem[], order: 'asc' | 'desc' = 'desc'): ExperienceItem[] => {
  return [...experiences].sort((a, b) => {
    const aDate = new Date(a.startDate + '-01').getTime();
    const bDate = new Date(b.startDate + '-01').getTime();
    return order === 'desc' ? bDate - aDate : aDate - bDate;
  });
};

export const getExperienceByType = (experiences: ExperienceItem[], type: ExperienceItem['type']): ExperienceItem[] => {
  return experiences.filter(exp => exp.type === type);
};

export const getOngoingExperiences = (experiences: ExperienceItem[]): ExperienceItem[] => {
  return experiences.filter(exp => exp.status === 'ongoing');
};

export const formatDateRange = (startDate: string, endDate: string): string => {
  const start = new Date(startDate + '-01');
  const startFormatted = start.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  
  if (endDate === 'Present') {
    return `${startFormatted} - Present`;
  }
  
  const end = new Date(endDate + '-01');
  const endFormatted = end.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  
  return `${startFormatted} - ${endFormatted}`;
};

export const calculateDuration = (startDate: string, endDate: string): string => {
  const start = new Date(startDate + '-01');
  const end = endDate === 'Present' ? new Date() : new Date(endDate + '-01');
  
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30.44)); // Average days per month
  
  if (diffMonths < 12) {
    return `${diffMonths} month${diffMonths > 1 ? 's' : ''}`;
  } else {
    const years = Math.floor(diffMonths / 12);
    const remainingMonths = diffMonths % 12;
    
    let result = `${years} year${years > 1 ? 's' : ''}`;
    if (remainingMonths > 0) {
      result += ` ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
    }
    return result;
  }
};
