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

// const jobs = [
//   {
//     id: "qa-software-developer",
//     companyId: "qatar-airways",
//     title: "Software Developer",
//     type: "Full-time",
//     level: "Entry",
//     applicantLocation: "In-country",
//     salary: "QAR 10,000 – 12,000",
//     description: `
// ## Job Description

// Qatar Airways is seeking a talented and motivated individual to join our team as a **Software Developer** at the entry level. As a Software Developer, you will be an integral part of our IT department, contributing to the development and enhancement of software solutions that drive the success of one of the world's leading airlines.

// ### Responsibilities

// - Collaborate with cross-functional teams to understand software requirements
// - Develop, test, and maintain high-quality software applications
// - Debug and troubleshoot software issues to ensure optimal performance
// - Participate in code reviews and provide constructive feedback
// - Stay updated on industry trends and incorporate best practices in software development

// ### Requirements

// - Bachelor's degree in Computer Science, Software Engineering, or related field
// - Strong understanding of programming languages such as Java, Python, or JavaScript
// - Familiarity with software development methodologies and tools
// - Ability to work collaboratively in a team environment
// - Eagerness to learn and adapt to new technologies

// ### Benefits

// - Competitive salary
// - Professional development opportunities
// - Comprehensive health and wellness benefits
// - Employee travel perks

// If you are a passionate and driven individual with a desire to contribute to the world of aviation through software development, we encourage you to apply for this entry-level Software Developer position at Qatar Airways.
//     `,
//   },
//   {
//     id: "qa-marketing-specialist",
//     companyId: "qatar-airways",
//     title: "Marketing Specialist",
//     type: "Full-time",
//     level: "Mid-level",
//     applicantLocation: "In-country",
//     salary: "QAR 15,000 – 18,000",
//     description: `
// ## Job Description

// Qatar Airways is looking for an experienced **Marketing Specialist** to join our dynamic marketing team. As a Marketing Specialist, you will play a crucial role in developing and implementing marketing strategies to promote our brand and services.

// ### Responsibilities

// - Collaborate with cross-functional teams to create and execute marketing campaigns
// - Conduct market research to identify trends and opportunities
// - Develop engaging content for various marketing channels
// - Monitor and analyze the performance of marketing initiatives
// - Work closely with external agencies and partners

// ### Requirements

// - Bachelor's degree in Marketing, Business, or a related field
// - Proven experience in marketing, with a focus on digital marketing
// - Strong analytical and creative skills
// - Excellent communication and interpersonal abilities
// - Ability to work in a fast-paced and dynamic environment

// ### Benefits

// - Competitive salary
// - Opportunities for career advancement
// - Health and wellness benefits
// - Employee discounts on travel

// If you are a results-driven marketing professional looking to contribute to the success of a global airline, we invite you to apply for the Marketing Specialist position at Qatar Airways.
//     `,
//   },
//   {
//     id: "qa-customer-service-representative",
//     companyId: "qatar-airways",
//     title: "Customer Service Representative",
//     type: "Full-time",
//     level: "Entry",
//     applicantLocation: "In-country",
//     salary: "QAR 8,000 – 10,000",
//     category: "CUSTOMER SERVICE",
//     description: `
// ## Job Description

// Qatar Airways is hiring enthusiastic individuals to join our team as **Customer Service Representatives**. In this role, you will be the first point of contact for our valued customers, providing excellent service and ensuring a positive experience.

// ### Responsibilities

// - Assist customers with inquiries, bookings, and issue resolution
// - Handle customer complaints and provide timely solutions
// - Maintain accurate records of customer interactions
// - Collaborate with other departments to address customer needs
// - Stay informed about products, services, and policies

// ### Requirements

// - High school diploma or equivalent
// - Excellent communication and interpersonal skills
// - Ability to handle challenging situations with empathy
// - Basic computer skills
// - Willingness to work in a shift-based environment, including weekends and holidays

// ### Benefits

// - Competitive salary
// - Training and development opportunities
// - Health and wellness benefits
// - Employee discounts on travel

