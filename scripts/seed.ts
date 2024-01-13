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
    id: "qa-software-developer",
    companyId: "qatar-airways",
    title: "Software Developer",
    type: "Full-time",
    level: "Entry",
    applicantLocation: "In-country",
    salary: "QAR 10,000 – 12,000",
    description: `
## Job Description

Qatar Airways is seeking a talented and motivated individual to join our team as a **Software Developer** at the entry level. As a Software Developer, you will be an integral part of our IT department, contributing to the development and enhancement of software solutions that drive the success of one of the world's leading airlines.

### Responsibilities

- Collaborate with cross-functional teams to understand software requirements
- Develop, test, and maintain high-quality software applications
- Debug and troubleshoot software issues to ensure optimal performance
- Participate in code reviews and provide constructive feedback
- Stay updated on industry trends and incorporate best practices in software development

### Requirements

- Bachelor's degree in Computer Science, Software Engineering, or related field
- Strong understanding of programming languages such as Java, Python, or JavaScript
- Familiarity with software development methodologies and tools
- Ability to work collaboratively in a team environment
- Eagerness to learn and adapt to new technologies

### Benefits

- Competitive salary
- Professional development opportunities
- Comprehensive health and wellness benefits
- Employee travel perks

If you are a passionate and driven individual with a desire to contribute to the world of aviation through software development, we encourage you to apply for this entry-level Software Developer position at Qatar Airways.
    `,
  },
  {
    id: "qa-marketing-specialist",
    companyId: "qatar-airways",
    title: "Marketing Specialist",
    type: "Full-time",
    level: "Mid-level",
    applicantLocation: "In-country",
    salary: "QAR 15,000 – 18,000",
    description: `
## Job Description

Qatar Airways is looking for an experienced **Marketing Specialist** to join our dynamic marketing team. As a Marketing Specialist, you will play a crucial role in developing and implementing marketing strategies to promote our brand and services.

### Responsibilities

- Collaborate with cross-functional teams to create and execute marketing campaigns
- Conduct market research to identify trends and opportunities
- Develop engaging content for various marketing channels
- Monitor and analyze the performance of marketing initiatives
- Work closely with external agencies and partners

### Requirements

- Bachelor's degree in Marketing, Business, or a related field
- Proven experience in marketing, with a focus on digital marketing
- Strong analytical and creative skills
- Excellent communication and interpersonal abilities
- Ability to work in a fast-paced and dynamic environment

### Benefits

- Competitive salary
- Opportunities for career advancement
- Health and wellness benefits
- Employee discounts on travel

If you are a results-driven marketing professional looking to contribute to the success of a global airline, we invite you to apply for the Marketing Specialist position at Qatar Airways.
    `,
  },
  {
    id: "qa-customer-service-representative",
    companyId: "qatar-airways",
    title: "Customer Service Representative",
    type: "Full-time",
    level: "Entry",
    applicantLocation: "In-country",
    salary: "QAR 8,000 – 10,000",
    description: `
## Job Description

Qatar Airways is hiring enthusiastic individuals to join our team as **Customer Service Representatives**. In this role, you will be the first point of contact for our valued customers, providing excellent service and ensuring a positive experience.

### Responsibilities

- Assist customers with inquiries, bookings, and issue resolution
- Handle customer complaints and provide timely solutions
- Maintain accurate records of customer interactions
- Collaborate with other departments to address customer needs
- Stay informed about products, services, and policies

### Requirements

- High school diploma or equivalent
- Excellent communication and interpersonal skills
- Ability to handle challenging situations with empathy
- Basic computer skills
- Willingness to work in a shift-based environment, including weekends and holidays

### Benefits

- Competitive salary
- Training and development opportunities
- Health and wellness benefits
- Employee discounts on travel

If you are a people-oriented individual with a passion for providing exceptional customer service, we encourage you to apply for the Customer Service Representative position at Qatar Airways.
    `,
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
        await database.job.upsert({
          where: {
            id,
          },
          update: {
            id,
            applicantLocation,
            description,
            level,
            salary,
            title,
            type,
            companyId,
          },
          create: {
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
