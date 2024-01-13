const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

const companies = [
  {
    id: "qatar-airways",
    name: "Qatar Airways",
    websiteUrl: "https://www.qatarairways.com/",
    logoUrl: "qatar-airways-logo.jpg",
    bannerUrl: "qatar-airways-banner.jpg",
    description: `
Welcome to Qatar Airways, where excellence meets sophistication in every journey. As the national carrier of the State of Qatar, we take pride in offering an unparalleled travel experience. Our distinguished fleet, combining cutting-edge technology with unmatched comfort, connects you to destinations across the globe seamlessly. Indulge in luxury redefined, where every detail is crafted to perfection, making every moment a celebration of opulence.
        
`,
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
    category: "CUSTOMER SERVICE",
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

  {
    id: "woqod-fuel-attendant",
    companyId: "woqod",
    title: "Fuel Station Attendant",
    type: "Full-time",
    level: "Entry",
    applicantLocation: "In-country",
    salary: "QAR 3,000 – 4,000",
    description: `
## Job Description

Woqod is looking for dedicated individuals to join our team as **Fuel Station Attendants** at the entry level. As a Fuel Station Attendant, you will play a crucial role in ensuring the smooth and efficient operation of our fuel stations. Responsibilities include dispensing fuel, providing excellent customer service, and maintaining a clean and organized work environment.

### Responsibilities

- Dispense fuel and complete transactions accurately
- Provide exceptional customer service to fuel station patrons
- Perform routine checks and maintenance of fuel station equipment
- Monitor fuel inventory and report any discrepancies
- Ensure cleanliness and safety standards are maintained at the fuel station

### Requirements

- High school diploma or equivalent
- Strong customer service and communication skills
- Ability to handle cash transactions accurately
- Basic mechanical aptitude for equipment maintenance
- Attention to detail and commitment to safety

### Benefits

- Competitive salary
- Training and on-the-job learning opportunities
- Employee discounts on fuel and merchandise
- Opportunities for career advancement within the company

If you are a reliable and customer-focused individual seeking a dynamic role in the fuel industry, we invite you to apply for the Fuel Station Attendant position at Woqod.
      `,
  },
  {
    id: "woqod-customer-service",
    companyId: "woqod",
    title: "Customer Service Representative",
    type: "Full-time",
    level: "Entry",
    applicantLocation: "In-country",
    salary: "QAR 5,000 – 6,000",
    description: `
## Job Description

Woqod is seeking enthusiastic individuals to join our team as **Customer Service Representatives** at the entry level. As a Customer Service Representative, you will be the face of our fuel stations, providing exceptional service to customers. Responsibilities include assisting customers with fuel transactions, addressing inquiries, and ensuring a positive overall experience.

### Responsibilities

- Greet and assist customers with fuel transactions
- Answer inquiries and provide information about products and services
- Resolve customer concerns and escalate issues when necessary
- Maintain a clean and organized customer service area
- Collaborate with the team to ensure smooth operations

### Requirements

- High school diploma or equivalent
- Strong communication and interpersonal skills
- Ability to handle customer inquiries and resolve issues
- Basic computer skills for transaction processing
- Positive attitude and willingness to learn

### Benefits

- Competitive salary
- Training and development opportunities
- Employee discounts
      `,
  },
  {
    id: "woqod-maintenance-tech",
    companyId: "woqod",
    title: "Maintenance Technician",
    type: "Full-time",
    level: "Entry",
    applicantLocation: "In-country",
    salary: "QAR 4,000 – 5,000",
    description: `
## Job Description

Woqod is looking for skilled individuals to join our team as **Maintenance Technicians** at the entry level. As a Maintenance Technician, you will be responsible for the upkeep and maintenance of our fuel stations. This includes routine inspections, repairs, and ensuring that all equipment is in optimal working condition.

### Responsibilities

- Perform routine maintenance and repairs on fuel station equipment
- Conduct inspections to identify potential issues and address them promptly
- Collaborate with other team members to coordinate maintenance schedules
- Ensure compliance with safety standards and regulations
- Maintain accurate records of maintenance activities

### Requirements

- High school diploma or equivalent
- Basic knowledge of mechanical and electrical systems
- Previous experience in maintenance or a related field is a plus
- Ability to work independently and in a team
- Strong problem-solving skills

### Benefits

- Competitive salary
- Training and on-the-job learning opportunities
- Opportunities for skill development and advancement
- Employee discounts on fuel and merchandise

If you are a proactive and detail-oriented individual with a knack for maintenance, we encourage you to apply for the Maintenance Technician position at Woqod.
      `,
  },
];

async function main() {
  try {
    companies.map(
      async ({ id, name, websiteUrl, logoUrl, bannerUrl, description }) => {
        await database.company.upsert({
          where: {
            id,
          },
          update: {
            id,
            name,
            websiteUrl,
            logoUrl,
            bannerUrl,
            description,
          },
          create: {
            id,
            name,
            websiteUrl,
            logoUrl,
            bannerUrl,
            description,
          },
        });
      },
    );

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