// If you are a people-oriented individual with a passion for providing exceptional customer service, we encourage you to apply for the Customer Service Representative position at Qatar Airways.
//     `,
//   },

//   {
//     id: "woqod-fuel-attendant",
//     companyId: "woqod",
//     title: "Fuel Station Attendant",
//     type: "Full-time",
//     level: "Entry",
//     applicantLocation: "In-country",
//     salary: "QAR 3,000 – 4,000",
//     description: `
// ## Job Description

// Woqod is looking for dedicated individuals to join our team as **Fuel Station Attendants** at the entry level. As a Fuel Station Attendant, you will play a crucial role in ensuring the smooth and efficient operation of our fuel stations. Responsibilities include dispensing fuel, providing excellent customer service, and maintaining a clean and organized work environment.

// ### Responsibilities

// - Dispense fuel and complete transactions accurately
// - Provide exceptional customer service to fuel station patrons
// - Perform routine checks and maintenance of fuel station equipment
// - Monitor fuel inventory and report any discrepancies
// - Ensure cleanliness and safety standards are maintained at the fuel station

// ### Requirements

// - High school diploma or equivalent
// - Strong customer service and communication skills
// - Ability to handle cash transactions accurately
// - Basic mechanical aptitude for equipment maintenance
// - Attention to detail and commitment to safety

// ### Benefits

// - Competitive salary
// - Training and on-the-job learning opportunities
// - Employee discounts on fuel and merchandise
// - Opportunities for career advancement within the company

// If you are a reliable and customer-focused individual seeking a dynamic role in the fuel industry, we invite you to apply for the Fuel Station Attendant position at Woqod.
//       `,
//   },
//   {
//     id: "woqod-customer-service",
//     companyId: "woqod",
//     title: "Customer Service Representative",
//     type: "Full-time",
//     level: "Entry",
//     applicantLocation: "In-country",
//     salary: "QAR 5,000 – 6,000",
//     description: `
// ## Job Description

// Woqod is seeking enthusiastic individuals to join our team as **Customer Service Representatives** at the entry level. As a Customer Service Representative, you will be the face of our fuel stations, providing exceptional service to customers. Responsibilities include assisting customers with fuel transactions, addressing inquiries, and ensuring a positive overall experience.

// ### Responsibilities

// - Greet and assist customers with fuel transactions
// - Answer inquiries and provide information about products and services
// - Resolve customer concerns and escalate issues when necessary
// - Maintain a clean and organized customer service area
// - Collaborate with the team to ensure smooth operations

// ### Requirements

// - High school diploma or equivalent
// - Strong communication and interpersonal skills
// - Ability to handle customer inquiries and resolve issues
// - Basic computer skills for transaction processing
// - Positive attitude and willingness to learn

// ### Benefits

// - Competitive salary
// - Training and development opportunities
// - Employee discounts
//       `,
//   },
//   {
//     id: "woqod-maintenance-tech",
//     companyId: "woqod",
//     title: "Maintenance Technician",
//     type: "Full-time",
//     level: "Entry",
//     applicantLocation: "In-country",
//     salary: "QAR 4,000 – 5,000",
//     description: `
// ## Job Description

// Woqod is looking for skilled individuals to join our team as **Maintenance Technicians** at the entry level. As a Maintenance Technician, you will be responsible for the upkeep and maintenance of our fuel stations. This includes routine inspections, repairs, and ensuring that all equipment is in optimal working condition.

// ### Responsibilities

// - Perform routine maintenance and repairs on fuel station equipment
// - Conduct inspections to identify potential issues and address them promptly
// - Collaborate with other team members to coordinate maintenance schedules
// - Ensure compliance with safety standards and regulations
// - Maintain accurate records of maintenance activities

// ### Requirements

// - High school diploma or equivalent
// - Basic knowledge of mechanical and electrical systems
// - Previous experience in maintenance or a related field is a plus
// - Ability to work independently and in a team
// - Strong problem-solving skills

