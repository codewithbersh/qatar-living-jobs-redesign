const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

const companies = [
  {
    id: "qatar-airways",
    name: "Qatar Airways",
    websiteUrl: "https://www.qatarairways.com/",
    logoUrl: "qatar-airways-logo.jpg",
    bannerUrl: "qatar-airways-banner.jpg",
  },
  {
    id: "qatar-national-bank",
    name: "Qatar National Bank",
    websiteUrl: "https://www.qnb.com/",
    logoUrl: "qatar-national-bank-logo.jpg",
    bannerUrl: "qatar-national-bank-banner.jpg",
  },
  {
    id: "vodafone-qatar",
    name: "Vodafone Qatar",
    websiteUrl: "https://www.vodafone.qa/",
    logoUrl: "vodafone-qatar-logo.jpg",
    bannerUrl: "vodafone-qatar-banner.jpg",
  },
  {
    id: "woqod",
    name: "Woqod",
    websiteUrl: "https://www.woqod.com.qa/",
    logoUrl: "woqod-logo.jpg",
    bannerUrl: "woqod-banner.jpg",
  },
  {
    id: "doha-bank",
    name: "Doha Bank",
    websiteUrl: "https://www.dohabank.com.qa/",
    logoUrl: "doha-bank-logo.jpg",
    bannerUrl: "doha-bank-banner.jpg",
  },
  {
    id: "ooredoo",
    name: "Ooredoo",
    websiteUrl: "https://www.ooredoo.qa/",
    logoUrl: "ooredoo-logo.jpg",
    bannerUrl: "ooredoo-banner.jpg",
  },
];

const jobs = [
  {
    id: "qa-aircraft-engineer",
    companyId: "qatar-airways",
    title: "Aircraft Engineer",
    description: `
        ## Job Description
  
        Qatar Airways is looking for a skilled Aircraft Engineer to join our dynamic team. In this role, you will be responsible for ensuring the airworthiness of our fleet and implementing maintenance procedures. If you have a passion for aviation and a strong technical background, we want to hear from you!
  
        ### Responsibilities
  
        - Conduct regular inspections and maintenance on aircraft.
        - Diagnose and troubleshoot mechanical and electrical issues.
        - Collaborate with cross-functional teams to ensure compliance with safety standards.
        - Keep detailed records of maintenance activities.
  
        ### Requirements
  
        - Bachelor's degree in Aerospace Engineering or related field.
        - Proven experience as an Aircraft Engineer.
        - Strong knowledge of aviation regulations and safety standards.
        - Excellent problem-solving skills.
  
        ## Type: Full-time
        ## Level: Senior
        ## Applicant Location: In-country
        ## Salary: Competitive
      `,
    type: "Full-time",
    level: "Senior",
    applicantLocation: "In-country",
    salary: "QAR 15,000 – 17,000",
  },
  {
    id: "qa-software-developer",
    companyId: "qatar-airways",
    title: "Software Developer",
    description: `
        ## Job Description
  
        Qatar Airways is seeking a talented Software Developer to contribute to the development of cutting-edge aviation software solutions. As a member of our IT team, you will play a key role in designing and implementing software applications that enhance the efficiency of our operations.
  
        ### Responsibilities
  
        - Collaborate with cross-functional teams to gather and define software requirements.
        - Design, code, test, and deploy high-quality software solutions.
        - Troubleshoot and resolve software issues.
        - Stay updated on industry trends and technologies.
  
        ### Requirements
  
        - Bachelor's degree in Computer Science or related field.
        - Proven experience in software development.
        - Proficiency in programming languages such as Java or C++.
        - Strong problem-solving and communication skills.
  
        ## Type: Full-time
        ## Level: Entry
        ## Applicant Location: In-country
        ## Salary: Competitive
      `,
    type: "Full-time",
    level: "Entry",
    applicantLocation: "In-country",
    salary: "QAR 10,000 – 12,000",
  },
  {
    id: "qa-marketing-specialist",
    companyId: "qatar-airways",
    title: "Marketing Specialist",
    description: `
        ## Job Description
  
        Join Qatar Airways as a Marketing Specialist and be part of a team responsible for promoting our brand and services globally. In this role, you will develop and implement marketing strategies to drive awareness and engagement.
  
        ### Responsibilities
  
        - Develop and execute marketing campaigns across various channels.
        - Conduct market research to identify trends and opportunities.
        - Collaborate with creative teams to produce compelling marketing materials.
        - Analyze and report on the performance of marketing initiatives.
  
        ### Requirements
  
        - Bachelor's degree in Marketing or related field.
        - Proven experience in marketing, with a focus on digital channels.
        - Strong analytical and project management skills.
        - Excellent communication and interpersonal skills.
  
        ## Type: Full-time
        ## Level: Mid
        ## Applicant Location: In-country
        ## Salary: Competitive
      `,
    type: "Full-time",
    level: "Mid",
    applicantLocation: "In-country",
    salary: "QAR 8,000 - 12,000",
  },
];

async function main() {
  try {
    jobs.map(
      async ({
        id,
        companyId,
        title,
        description,
        applicantLocation,
        level,
        type,
        salary,
      }) => {
        await database.job.create({
          data: {
            id,
            applicantLocation,
            description,
            level,
            salary,
            title,
            type,
            companyId,
          },
        });
      },
    );

    console.log("Success");
  } catch (error) {
    console.error("Error seeding");
  } finally {
    await database.$disconnect();
  }
}

main();
