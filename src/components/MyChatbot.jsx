import React, { useState } from "react";
import { Container, Paper, IconButton, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { motion } from "framer-motion";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! Welcome to our software house. What's your name?" },
  ]);
  const [userInput, setUserInput] = useState("");
  const [showChatbot, setShowChatbot] = useState(false);

  
const islamicNames = [
"Abdullah", "Owais", "Naseer", "Samee", "Saad", "Taha", "Jazil", "Zayan", "Muzammil",
"Tuba", "Nayaz", "Maaz", "Umair", "Kamran", "Ahmed", "Ayman", "Hussain", "Bilal", "Yasin",
"Sulaiman", "Ismail", "Haroon", "Zaid", "Ammar", "Ibrahim", "Salman", "Ali", "Khalid",
"Zubair", "Farhan", "Imran", "Mustafa", "Hasan", "Hussain", "Hamza", "Rashid", "Yusuf",
"Faisal", "Riyaz", "Junaid", "Fahad", "Saqib", "Raza", "Asif", "Bashir", "Adil", "Irfan",
"Tariq", "Rizwan", "Shahid", "Sami", "Murtaza", "Raheel", "Feroz", "Usama", "Qasim",
"Arsalan", "Zakir", "Noman", "Hashim", "Tanveer", "Zaki", "Talha", "Asad", "Sadiq", "Azeem",
"Majid", "Fawad", "Umer", "Mubashir", "Rameez", "Amjad", "Jawad", "Adeel", "Noman", "Arif",
"Nabeel", "Sajid", "Suhail", "Zafar", "Shabbir", "Zeeshan", "Waseem", "Waqas", "Rafiq",
"Shakeel", "Zahid", "Yahya", "Shahbaz", "Anees", "Ibtisam", "Ghazanfar", "Ghulam", "Sabir",
"Kamran", "Latif", "Masood", "Aftab", "Jameel", "Azhar", "Aqeel", "Mahmood", "Mujahid",
"Saqlain", "Munir", "Aziz", "Murad", "Naseem", "Samiullah", "Abrar", "Ayaz", "Jibran", "Shan",
"Idrees", "Sarfraz", "Kashif", "Zia", "Munawwar", "Nadim", "Hafeez", "Moiz", "Zahir",
"Ateeq", "Touqeer", "Danish", "Arham", "Shafiq", "Anwar", "Aqib", "Riyadh", "Mubeen", "Zuhair",
"Basit", "Tauqir", "Usman", "Rizq", "Nafees", "Ikram", "Ubaid", "Saadullah", "Zameer",
"Nisar", "Ayub", "Shuaib", "Hassan", "Sufyan", "Tahseen", "Rahman", "Qudratullah", "Rehan",
"Khurram", "Hammad", "Nouman", "Adnan", "Mansoor", "Sajjad", "Fareed", "Saeed", "Shafaat",
"Aliyan", "Hannan", "Waleed", "Rauf", "Furqan", "Haris", "Anas", "Mahad", "Zayyan",
"Ilyas", "Ayaan", "Mustansir", "Khizar", "Nauman", "Ehsan", "Mahmoud", "Rashad", "Shakir",
"Alauddin", "Sikandar", "Asghar", "Tauseef", "Wasif", "Saud", "Adeel", "Jalal", "Zafarullah",
"Mehmood", "Farid", "Arsal", "Shamoon", "Adham", "Mehmood", "Nazeer", "Feroze", "Hamid",
"Ameen", "Hanif", "Tauheed", "Rauf", "Shuja", "Raheel", "Abrar", "Waqar", "Mujeeb",
"Azam", "Idrees", "Aftab", "Sarwar", "Younas", "Irfanullah", "Nizam", "Arifullah", "Ghous",
"Shehzad", "Maheer", "Tariq", "Saadullah", "Basharat", "Moeen", "Abdur Rahman", "Abdur Rehman",
"Zohair", "Zulfiqar", "Rafay", "Sufiyan", "Zeeshan", "Ibrahim", "Firas", "Muzaffar", "Safwan",
"Azlan", "Raheem", "Nasir", "Haydar", "Aban", "Anwar", "Salim", "Muaz", "Zuhayr", "Anis",
"Zaim", "Suhayl", "Asim", "Atif", "Aamer", "Rasheed", "Rizwan", "Sohail", "Alyas", "Saboor",
"Ahmad", "Shaheen", "Aqeel", "Abu Bakr", "Asadullah", "Murtadha", "Tarique", "Hafiz", "Zafar",
"Khursheed", "Sikander", "Ziauddin", "Naeem", "Faiq", "Mannan", "Wajahat", "Inayat", "Jameel",
"Nawab", "Zameer", "Tayab", "Ghulam Nabi", "Ghulam Rasool", "Qadeer", "Anwaar", "Azlaan",
"Riyazuddin", "Shujaat", "Aamer", "Arham", "Mahfooz", "Nawaz", "Siddiq", "Hamza", "Yameen",
"Abrar", "Azeez", "Safdar", "Ibrahim", "Uzair", "Ammar", "Noor", "Yusuf", "Uthman", "Ishaq",
"Mehran", "Mirza", "Rameen", "Qasim", "Irfaan", "Intisar", "Rafique", "Faraaz", "Burhan",
"Hashir", "Maazin", "Aahil", "Aafaq", "Adnan", "Dawood", "Akram", "Badar", "Burhanuddin",
"Ghiyas", "Khattab", "Mubeen", "Nabeel", "Hadi", "Haider", "Faizan", "Riyad", "Sadiq",
"Qayyam", "Muqtadir", "Shaukat", "Sarmad", "Riyadh", "Rashid", "Tahir", "Awais", "Mujib",
"Shazad", "Tauheed", "Faseeh", "Yousuf", "Hussam", "Mudassar", "Nayyer", "Shaheer", "Mazin",
"Sufiyan", "Ateeq", "Yasir", "Ashraf", "Akbar", "Mahfooz", "Israr", "Wasay", "Sadiq",
"Aalim", "Asghar", "Mudassir", "Rayyan", "Hannan", "Junaid", "Ziyad", "Tufail", "Aadil",
"Jawad", "Ebrahim", "Maaz", "Fawaz", "Faisal", "Umar", "Mairaj", "Muneeb", "Bashar", "Mahaz",
"Mansur", "Raqib", "Faiyaz", "Ghafoor", "Abdul Qadir", "Arqam", "Zuhair", "Ashar", "Zuhd",
"Naail", "Samir", "Aahil", "Anjam", "Bazil", "Humam", "Khaleel", "Musharraf", "Amjad",
"Quddoos", "Atif", "Farooq", "Waqar", "Shahzaib", "Baber", "Rafay", "Anzar", "Nasrullah",
"Shibli", "Areeb", "Tabish", "Ziyad", "Umair", "Waqas", "Hassaan", "Ehsan", "Shaban",
"Noman", "Muneeb", "Salik", "Anwar", "Ameen", "Maaz", "Shaariq", "Rafeeq", "Maher", "Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun", "Sai", "Reyansh", "Ayaan", "Krishna",
"Ishaan", "Shaurya", "Atharv", "Siddharth", "Aryan", "Dhruv", "Anaya", "Myra", "Siya",
"Ira", "Aditi", "Riya", "Anvi", "Saanvi", "Aarohi", "Anika", "Kiara", "Pihu", "Meera",
"Amaira", "Prisha", "Kavya", "Nisha", "Trisha", "Varun", "Kunal", "Raj", "Mira", "Simran",
"Rahul", "Priya", "Deepak", "Rohit", "Kiran", "Nikhil", "Swati", "Anjali", "Yash", "Neha",
"Naina", "Alok", "Sanya", "Sneha", "Pooja", "Kartik", "Anmol", "Sakshi", "Divya",
"Ritika", "Gaurav", "Shruti", "Dev", "Akash", "Bhavana", "Ravi", "Tanvi", "Arjun", "Mohan",
"Abhishek", "Jay", "Ajay", "Manoj", "Nandini", "Mahesh", "Komal", "Dinesh", "Rupesh",
"Rajesh", "Ashok", "Vijay", "Harish", "Sushma", "Rajiv", "Suraj", "Suresh", "Pritam",
"Pankaj", "Arvind", "Meena", "Rani", "Pramod", "Jyoti", "Madhuri", "Anand", "Sunita",
"Jatin", "Rajni", "Amrita", "Suman", "Naveen", "Shivani", "Kailash", "Laxmi", "Shreya",
"Tanya", "Isha", "Veer", "Ajit", "Manisha", "Geeta", "Sheetal", "Payal", "Vikram",
"Navya", "Samir", "Usha", "Kavita", "Akhil", "Viraj", "Alisha", "Samar", "Vidya",
"Ishita", "Kamini", "Parul", "Ajeet", "Rajkumar", "Sarita", "Rishabh", "Amar", "Sonia",
"James", "John", "Mary", "Elizabeth", "Michael", "Matthew", "Joseph", "Anthony", "David",
"Paul", "Peter", "Robert", "Christopher", "Thomas", "Daniel", "Stephen", "Andrew", "Mark",
"Luke", "Simon", "Timothy", "Philip", "Evelyn", "Sarah", "Lydia", "Joanna", "Julia",
"Rebecca", "Catherine", "Ann", "Eve", "Esther", "Naomi", "Ruth", "Rachel", "Abigail",
"Zachary", "Samuel", "Nathan", "Isaac", "Caleb", "Ethan", "Benjamin", "Simon", "Adam",
"Noah", "Jude", "Solomon", "Jeremiah", "Josiah", "Elias", "Gabriel", "Joan", "Claire",
"Theresa", "Patricia", "Angela", "Agnes", "Dorothy", "Grace", "Martha", "Monica",
"Nicholas", "Gregory", "Jerome", "Francis", "Dominic", "Gerard", "Martin", "Patrick",
"Vincent", "Benedict", "Lawrence", "Sebastian", "Basil", "Augustine", "Cecilia",
"Lucy", "Anne", "Margaret", "Agatha", "Helen", "Clare", "Rita", "Barbara", "Veronica",
"Madeleine", "Amelia", "Josephine", "Angela", "Caroline", "Genevieve", "Eleanor",
"Helen", "Pauline", "Valerie", "Hope", "Charity", "Faith", "Joy", "Trinity", "Samantha",
"Isabella", "Grace", "Sophia", "Isabella", "Elizabeth", "Charlotte", "Emily", "Mia", "Ella",
"Abigail", "Sofia", "Ava", "Camila", "Luna", "Layla", "Nora", "Zoey", "Stella", "Paisley",
"Isla", "Violet", "Aurora", "Savannah", "Hazel", "Evelyn", "Piper", "Willow", "Ivy", "Emilia",
"Everly", "Isla", "Emery", "Eliza", "Lyla", "Delilah", "Natalie", "Peyton", "Parker", "Serenity",
"Skylar", "Jasmine", "Maya", "Ruby", "Aria", "Cora", "Phoebe", "Carter", "Leah", "Lillian",
];




  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { from: "user", text: userInput },
      ]);

      let botResponse = getBotResponse(userInput);
      setMessages((prevMessages) => [
        ...prevMessages,
        { from: "bot", text: botResponse },
      ]);

      setUserInput("");
    }
  };


  const getBotResponse = (input) => {
input = input.toLowerCase().trim();

// Check for any name in the user input
const detectedName = islamicNames.find(name => input.includes(name.toLowerCase()));

if (detectedName) {
return `Hello ${detectedName}! How can I assist you today?`;
}

if (/cloud\s*computing|cloud\s*services|aws|amazon\s*web\s*services|azure|google\s*cloud|cloud\s*storage|virtualization|cloud\s*infrastructure|cloud\s*platform|saas|iaas|paas|serverless|docker|kubernetes|cloud\s*backup|disaster\s*recovery|hybrid\s*cloud|multi\s*cloud|cloud\s*migration|cloud\s*architecture|elastic\s*computing|lambda|cloud\s*security|devops|big\s*data\s*on\s*cloud|ml\s*on\s*cloud|compute\s*engine|s3|rds|sagemaker|cloud\s*sql|blob\s*storage|cloud\s*firestore|cloud\s*functions|container\s*services|cloud\s*cost\s*management|cloud\s*governance/i.test(input)) {
  return "We offer a full suite of Cloud Computing solutions, including:\n\n" +
  "- Cloud Storage Solutions: Secure and scalable storage solutions using AWS S3, Google Cloud Storage, and Azure Blob Storage.\n" +
  "- Virtual Servers: Set up virtual machines with Amazon EC2, Google Compute Engine, or Azure Virtual Machines.\n" +
  "- Database Services: Managed databases like Amazon RDS, Google Cloud SQL, and Azure SQL Database.\n" +
  "- DevOps & CI/CD: Automate your deployments and manage your infrastructure using services like AWS CodePipeline, Azure DevOps, and Google Cloud Build.\n" +
  "- AI and Machine Learning on Cloud: Leverage cloud platforms for machine learning models, including AWS SageMaker, Azure ML, and Google AI Platform.\n\n" +
  "Would you like more details on a specific cloud service or provider?";
}




if (/location|where\s*are\s*you\s*located|office\s*location|address|contact\s*us|our\s*office/i.test(input)) {
return "We are located at **Gulshan Block - 6, Rimjim Tower**. Feel free to visit or contact us for any queries or project discussions.\n\n" ;
}

if (/services|solutions|what\s*do\s*you\s*|company\s*services|provide|web\s*design|mobile\s*development|consulting|support|cloud\s*solutions|seo|marketing|ai|machine\s*learning|software\s*development|app\s*development|enterprise\s*solutions|custom\s*software|devops|blockchain|cybersecurity|data\s*analytics|business\s*intelligence|digital\s*marketing|cloud\s*computing|iot|internet\s*of\s*things|automation|data\s*management|digital\s*transformation|ux\s*design|ui\s*design|product\s*management|enterprise\s*apps|digital\s*solutions/i.test(input)) {
  return "We offer a wide range of services, including:\n\n" +
  "- Web Development: Custom websites, responsive design, front-end and back-end development, CMS integration.\n" +
  "- Mobile App Development: iOS and Android app development, cross-platform solutions, UI/UX design.\n" +
  "- AI & Machine Learning: AI-driven solutions, chatbots, machine learning models, natural language processing.\n" +
  "- Digital Marketing: SEO, content marketing, social media management, paid advertising.\n" +
  "- E-commerce Solutions: Online store setup, shopping cart integration, payment solutions, product management.\n" +
  "- Cloud Computing: Cloud storage, hosting, migration, cloud infrastructure setup, serverless solutions.\n" +
  "- Cybersecurity: Data protection, network security, security audits, penetration testing, vulnerability assessments.\n" +
  "- Blockchain Development: Cryptocurrency applications, smart contracts, decentralized apps, blockchain consulting.\n" +
  "- Software Development: Custom software development, system integration, enterprise solutions.\n" +
  "- IoT (Internet of Things): IoT devices, smart home automation, industrial IoT solutions.\n" +
  "- Data Analytics & Business Intelligence: Data processing, reporting, visualization, data mining.\n" +
  "- DevOps Solutions: Continuous integration, continuous deployment, infrastructure automation.\n" +
  "- UI/UX Design: User interface and user experience design for web and mobile apps.\n" +
  "- Consulting & Support: IT consulting, project management, post-launch support.\n" +
  "- Digital Transformation: Modernizing business processes through technology.\n\n" +
  "Let us know if you'd like more details on any specific service!";
}


if (/web\s*development|website\s*design|responsive\s*design|front-end\s*development|backend\s*development|full-stack\s*development|software\s*solutions|cms\s*development|e-commerce\s*development|custom\s*web\s*applications|progressive\s*web\s*apps|pwa|api\s*integration|ui\s*design|ux\s*design|user\s*interface|user\s*experience/i.test(input)) {
  return "We specialize in web development, offering a wide range of services including:\n\n" +
  "- Website Design: Creating visually appealing and responsive websites tailored to your needs.\n" +
  "- Responsive Design: Ensuring your website is mobile-friendly and looks great on all devices.\n" +
  "- Front-End Development: Using modern technologies like React.js, Angular, and Vue.js for dynamic user interfaces.\n" +
  "- Back-End Development: Building robust back-end systems with Node.js, Express, Django, or Laravel for scalable web applications.\n" +
  "- Full-Stack Development: Comprehensive development of both front-end and back-end, providing a complete web solution.\n" +
  "- CMS Development: Custom Content Management Systems using WordPress, Joomla, or headless CMS like Strapi or Contentful.\n" +
  "- E-commerce Development: Developing secure online stores using platforms like Shopify, WooCommerce, or custom solutions.\n" +
  "- Custom Web Applications: Tailored applications built to suit your specific business needs.\n" +
  "- Progressive Web Apps (PWA): Developing high-performance, offline-capable web apps.\n" +
  "- API Integration: Connecting third-party services and integrating APIs to extend your web application's functionality.\n" +
  "- UI/UX Design: Focusing on user-centered design to create intuitive and engaging experiences for your audience.\n\n" +
  "Would you like more details on a specific service or a consultation?";
}



if (/app\s*development|mobile\s*development|ios\s*development|android\s*development|cross\s*platform\s*development|react\s*native|flutter|hybrid\s*app\s*development|native\s*app\s*development|mobile\s*app\s*development|custom\s*apps|app\s*design|mobile\s*app\s*solutions|app\s*development\s*services|app\s*maintenance|mobile\s*app\s*design/i.test(input)) {
  return "We provide a comprehensive range of mobile app development services, including:\n\n" +
  "- iOS App Development: Native iOS apps using Swift, Objective-C, and Xcode for a seamless Apple ecosystem experience.\n" +
  "- Android App Development: Native Android apps using Java or Kotlin, optimized for a high-performance Android experience.\n" +
  "- Cross-Platform Development: Using frameworks like React Native and Flutter to build apps for both iOS and Android with a single codebase.\n" +
  "- Hybrid App Development: Building apps using web technologies (HTML, CSS, JavaScript) wrapped in a native container using frameworks like Ionic.\n" +
  "- Custom Mobile App Solutions: Tailored mobile apps developed to meet your business-specific requirements.\n" +
  "- App Maintenance & Updates: Ongoing support, bug fixes, and updates to ensure your app remains current and functional.\n" +
  "- App Store Optimization (ASO): Improving your app's visibility and downloads through effective app store optimization strategies.\n" +
  "- App Design: UI/UX design for mobile apps, ensuring user-friendly and intuitive app interfaces.\n" +
  "- Mobile Game Development: Creation of engaging and interactive mobile games for both iOS and Android.\n" +
  "- Wearable App Development: Developing apps for wearables like Apple Watch, Android Wear, and fitness trackers.\n" +
  "- Enterprise Mobile App Development: Developing secure and scalable mobile solutions for large enterprises.\n" +
  "- Mobile App Integration: Integrating mobile apps with APIs, third-party services, and backend systems.\n" +
  "- Mobile App Testing: Rigorous testing for functionality, usability, security, and performance.\n\n" +
  "Would you like more details on a specific platform, service, or feature?";
}

if (/ai\s*solutions|artificial\s*intelligence|machine\s*learning|chatbots|automated\s*systems/i.test(input)) {
  return "We offer advanced AI solutions such as machine learning and AI chatbots. What specific AI services are you interested in?";
}


if (/digital\s*marketing|seo|search\s*engine\s*optimization|content\s*marketing|social\s*media\s*marketing|online\s*marketing/i.test(input)) {
  return "Our digital marketing services include SEO, content marketing, and social media strategies. Would you like a free marketing audit?";
}

if (/e-commerce|online store|shopping cart/i.test(input)) {
  return "We help build e-commerce platforms with integrated shopping carts, payment systems, and inventory management. Would you like to learn more about our e-commerce solutions?";
}

if (/price|cost|pricing|how much|expensive|cheap/i.test(input)) {
  return "Our prices vary based on the project scope. Could you share more details about the service you're interested in so we can give you a better idea?";
}

if (/location|address|contact us|phone number|email/i.test(input)) {
  return "You can contact us via email at info@softwarehouse.com or call us at +123-456-7890. How else can I assist you?";
}

if (/hello|hi|hey|greetings|good morning|good afternoon|good evening/i.test(input)) {
  return "Hello! Welcome to our software house. How can I assist you today?";
}
if (/help|support|assist|need help|issues|problem/i.test(input)) {
  return "I'm here to help! Please let me know what you need assistance with.";
}

if (/bye|goodbye|see you|take care|see you later/i.test(input)) {
  return "Goodbye! It was nice talking to you. Feel free to reach out anytime!";
}



if (/benefits|benefits\s*for\s*the\s*employees|employee\s*benefits|wellness\s*programs|health\s*insurance|retirement\s*plan|401k|pension|sick\s*leave|timing|hours|office\s*timings|work\s*hours|flexible\s*hours|remote\s*work\s*policy|overtime|budget|financial\s*structure|finances|offices|branch\s*locations|work\s*location|headquarters|main\s*office|leave\s*policy|time\s*off|vacation|holiday\s*policy|paid\s*time\s*off|sick\s*days|maternity\s*leave|paternity\s*leave|annual\s*leaves|leaves\s*in\s*a\s*month|leaves\s*in\s*a\s*year|environment|work\s*environment|company\s*culture|location|onsite|remote|relocation|telecommute|telework|hybrid\s*work|technologies|tech\s*stack|tools\s*used|software\s*used|openings|vacancies|job\s*openings|career\s*opportunities|internship|paid\s*or\s*unpaid\s*internships|size\s*of\s*this\s*company|company\s*size|organization\s*size|employee\s*count|headcount|network|how\s*big\s*is\s*the\s*network|company\s*network|industry\s*network|connections|bonus|extra\s*work|performance\s*bonus|incentives|reward\s*system|employee\s*recognition|project\s*deadlines|deadlines|timelines|common\s*deadlines|milestones|progress\s*checks|office\s*hours|onsite\s*work|work-life\s*balance|break\s*times|lunch\s*break|snacks|refreshments|sports|wellness\s*activities|career\s*growth|training|learning\s*and\s*development|professional\s*development|mentorship|development\s*programs|career\s*advancement|promotion|company\s*values|mission|vision|principles|resources|equipment|perks|employee\s*benefits|cafeteria|break\s*area|fitness|wellness\s*facilities|social\s*events|networking\s*events|team\s*structure|hierarchy|leadership|mentorship\s*program|transportation|commute\s*support|parking\s*options|onsite\s*parking|shuttle\s*service|company\s*vehicle/i.test(input)) {

if (/benefits|benefits\s*for\s*the\s*employees|employee\s*benefits|wellness\s*programs|perks|health\s*insurance|retirement\s*plan|401k|pension/i.test(input)) {
return "Our benefits package includes health insurance, retirement contributions, wellness programs, professional development, and more.";

} else if (/timing|hours|office\s*timings|work\s*hours|flexible\s*hours|overtime|shift\s*timings|shift\s*hours|working\s*hours|business\s*hours|work\s*schedule|standard\s*hours|extra\s*time|overtime\s*hours|flexible\s*schedules|part\s*time|full\s*time/i.test(input)) {
return "Standard office hours are 9:30 AM to 6 PM, Monday through Friday, with flexibility depending on team requirements.";


} else if (/budget|financial\s*structure|finances|financial\s*planning|funding|revenue|financial\s*status|cost\s*structure|financial\s*resources|profit\s*margin|investment\s*plans|capital\s*allocation|company\s*budget|monetary\s*structure|financial\s*management/i.test(input)) {
return "While specific budget details are confidential, we maintain a healthy financial structure to support growth, innovation, and employee satisfaction.";

} else if (/offices|branch\s*locations|work\s*location|headquarters|main\s*office|company\s*locations|office\s*address|workplace|corporate\s*office|site\s*locations|regional\s*offices|office\s*branches|global\s*offices|company\s*headquarters/i.test(input)) {
return "We currently operate from Rimjhim Gulshan-e-Iqbal Office 218,217 locations, with our headquarters in [headquarter location].";

} else if (/leave\s*policy|time\s*off|vacation|holiday\s*policy|paid\s*time\s*off|sick\s*days|maternity\s*leave|paternity\s*leave|annual\s*leaves/i.test(input)) {
return "Employees are entitled to 2 paid leaves per month, totaling 24 per year, plus national holidays.";

} else if (/environment|work-life\s*balance|work\s*environment|company\s*culture|work\s*atmosphere|office\s*culture|company\s*values|workplace\s*environment|employee\s*experience|team\s*environment|collaborative\s*culture|inclusive\s*environment|work\s*style|company\s*ethos/i.test(input)) {
return "Our office culture is collaborative, inclusive, and supportive of creativity, productivity, and a healthy work-life balance.";


} else if (/location|onsite|remote|relocation|telecommute|telework|hybrid\s*work|work\s*from\s*home|remote\s*work|office\s*location|work\s*location|office\s*base|onsite\s*work|flexible\s*location|virtual\s*work|commute\s*options/i.test(input)) {
return "Our main office is located at [office address], with branches in [additional locations]. Remote options are available for some roles.";

} else if (/technologies|tech\s*stack|tools\s*used|software\s*used|programming\s*languages|frameworks|platforms|development\s*tools|version\s*control|databases|cloud\s*services|development\s*environments|code\s*editors|apis|libraries|CI\/CD|devops\s*tools|automation\s*tools|containerization/i.test(input)) {
return "We primarily use [technologies, e.g., JavaScript, Python, React, Node.js] for development, with a focus on modern, scalable solutions.";

} else if (/openings|vacancies|job\s*openings|career\s*opportunities|job\s*positions|hiring|recruitment|employment\s*opportunities|job\s*listings|current\s*openings|job\s*offers|available\s*roles|work\s*opportunities|full\s*time\s*positions|part\s*time\s*roles|contract\s*positions|freelance\s*work|internships/i.test(input)) {
return "We offer roles in software development, project management, marketing, and more. Check our careers page for openings.";

} else if (/internship|paid\s*or\s*unpaid\s*internships/i.test(input)) {
return "We offer both paid and unpaid internships, depending on the program and role.";

} else if (/projects|project\s*deadlines|deadlines|timelines|common\s*deadlines|milestones|progress\s*checks/i.test(input)) {
return "Project timelines vary, but deadlines are generally set on a quarterly or monthly basis based on the project scope.";

} else if (/size\s*of\s*this\s*company|company\s*size|organization\s*size|employee\s*count|headcount/i.test(input)) {
return "We are a mid-sized company with approximately [number] employees across all departments, with a collaborative structure.";

} else if (/network|how\s*big\s*is\s*the\s*network|company\s*network|industry\s*network|connections/i.test(input)) {
return "We have a strong, growing network that spans [regions or sectors].";

} else if (/bonus|extra\s*work|performance\s*bonus|incentives|reward\s*system|employee\s*recognition/i.test(input)) {
return "Yes, we provide bonuses or overtime pay for extra work based on company policies and project needs.";

} else if (/culture|company\s*values|mission|vision|principles|core\s*values|core\s*beliefs|company\s*mission|company\s*vision|company\s*principles|organizational\s*values|company\s*ethos|workplace\s*values|company\s*culture|team\s*values|business\s*values|corporate\s*culture|company\s*philosophy|workplace\s*ethos|values\s*and\s*ethics|organizational\s*principles|corporate\s*values|company\s*goals/i.test(input)) {
return "Our company culture is based on respect, innovation, and teamwork, with an environment that values diversity, transparency, and learning.";


} else if (/break\s*times|lunch\s*break|snacks|refreshments|coffee\s*break|tea\s*break|meal\s*break|afternoon\s*break|coffee\s*and\s*snacks|refreshment\s*break|work\s*break|rest\s*period|tea\s*and\s*snacks/i.test(input)) {
return "Employees have flexible break times, with a dedicated lunch break and short afternoon breaks.";

} else if (/sports|fitness|wellness\s*activities/i.test(input)) {
return "We offer a recreation area with indoor games and a fitness center to help employees relax and recharge.";

} else if (/career\s*growth|training|learning\s*and\s*development|professional\s*development|mentorship|development\s*programs|career\s*advancement|promotion/i.test(input)) {
return "We offer career growth opportunities, including training programs and mentorship for ongoing development.";
}

else if (/social\s*events|networking\s*events|team\s*events|company\s*events|corporate\s*events|employee\s*events|staff\s*events|workplace\s*events|company\s*celebrations|team\s*building\s*events|professional\s*networking|social\s*gatherings|company\s*parties|after\s*work\s*events|team\s*outings|company\s*meetups|office\s*parties|work\s*socials/i.test(input)) {
 return "We organize regular social events, from team-building activities to company-wide celebrations.";
}

else if (/transportation|commute\s*support|parking\s*options|onsite\s*parking|shuttle\s*service|company\s*vehicle|car\s*allowance|commuting\s*benefits|transportation\s*allowance|parking\s*benefits|vehicle\s*assistance|employee\s*transport|company\s*shuttle|commute\s*reimbursement|carpool\s*program|free\s*parking|public\s*transport\s*subsidy|company\s*car/i.test(input)) {
return "We offer transportation benefits or allowances to help ease the commute for our employees.";
}


} else if (/bye|goodbye|see\s*you|take\s*care|see\s*you\s*later|farewell|catch\s*you\s*later|until\s*next\s*time|talk\s*to\s*you\s*soon|have\s*a\s*great\s*day|peace\s*out|later\s*alligator|adieu|so\s*long|take\s*it\s*easy|until\s*we\s*meet\s*again|have\s*a\s*good\s*one|cheers|good\s*night/i.test(input)) {
return "Goodbye! It was nice talking to you. Feel free to reach out anytime!";
}
else {
return "I'm here to help! Could you please specify your question?";
}

return "I'm sorry, I didn't quite understand that. Could you kindly ask a question related to our services, such as web development, mobile apps, cloud computing, or digital marketing?";
};


  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "1rem", textAlign: "end" }}>
      <IconButton onClick={toggleChatbot}>
        <img
          src="./Ai.png"
          alt="Logo"
          style={{ cursor: "pointer", width: "50px" }}
        />
      </IconButton>

      {showChatbot && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Paper elevation={3} style={{ padding: "1rem", marginTop: "1rem" }}>
            <div style={{ maxHeight: "400px", overflowY: "scroll" }}>
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: msg.from === "bot" ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                  style={{
                    textAlign: msg.from === "bot" ? "left" : "right",
                    margin: "10px 0",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: msg.from === "bot" ? "#f0f0f0" : "#4caf50",
                      color: msg.from === "bot" ? "#000" : "#fff",
                      padding: "10px",
                      borderRadius: "8px",
                      maxWidth: "75%",
                      wordWrap: "break-word",
                      marginLeft: msg.from === "bot" ? "10px" : "auto",
                    }}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            <div style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}>
              <TextField
                variant="outlined"
                fullWidth
                value={userInput}
                onChange={handleUserInput}
                placeholder="Type your message"
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <IconButton onClick={handleSendMessage} color="primary">
                <SendIcon />
              </IconButton>
            </div>
          </Paper>
        </motion.div>
      )}
    </Container>
  );
};

const getBotResponse = (userInput) => {
  // Simple example of bot response logic
  if (userInput.toLowerCase().includes("hello")) {
    return "Hi there!";
  }
  return "I didn't quite understand that.";
};

export default Chatbot;