// ### Benefits

// - Competitive salary
// - Training and on-the-job learning opportunities
// - Opportunities for skill development and advancement
// - Employee discounts on fuel and merchandise

// If you are a proactive and detail-oriented individual with a knack for maintenance, we encourage you to apply for the Maintenance Technician position at Woqod.
//       `,
//   },
// ];

// const jobs = [
//   {
//     id: "db-customer-service-representative",
//     companyId: "doha-bank",
//     title: "Customer Service Representative",
//     type: "Full-time",
//     level: "Entry",
//     applicantLocation: "In-country",
//     salary: "QAR 3,000 – 4,000",
//     description: `
// ## Job Description

// Join the Doha Bank team as a **Customer Service Representative** and play a key role in delivering exceptional service to our valued customers. In this position, you will interact with customers to address inquiries, resolve issues, and promote our products and services.

// ### Responsibilities

// - Assist customers with account inquiries, transactions, and requests
// - Resolve customer complaints and escalate complex issues as needed
// - Educate customers about our products, services, and digital channels
// - Process account openings, closings, and updates accurately and efficiently
// - Maintain a positive and professional attitude in all customer interactions

// ### Requirements

// - High school diploma or equivalent
// - Prior experience in customer service or a related field preferred
// - Strong communication and interpersonal skills
// - Ability to multitask and work effectively in a fast-paced environment
// - Basic computer proficiency

// ### Benefits

// - Competitive salary and benefits package
// - Opportunities for career growth and advancement
// - Comprehensive training and ongoing support
// - Employee discounts and perks

// If you are passionate about providing excellent customer service, we encourage you to apply for the Customer Service Representative position at Doha Bank.
//       `,
//   },
//   {
//     id: "db-digital-marketing-specialist",
//     companyId: "doha-bank",
//     title: "Digital Marketing Specialist",
//     type: "Full-time",
//     level: "Mid",
//     applicantLocation: "In-country",
//     salary: "QAR 8,000 – 10,000",
//     description: `
// ## Job Description

// Doha Bank is seeking a talented **Digital Marketing Specialist** to drive our online presence and engagement strategies. In this role, you will develop and implement digital marketing campaigns across various channels to promote our brand and services.

// ### Responsibilities

// - Develop and execute digital marketing campaigns to drive brand awareness and lead generation
// - Manage social media accounts and engage with followers to build community and drive engagement
// - Optimize website content and user experience to improve online visibility and conversion rates
// - Analyze campaign performance metrics and provide insights and recommendations for optimization
// - Stay up-to-date with digital marketing trends and best practices

// ### Requirements

// - Bachelor's degree in Marketing, Communications, or related field
// - Proven experience in digital marketing, with a focus on social media and content marketing
// - Strong understanding of digital marketing tools and platforms
// - Analytical mindset with the ability to interpret data and draw actionable insights
// - Excellent communication and collaboration skills

// ### Benefits

// - Competitive salary and performance-based bonuses
// - Opportunities for professional development and career advancement
// - Collaborative and innovative work environment
// - Employee wellness programs and benefits

// If you are a creative and results-driven marketer with a passion for digital, we invite you to apply for the Digital Marketing Specialist position at Doha Bank.
//       `,
//   },
//   {
//     id: "db-it-security-analyst",
//     companyId: "doha-bank",
//     title: "IT Security Analyst",
//     type: "Full-time",
//     level: "Mid",
//     applicantLocation: "In-country",
//     salary: "QAR 9,000 – 12,000",
//     description: `
// ## Job Description

// Doha Bank is seeking an experienced **IT Security Analyst** to join our Information Security team. In this role, you will be responsible for implementing and maintaining security measures to protect our IT infrastructure and data from cyber threats.

// ### Responsibilities

// - Monitor and analyze security events and incidents to identify potential threats or vulnerabilities
// - Implement and maintain security controls, including firewalls, intrusion detection systems, and encryption protocols
// - Conduct security assessments and penetration tests to identify and mitigate security risks
// - Develop and maintain security policies, procedures, and standards
// - Provide guidance and support to IT teams on security best practices and compliance requirements

// ### Requirements

// - Bachelor's degree in Computer Science, Information Security, or related field
// - Certified Information Systems Security Professional (CISSP) or similar certification preferred
// - Proven experience in IT security, including threat detection and incident response
// - Strong understanding of network security principles and technologies
// - Excellent problem-solving and decision-making skills

// ### Benefits

// - Competitive salary and benefits package
// - Opportunities for professional growth and development
// - Collaborative and supportive work environment
// - Employee wellness programs and perks

// If you are a proactive and knowledgeable IT professional with a passion for security, we encourage you to apply for the IT Security Analyst position at Doha Bank.
//       `,
//   },
//   {
//     id: "db-human-resources-manager",
//     companyId: "Doha Bank",
//     title: "doha-bank",
//     type: "Full-time",
//     level: "Senior",
//     applicantLocation: "In-country",
//     salary: "QAR 12,000 – 15,000",
//     description: `
// ## Job Description

// Doha Bank is seeking a strategic and experienced **Human Resources Manager** to lead our HR team. In this role, you will be responsible for developing and implementing HR strategies, policies, and programs to support the organization's goals and objectives.

// ### Responsibilities

// - Develop and implement HR strategies and initiatives aligned with the organization's goals
// - Oversee all aspects of the employee lifecycle, including recruitment, onboarding, performance management, and offboarding
// - Provide leadership and guidance to the HR team, fostering a culture of collaboration, innovation, and continuous improvement
// - Ensure compliance with labor laws, regulations, and company policies
// - Drive employee engagement and retention initiatives to create a positive work environment

// ### Requirements

// - Bachelor's degree in Human Resources, Business Administration, or related field; HR certification preferred
// - Proven experience in HR management, with a focus on strategic planning and organizational development
// - Strong understanding of HR best practices and employment law
// - Excellent leadership and communication skills
// - Ability to effectively manage multiple priorities and stakeholders.`,
//   },
// ];

// const jobs = [
//   {
//     id: "qnb-credit-analyst",
//     companyId: "qatar-national-bank",
//     title: "Credit Analyst",
//     type: "Full-time",
//     level: "Mid",
//     applicantLocation: "In-country",
//     salary: "QAR 8,000 - 10,000",
//     description: `
// ## Job Description

// Qatar National Bank is seeking a talented **Credit Analyst** to join our dynamic team. As a Credit Analyst, you will be responsible for assessing creditworthiness, analyzing financial data, and making recommendations to minimize credit risk.

// ### Responsibilities

// - Evaluate credit applications and financial statements
// - Perform industry and market research
// - Analyze credit data and financial statements to determine the degree of risk
// - Prepare credit proposals and reports
// - Monitor credit portfolio performance and identify potential risks

// ### Requirements

// - Bachelor's degree in finance, accounting, or related field
// - Proven experience as a credit analyst or similar role
// - Strong analytical and problem-solving skills
// - Knowledge of financial analysis software and databases
// - Excellent communication and presentation abilities

// ### Benefits

// - Competitive salary and benefits package
// - Opportunities for career advancement and professional development
// - Comprehensive training and support
// - Employee wellness programs and discounts

// If you possess strong analytical skills and a passion for finance, apply now to become a Credit Analyst at Qatar National Bank.
//     `,
//   },
//   {
//     id: "qnb-relationship-manager",
//     companyId: "qatar-national-bank",
//     title: "Relationship Manager",
//     type: "Full-time",
//     level: "Senior",
//     applicantLocation: "In-country",
//     salary: "QAR 10,000 - 12,000",
//     description: `
// ## Job Description

// Join Qatar National Bank as a **Relationship Manager** and become part of our dedicated team serving our valued clients. As a Relationship Manager, you will be responsible for managing client accounts, providing financial advice, and promoting our products and services.

// ### Responsibilities

// - Build and maintain strong relationships with clients
// - Understand clients' financial goals and provide tailored solutions
// - Cross-sell banking products and services to meet clients' needs
// - Monitor client accounts and proactively address any issues or concerns
// - Collaborate with internal teams to ensure excellent customer service

// ### Requirements

// - Bachelor's degree in finance, business administration, or related field
// - Proven experience in relationship management or sales within the banking industry
// - Excellent communication and negotiation skills
// - Strong understanding of financial products and services
// - Customer-focused with a proactive attitude

// ### Benefits

// - Competitive salary and performance-based incentives
// - Comprehensive benefits package including health insurance and retirement plans
// - Ongoing training and professional development opportunities
// - Employee discounts and perks

// If you have a passion for building relationships and helping clients achieve their financial goals, apply now to join Qatar National Bank as a Relationship Manager.
//     `,
//   },
//   {
//     id: "qnb-operations-specialist",
//     companyId: "qatar-national-bank",
//     title: "Operations Specialist",
//     type: "Full-time",
//     level: "Entry",
//     applicantLocation: "In-country",
//     salary: "QAR 5,000 - 7,000",
//     description: `
// ## Job Description

// Qatar National Bank is seeking an energetic **Operations Specialist** to join our Operations team. In this role, you will be responsible for ensuring the efficient and accurate processing of banking transactions and providing support to internal stakeholders.

// ### Responsibilities

// - Process various banking transactions accurately and efficiently
// - Perform account maintenance and reconcile discrepancies
// - Provide support to internal teams on operational issues
// - Ensure compliance with banking regulations and policies
// - Identify opportunities for process improvements and efficiency gains

// ### Requirements

// - Bachelor's degree in business administration, finance, or related field
// - Strong attention to detail and accuracy
// - Excellent organizational and time management skills
// - Ability to work effectively in a fast-paced environment
// - Basic knowledge of banking operations and regulations

// ### Benefits

// - Competitive salary and benefits package
// - Opportunities for career advancement within the organization
// - Comprehensive training and development programs
// - Employee wellness initiatives and discounts

// If you are a detail-oriented individual with a passion for operations, apply now to join Qatar National Bank as an Operations Specialist.
//     `,
//   },
//   {
//     id: "qnb-wealth-advisor",
//     companyId: "qatar-national-bank",
//     title: "Wealth Advisor",
//     type: "Full-time",
//     level: "Senior",
//     applicantLocation: "In-country",
//     salary: "QAR 12,000 - 15,000",
//     description: `
// ## Job Description

// Qatar National Bank is looking for an experienced **Wealth Advisor** to join our Wealth Management team. As a Wealth Advisor, you will provide personalized financial advice and investment solutions to high-net-worth clients.

// ### Responsibilities

// - Build and maintain relationships with high-net-worth clients
// - Conduct comprehensive financial assessments and risk analysis
// - Develop customized wealth management plans based on client objectives
// - Recommend investment strategies and products to optimize returns
// - Monitor client portfolios and provide ongoing support and guidance

// ### Requirements

// - Bachelor's degree in finance, economics, or related field
// - Certified Financial Planner (CFP) designation preferred
// - Proven experience in wealth management or financial advisory
// - Strong knowledge of investment products and financial markets
// - Excellent communication and interpersonal skills

// ### Benefits

// - Competitive salary and performance-based bonuses
// - Comprehensive benefits package including health insurance and retirement plans
// - Professional development and training opportunities
// - Access to exclusive investment opportunities and resources

// If you have a passion for wealth management and a track record of success, apply now to join Qatar National Bank as a Wealth Advisor.
//     `,
//   },
//   {
//     id: "qnb-digital-marketing-specialist",
//     companyId: "qatar-national-bank",
//     title: "Digital Marketing Specialist",
//     type: "Full-time",
//     level: "Mid",
//     applicantLocation: "In-country",
//     salary: "QAR 8,000 - 10,000",
//     description: `
// ## Job Description

// Qatar National Bank is seeking a creative and results-driven **Digital Marketing Specialist** to join our marketing team. As a Digital Marketing Specialist, you will be responsible for developing and executing digital marketing campaigns to drive brand awareness and customer engagement.

// ### Responsibilities

// - Develop and implement digital marketing strategies to achieve business objectives
// - Manage social media channels and online advertising campaigns
// - Create compelling content for digital channels, including websites, blogs, and social media
// - Analyze campaign performance and optimize strategies for maximum effectiveness
// - Stay updated on industry trends and best practices in digital marketing

// ### Requirements

// - Bachelor's degree in marketing, communications, or related field
// - Proven experience in digital marketing, preferably in the financial services industry
// - Strong understanding of digital marketing tools and platforms
// - Excellent written and verbal communication skills
// - Analytical mindset with the ability to interpret data and make data-driven decisions

// ### Benefits

// - Competitive salary and performance-based bonuses
// - Comprehensive benefits package including health insurance and retirement plans
// - Opportunities for professional development and career growth
// - Collaborative and dynamic work environment

// If you are passionate about digital marketing and have a knack for driving results, apply now to join Qatar National Bank as a Digital Marketing Specialist.
//     `,
//   },
// ];

const jobs = [
  {
    id: "qa-flight-attendant",
    companyId: "qatar-airways",
    title: "Flight Attendant",
    type: "Full-time",
    level: "Entry",
    applicantLocation: "In-country",
    salary: "QAR 8,000 – 12,000 ",
    description: `
## Job Description

Qatar Airways is seeking dedicated individuals to join our team as **Flight Attendants**. As a Flight Attendant, you will play a crucial role in ensuring the safety, comfort, and well-being of our passengers throughout their journey.

### Responsibilities

- Provide exceptional customer service to passengers on board
- Ensure the safety and security of passengers and crew during flights
- Demonstrate emergency procedures and assist passengers during emergencies
- Serve meals and beverages in accordance with airline policies
- Maintain cleanliness and orderliness of the aircraft cabin

### Requirements

- High school diploma or equivalent
- Excellent communication and interpersonal skills
- Ability to work effectively in a team environment
- Customer service experience preferred
- Fluent in English (additional languages are a plus)

### Benefits

- Competitive salary and benefits package
- Opportunities for career advancement within the airline industry
- Comprehensive training and ongoing support
- Travel privileges for employees and their families

If you are passionate about delivering exceptional service and thrive in a dynamic environment, apply now to become a Flight Attendant with Qatar Airways.
    `,
  },
  {
    id: "qa-aircraft-maintenance-engineer",
    companyId: "qatar-airways",
    title: "Aircraft Maintenance Engineer",
    type: "Full-time",
    level: "Mid",
    applicantLocation: "In-country",
    salary: "QAR 12,000 – 15,000",
    description: `
## Job Description

Join Qatar Airways as an **Aircraft Maintenance Engineer** and be part of our dedicated team responsible for maintaining our fleet of aircraft to the highest safety standards. As an Aircraft Maintenance Engineer, you will play a crucial role in ensuring the airworthiness of our aircraft.

### Responsibilities

- Perform scheduled and unscheduled maintenance tasks on aircraft
- Troubleshoot and diagnose aircraft systems and components
- Conduct inspections and repairs in accordance with regulatory requirements
- Document maintenance activities and maintain accurate records
- Collaborate with other maintenance personnel to ensure timely completion of tasks

### Requirements

- Bachelor's degree in aeronautical engineering or related field
- Aircraft Maintenance Engineer (AME) license or equivalent certification
- Proven experience in aircraft maintenance, preferably with commercial aircraft
- Strong technical skills and knowledge of aircraft systems
- Attention to detail and adherence to safety protocols

### Benefits

- Competitive salary and benefits package
- Opportunities for professional development and training
- Travel privileges for employees and their families
- Dynamic and supportive work environment

If you have a passion for aviation and a strong technical background, apply now to join Qatar Airways as an Aircraft Maintenance Engineer.
    `,
  },
  {
    id: "qa-customer-service-agent",
    companyId: "qatar-airways",
    title: "Customer Service Agent",
    type: "Full-time",
    level: "Entry",
    applicantLocation: "In-country",
    salary: "QAR 6,000 – 7,000",
    description: `
## Job Description

Qatar Airways is seeking enthusiastic individuals to join our team as **Customer Service Agents**. As a Customer Service Agent, you will be the first point of contact for passengers at the airport, providing assistance and ensuring a seamless travel experience.

### Responsibilities

- Assist passengers with check-in, baggage handling, and boarding procedures
- Provide information and assistance to passengers regarding flights, schedules, and airport facilities
- Handle passenger inquiries, complaints, and requests in a professional manner
- Coordinate with other airport personnel to ensure efficient operations
- Uphold Qatar Airways' commitment to exceptional customer service

### Requirements

- High school diploma or equivalent
- Excellent communication and interpersonal skills
- Customer service experience preferred
- Ability to work in a fast-paced and dynamic environment
- Fluent in English (additional languages are a plus)

### Benefits

- Competitive salary and benefits package
- Opportunities for career advancement within the airline industry
- Comprehensive training and ongoing support
- Travel privileges for employees and their families

If you are passionate about delivering excellent customer service and enjoy working in a dynamic environment, apply now to become a Customer Service Agent with Qatar Airways.
    `,
  },
  {
    id: "qa-pilot",
    companyId: "qatar-airways",
    title: "Pilot",
    type: "Full-time",
    level: "Senior",
    applicantLocation: "In-country",
    salary: "Competitive",
    description: `
## Job Description

Qatar Airways is looking for experienced **Pilots** to join our team and operate our fleet of modern aircraft. As a Pilot, you will play a crucial role in safely transporting passengers and cargo to destinations around the world.

### Responsibilities

- Operate aircraft in accordance with company policies and procedures
- Ensure the safety and comfort of passengers and crew during flights
- Adhere to all aviation regulations and guidelines
- Communicate effectively with air traffic control and other aviation personnel
- Continuously monitor and assess weather conditions and aircraft performance

### Requirements

- Valid Commercial Pilot License (CPL) or Airline Transport Pilot License (ATPL)
- Minimum flight hours depending on the position (e.g., First Officer, Captain)
- Excellent piloting skills and knowledge of aircraft systems
- Ability to work effectively in a dynamic and challenging environment
- Strong decision-making and problem-solving abilities

### Benefits

- Competitive salary and benefits package
- Opportunities for career advancement and professional development
- Travel privileges for employees and their families
- Dynamic and supportive work environment

If you are a skilled and experienced Pilot looking for an exciting opportunity, apply now to join Qatar Airways and take your career to new heights.
    `,
  },
  {
    id: "qa-marketing-manager",
    companyId: "qatar-airways",
    title: "Marketing Manager",
    type: "Full-time",
    level: "Manager",
    applicantLocation: "In-country",
    salary: "Competitive",
    description: `
## Job Description

Qatar Airways is seeking a dynamic and experienced **Marketing Manager** to lead our marketing efforts and promote our brand globally. As a Marketing Manager, you will develop and execute strategic marketing initiatives to drive awareness and engagement.

### Responsibilities

- Develop and implement marketing strategies to achieve business objectives
- Lead cross-functional teams to execute marketing campaigns and initiatives
- Analyze market trends and consumer insights to identify opportunities for growth
- Manage marketing budgets and allocate resources effectively
- Measure and analyze campaign performance to optimize results

### Requirements

- Bachelor's degree in marketing, communications, or related field
- Proven experience in marketing management, preferably in the airline industry
- Strong leadership and team management skills
- Excellent communication and interpersonal abilities
- Strategic thinker with a results-driven mindset

### Benefits

- Competitive salary and benefits package
- Opportunities for career growth and advancement
- Travel privileges for employees and their families
- Dynamic and collaborative work environment

If you have a passion for marketing and a track record of success, apply now to join Qatar Airways as a Marketing Manager and help shape the future of aviation.
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
