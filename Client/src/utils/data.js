import axios from "axios";
// Faculty data
// export const facultyMembers = [
//     {
//       id: 1,
//       name: "Prof. Dr. Maumita Chakraborty",
//       position: "Professor & HOD",
//       specialization: "Blockchain Technology, DSA",
//       education: "Ph.D. in Computer Science, IIT Delhi",
//       experience: "15+ years of teaching and research experience",
//       email: "maumita.chakraborty@uem.edu.in",
//       phone: "+91 9088104604",
//       office: "Room 101, CS Building",
//       image: "https://q3tt99cbr02qqrnr.public.blob.vercel-storage.com/df-Bt5QocKiqgsbgDvUOopRybYr1OqEeu.png",
//       researchInterests: ["Graph Theory", "Data Structures and Algorithms", "Computer Networks","Blockchain Technology"],
//       publications: [
//         "Kumar, R., et al. (2023). 'Advances in Natural Language Processing'. IEEE Transactions on AI.",
//         "Kumar, R., et al. (2022). 'Deep Learning for Image Recognition'. International Journal of Computer Vision.",
//       ],
//       socialLinks: {
//         linkedin: "https://www.linkedin.com/in/maumita-chakraborty-3522aa27a/",
//         twitter: "#",
//         website: "#",
//       },
//       department: "Computer Science and Technology",
//       researchPapers: [
//         {
//           title: "Algorithms for generating all possible spanning trees of a simple undirected connected graph: an extensive review",
//           authors: "Maumita Chakraborty, Sumon Chowdhury, Joymallya Chakraborty, Ranjan Mehera, Rajat Kumar Pal",
//           // year: 2023,
//           journal: "Springer International Publishing",
//           link: "https://link.springer.com/article/10.1007/s40747-018-0079-7",
//         },
//         {
//           title: "A Divide-and-Conquer Algorithm for All Spanning Tree Generation",
//           authors: "Maumita Chakraborty, R Mehera, Rajat Kumar Pal",
//           // year: 2022,
//           journal: "Springer Nature",
//           link: "https://link.springer.com/chapter/10.1007/978-981-10-3409-1_2",
//         },
//         {
//           title: "A Study on Various Database Models: Relational, Graph, and Hybrid Databases",
//           authors: "Shubham Gupta, Sovan Pal, Maumita Chakraborty",
//           // year: 2021,
//           journal: "Springer Singapore",
//           link: "https://link.springer.com/chapter/10.1007/978-981-15-0361-0_11",
//         },
//         {
//           title: "A Review on SML Based Diabetic Patient Classification and Prediction for Healthcare Domain",
//           authors: "Satish Singh Mekale, Maumita Chakraborty",
//           // year: 2021,
//           journal: "CRC Press",
//           link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003487906-1/review-sml-based-diabetic-patient-classification-prediction-healthcare-domain-satish-singh-mekale-maumita-chakraborty",
//         },
//         {
//           title: "Type 2 Diabetes Classification and Prediction: An Ensemble and Hyper Parameter Optimization Approach in Machine Learning",
//           authors: "Satish Singh Mekale, Maumita Chakraborty, Chiradeep Mukherjee",
//           // year: 2021,
//           journal: "IEEE",
//           link: "https://ieeexplore.ieee.org/abstract/document/10489061/",
//         },
//       ],
//     },
//     {
//       id: 2,
//       name: "Prof. Dr. Subhalaxmi Chakraborty",
//       position: "Professor & Assistant HOD",
//       specialization: "COA, Blockchain, CyberSecurity",
//       education: "Ph.D. in Computer Science, IIT Bombay",
//       experience: "12+ years of teaching and research experience",
//       email: "subhalaxmi.chakraborty@uem.edu.in",
//       phone: "+91 9831188685",
//       office: "Room 102, CS Building",
//       image: "https://q3tt99cbr02qqrnr.public.blob.vercel-storage.com/df-Bt5QocKiqgsbgDvUOopRybYr1OqEeu.png",
//       researchInterests: ["Blockchain Technology", "CyberSecurity", "Machine Learning", "Optical Fiber"],
//       publications: [
//         "Verma, S., et al. (2023). 'Big Data Analytics in Healthcare'. Journal of Data Science.",
//         "Verma, S., et al. (2021). 'Predictive Analytics using Machine Learning'. IEEE Big Data Conference.",
//       ],
//       socialLinks: {
//         linkedin: "https://www.linkedin.com/in/dr-subhalaxmi-chakraborty-a6a13b138",
//         twitter: "#",
//         website: "#",
//       },
//       department: "Computer Science and Technology",
//       researchPapers: [
//         {
//           title: "AUGChain: blockchain-based mobile user authentication scheme in global mobility network",
//           authors: "Sudip Kumar Palit, Mohuya Chakraborty, Subhalaxmi Chakraborty",
//           // year: 2023,
//           journal: "Springer US",
//           link: "https://link.springer.com/article/10.1007/s11227-021-04139-y",
//         },
//         {
//           title: "Prediction of fundamental modal field for graded index fiber in the presence of Kerr nonlinearity",
//           authors: "Subhalaxmi Chakraborty, Chintan Kumar Mandal, Sankar Gangopadhyay",
//           // year: 2021,
//           journal: "De Gruyter",
//           link: "https://www.degruyter.com/document/doi/10.1515/joc-2017-0126/html",
//         },
//         {
//           title: "Prediction of First Higher Order Modal Field for Graded Index Fiber in Presence of Kerr Nonlinearity",
//           authors: "Subhalaxmi Chakraborty, Chintan Kumar Mandal, Sankar Gangopadhyay",
//           // year: 2020,
//           journal: "De Gruyter",
//           link: "https://www.degruyter.com/document/doi/10.1515/joc-2017-0206/html",
//         },
//         {
//           title: "Indian Sign Language Classification (ISL) using Machine Learning",
//           authors: "Subhalaxmi Chakraborty, Swatilekha Banerjee, Nanak Bandyopadhyay, Zinnia Sarkar, Piyal Chakraverty, Sweta Ghosh",
//           // year: 2020,
//           journal: "Auburn Washington: Society for Makers Artists Researchers and Technologists ",
//           link: "https://www.ingentaconnect.com/contentone/smart/ajec/2021/00000001/00000003/art00004",
//         },
//         {
//           title: "Performance analysis of 5GMAKA: lightweight mutual authentication and key agreement scheme for 5G network",
//           authors: "Sudip Kumar Palit, Mohuya Chakraborty, Subhalaxmi Chakraborty",
//           // year: 2020,
//           journal: "Springer US",
//           link: "https://link.springer.com/article/10.1007/s11227-022-04807-7",
//         },
//       ],
//     },
//     {
//       id: 3,
//       name: "Prof. Dr. Sudipta Basu Pal",
//       position: "Associate Professor",
//       specialization: "OS, Computer Networks, OOPs",
//       education: "Ph.D. in Engineering, IIEST Shibpur",
//       experience: "10+ years of teaching and research experience",
//       email: "sudipta.basu@uem.edu.in",
//       phone: "+91 9674335060",
//       office: "Room 103, CS Building",
//       image: "https://q3tt99cbr02qqrnr.public.blob.vercel-storage.com/df-Bt5QocKiqgsbgDvUOopRybYr1OqEeu.png",
//       researchInterests: ["Artificial Intelligence", "IOT", "Embedded Technology", "Solar Energy", "PV Metrology"],
//       publications: [
//         "Singh, A., et al. (2022). 'Design of a low-cost measuring and plotting device for photovoltaic modules'. Journal of Cybersecurity.",
//         "Singh, A., et al. (2020). 'Security Challenges in IoT'. IEEE Security & Privacy.",
//       ],
//       socialLinks: {
//         linkedin: "https://www.linkedin.com/in/dr-sudipta-basu-pal-a360b86a/",
//         twitter: "#",
//         website: "#",
//       },
//       department: "Computer Science and Technology",
//       researchPapers: [
//         {
//           title: "Design of a low-cost measuring and plotting device for photovoltaic modules",
//           authors: "Sudipta Basu Pal, Abhijit Das, Konika Das, Dipankar Mukherjee",
//           // year: 2019,
//           journal: "SAGE Publications",
//           link: "https://journals.sagepub.com/doi/abs/10.1177/0020294019865752",
//         },
//         {
//           title: "A quality assessment of PV Metrological technique‐‐‐‐A case study with Poly-Si PV Modules at IIEST, Kolkata India",
//           authors: "Sudipta Basu Pal, Konika Das Bhattacharya, Dipankar Mukherjee, Debkalyan Paul",
//           // year: 2020,
//           journal: "IEEE Security & Privacy",
//           link: "https://ieeexplore.ieee.org/abstract/document/9300399/",
//         },
//         {
//           title: "A simple and low cost measurement technology for solar PV modules",
//           authors: "Sudipta Basu Pal, Konika Das Bhattacharya, Dipankar Mukherjee, Debkalyan Paul",
//           // year: 2020,
//           journal: "Springer India",
//           link: "https://link.springer.com/article/10.1007/s12046-020-01509-9",
//         },
//         {
//           title: "Facial expression recognition using convoluted neural network (CNN)",
//           authors: "Prerana Kundu, Pabitra Kundu, Sohini Mallik, Srimoyee Bhowmick, Pratim Mandal, Hritam Banerjee, Sudipta Basu Pal",
//           // year: 2022,
//           journal: "Springer Singapore",
//           link: "https://link.springer.com/chapter/10.1007/978-981-16-4284-5_8",
//         },
//         {
//           title: "Estimation of curve tracing time in supercapacitor based PV characterization",
//           authors: "Sudipta Basu Pal, Konika Das Bhattacharya, Dipankar Mukherjee, Debkalyan Paul",
//           // year: 2017,
//           journal: "Springer India",
//           link: "https://link.springer.com/article/10.1007/s40031-016-0273-1",
//         },
//       ],
//     },
//     {
//       id: 4,
//       name: "Prof. Dr. Chiradeep Mukherjee",
//       position: "Associate Professor",
//       specialization: "COA, NLP, Quantum Computing",
//       education: "Ph.D. in Software Engineering, IIT Madras",
//       experience: "8+ years of teaching and research experience",
//       email: "chiradeep.mukherjee@uem.edu.in",
//       phone: "+91 9804244362",
//       office: "Room 104, CS Building",
//       image: "https://q3tt99cbr02qqrnr.public.blob.vercel-storage.com/df-Bt5QocKiqgsbgDvUOopRybYr1OqEeu.png",
//       researchInterests: ["Artificial Intelligence", "Machine Learning", "Deep Learning","Embedded Systems","Quantum Computing"],
//       publications: [
//         "Sharma, P., et al. (2023). 'Microservices Architecture'. IEEE Software Engineering Conference.",
//         "Sharma, P., et al. (2021). 'DevOps Practices in Industry'. Journal of Software Engineering.",
//       ],
//       socialLinks: {
//         linkedin: "https://www.linkedin.com/in/chiradeep-mukherjee-b85989181/",
//         twitter: "#",
//         website: "#",
//       },
//       department: "Computer Science and Technology",
//       researchPapers: [
//         {
//           title: "Layered T full adder using Quantum-dot Cellular Automata",
//           authors: "Chiradeep Mukherjee, Aninda Sankar Sukla, Swarnendu Sekhar Basu, Ratna Chakrabarty, Angshuman Khan, Debashis De",
//           // year: 2023,
//           journal: "IEEE",
//           link: "https://ieeexplore.ieee.org/abstract/document/7383867/",
//         },
//         {
//           title: "Synthesis of Standard Functions and Generic Ex-OR Module Using Layered T Gate",
//           authors: "Chiradeep Mukherjee, Saradindu Panda, Asish Kumar Mukhopadhyay, Bansibadan Maji",
//           // year: 2021,
//           journal: "Inderscience",
//           link: "https://www.inderscienceonline.com/doi/abs/10.1504/IJHPSA.2017.087164",
//         },
//         {
//           title: "T-Gate: Concept of partial polarization in Quantum Dot Cellular Automata",
//           authors: "Chiradeep Mukherjee, Soudip Sinha Roy, Saradindu Panda, Bansibadan Maji",
//           // year: 2020,
//           journal: "Electronic ISBN: 978-1-5090-1422-4, DOI: 10.1109/ISVDAT.2016.8064844",
//           link: "https://ieeexplore.ieee.org/abstract/document/8064844/",
//         },
//         {
//           title: "Towards modular binary to gray converter design using LTEx module of quantum-dot cellular automata",
//           authors: "Chiradeep Mukherjee, Saradindu Panda, Asish Kumar Mukhopadhyay, Bansibadan Maji",
//           // year: 2020,
//           journal: "Springer Berlin Heidelberg",
//           link: "https://link.springer.com/article/10.1007/s00542-018-4066-0",
//         },
//         {
//           title: "Effect of temperature and kink energy in multilevel digital circuit using Quantum dot cellular automata",
//           authors: "Ratna Chakraborty, Debashis De, Angshuman Khan, Chiradeep Mukherjee, Sayak Pramanik",
//           // year: 2020,
//           journal: "IEEE",
//           link: "https://ieeexplore.ieee.org/abstract/document/6509297/",
//         },
//       ],
//     },
//     {
//       id: 5,
//       name: "Prof. Dr. Sankhadeep Chatterjee",
//       position: "Assistant Professor",
//       specialization: "ML, DL, Competitive Programming",
//       education: "Ph.D. in Deep Learning, IIEST Shibpur",
//       experience: "6+ years of teaching and research experience",
//       email: "sankhadeep.chatterjee@uem.edu.in",
//       phone: "+91 8910874737",
//       office: "Room 105, CS Building",
//       image: "https://q3tt99cbr02qqrnr.public.blob.vercel-storage.com/df-Bt5QocKiqgsbgDvUOopRybYr1OqEeu.png",
//       researchInterests: ["Artificial Intelligence","Machine Learning", "Deep Learning", "Metaheuristics"],
//       publications: [
//         "Patel, V., et al. (2022). '5G Network Architecture'. IEEE Communications Magazine.",
//         "Patel, V., et al. (2020). 'IoT Network Protocols'. Journal of Network and Computer Applications.",
//       ],
//       socialLinks: {
//         linkedin: "https://www.linkedin.com/in/sankhadeep-chatterjee-7393b384/",
//         twitter: "#",
//         website: "#",
//       },
//       department: "Computer Science and Technology",
//       researchPapers: [
//         {
//           title: "Particle swarm optimization trained neural network for structural failure prediction of multistoried RC buildings",
//           authors: "Sankhadeep Chatterjee, Sarbartha Sarkar, Sirshendu Hore, Nilanjan Dey, Amira S Ashour, Valentina E Balas",
//           // year: 2022,
//           journal: "Springer London",
//           link: "https://link.springer.com/article/10.1007/s00521-016-2190-2",
//         },
//         {
//           title: "Modified cuckoo search algorithm in microscopic image segmentation of hippocampus",
//           authors: "Shouvik Chakraborty, Sankhadeep Chatterjee, Nilanjan Dey, Amira S Ashour, Ahmed S Ashour, Fuqian Shi, Kalyani Mali",
//           // year: 2020,
//           journal: "Wiley",
//           link: "https://analyticalsciencejournals.onlinelibrary.wiley.com/doi/abs/10.1002/jemt.22900",
//         },
//         {
//           title: "Indian sign language recognition using optimized neural networks",
//           authors: "Sirshendu Hore, Sankhadeep Chatterjee, V Santhi, Nilanjan Dey, Amira S Ashour, Valentina Emilia Balas, Fuqian Shi",
//           // year: 2019,
//           journal: "Springer International Publishing",
//           link: "https://link.springer.com/chapter/10.1007/978-3-319-38771-0_54",
//         },
//         {
//           title: "Forest type classification: a hybrid NN-GA model based approach",
//           authors: "Sankhadeep Chatterjee, Subhodeep Ghosh, Subham Dawn, Sirshendu Hore, Nilanjan Dey",
//           // year: 2019,
//           journal: "Springer India",
//           link: "https://link.springer.com/chapter/10.1007/978-81-322-2757-1_23",
//         },
//         {
//           title: "Neural-based prediction of structural failure of multistoried RC buildings",
//           authors: "Sirshendu Hore, Sankhadeep Chatterjee, V Santhi, Nilanjan Dey, Amira S Ashour, Valentina Emilia Balas, Fuqian Shi",
//           // year: 2019,
//           journal: "Techno-Press",
//           link: "https://surl.li/bzairn",
//         },
//       ],
//     },
//     {
//       id: 6,
//       name: "Prof. Dr. Srilekha Mukherjee",
//       position: "Assistant Professor",
//       specialization: "DBMS, DSA",
//       education: "Ph.D. in HCI, NIT Durgapur",
//       experience: "5+ years of teaching and research experience",
//       email: "srilekha.mukherjee@uem.edu.in",
//       phone: "+91 9432253556",
//       office: "Room 106, CS Building",
//       image: "https://q3tt99cbr02qqrnr.public.blob.vercel-storage.com/df-Bt5QocKiqgsbgDvUOopRybYr1OqEeu.png",
//       researchInterests: ["Information Security", "Image Steganography", "Data Structures"],
//       publications: [
//         "Gupta, N., et al. (2023). 'User Experience in Mobile Applications'. ACM CHI Conference.",
//         "Gupta, N., et al. (2021). 'Usability Testing Methods'. International Journal of Human-Computer Studies.",
//       ],
//       socialLinks: {
//         linkedin: "#",
//         twitter: "#",
//         website: "#",
//       },
//       department: "Computer Science and Technology",
//       researchPapers: [
//         {
//           title: "Image steganography using mid position value technique",
//           authors: "Srilekha Mukherjee, Subhajit Roy, Goutam Sanyal",
//           // year: 2023,
//           journal: "Elsevier",
//           link: "https://www.sciencedirect.com/science/article/pii/S1877050918308949",
//         },
//         {
//           title: "Edge based image steganography with variable threshold",
//           authors: "Srilekha Mukherjee, Goutam Sanyal",
//           // year: 2021,
//           journal: "Springer US",
//           link: "https://link.springer.com/article/10.1007/s11042-018-6975-4",
//         },
//         {
//           title: "A chaos based image steganographic system",
//           authors: "Srilekha Mukherjee, Goutam Sanyal",
//           // year: 2020,
//           journal: "Springer US",
//           link: "https://link.springer.com/article/10.1007/s11042-018-5996-3",
//         },
//         {
//           title: "Image steganography with N-puzzle encryption",
//           authors: "Srilekha Mukherjee, Goutam Sanyal",
//           // year: 2020,
//           journal: "Springer US",
//           link: "https://link.springer.com/article/10.1007/s11042-020-09522-0",
//         },
//         {
//           title: "A novel image steganographic methodology by Power Modulus Scrambling (PMS) with logistic mapping",
//           authors: "Srilekha Mukherjee, Subha Ash, Goutam Sanyal",
//           // year: 2020,
//           journal: "IEEE",
//           link: "https://ieeexplore.ieee.org/abstract/document/7373019/",
//         },
//       ],
//     },
//     {
//       id: 7,
//       name: "Prof. Dr. Rajendrani Mukherjee",
//       position: "Associate Professor",
//       specialization: "Generative AI",
//       education: "Ph.D. in Computer Science and Engineering, Birla Institute of Technology, Mesra",
//       experience: "14+ years of teaching and research experience",
//       email: "rajendrani.mukherjee@uem.edu.in",
//       phone: "+91 8777051141",
//       office: "Room 201, IT Building",
//       image: "https://q3tt99cbr02qqrnr.public.blob.vercel-storage.com/df-Bt5QocKiqgsbgDvUOopRybYr1OqEeu.png",
//       researchInterests: ["Machine Learning", "Genetic Algorithm", "Software Engineering", "Optimization Heuristics"],
//       publications: [
//         "Mehta, R., et al. (2022). 'NoSQL Database Performance'. ACM SIGMOD Conference.",
//         "Mehta, R., et al. (2020). 'Data Warehousing Techniques'. Journal of Database Management.",
//       ],
//       socialLinks: {
//         linkedin: "https://www.linkedin.com/in/dr-rajendrani-mukherjee-73647332/",
//         twitter: "#",
//         website: "#",
//       },
//       department: "Computer Science and Technology",
//       researchPapers: [
//         {
//           title: "A survey on different approaches for software test case prioritization",
//           authors: "Rajendrani Mukherjee, K Sridhar Patnaik",
//           // year: 2022,
//           journal: "Elsevier",
//           link: "https://www.sciencedirect.com/science/article/pii/S1319157818303616",
//         },
//         {
//           title: "A comparative review of data warehousing ETL tools with new trends and industry insight",
//           authors: "Rajendrani Mukherjee, Pragma Kar",
//           // year: 2020,
//           journal: "IEEE",
//           link: "https://ieeexplore.ieee.org/abstract/document/7976926/",
//         },
//         {
//           title: "Computational Intelligence in Pattern Recognition: Proceedings of CIPR 2021",
//           authors: "Asit Kumar Das, Janmenjoy Nayak, Bighnaraj Naik, Soumi Dutta, Danilo Pelusi",
//           // year: 2019,
//           journal: "Springer",
//           link: "https://link.springer.com/book/10.1007/978-981-19-3089-8",
//         },
//         {
//           title: "Prioritizing JUnit test cases without coverage information: An optimization heuristics based approach",
//           authors: "Rajendrani Mukherjee, K Sridhar Patnaik",
//           // year: 2019,
//           journal: "IEEE",
//           link: "https://ieeexplore.ieee.org/abstract/document/8735829/",
//         },
//         {
//           title: "Heart disease detection using feature selection based KNN classifier",
//           authors: "Rajendrani Mukherjee, Srestha Sadhu, Aurghyadip Kundu",
//           // year: 2019,
//           journal: "Springer Singapore",
//           link: "https://link.springer.com/chapter/10.1007/978-981-16-6289-8_48",
//         },
//       ],
//     },
//     {
//       id: 8,
//       name: "Prof. Pradipta Sarkar",
//       position: "Assistant Professor",
//       specialization: "Cloud Computing, IOT, Digital Electronics",
//       education: "Ph.D. in Mobile Computing, IIT Jodhpur",
//       experience: "8+ years of teaching and research experience",
//       email: "pradipta.sarkar@uem.edu.in",
//       phone: "+91 9433443926",
//       office: "Room 204, IT Building",
//       image: "https://q3tt99cbr02qqrnr.public.blob.vercel-storage.com/df-Bt5QocKiqgsbgDvUOopRybYr1OqEeu.png",
//       researchInterests: ["Data Science", "Data Analytics", "Machine Learning"],
//       publications: [
//         "Kapoor, M., et al. (2023). 'Cross-platform Mobile Mobile Development'. IEEE Mobile Computing Conference.",
//         "Kapoor, M., et al. (2021). 'Mobile Security Challenges'. Journal of Mobile Information Systems.",
//       ],
//       socialLinks: {
//         linkedin: "https://www.linkedin.com/in/pradipta-sarkar-25830a28b/",
//         twitter: "#",
//         website: "#",
//       },
//       department: "Computer Science and Technology",
//       researchPapers: [
//         {
//           title: "Development of A Multilingual Recognition Engine for Automatic Interpretation of Handwritten Form Documents",
//           authors: "Subhadip Basu, Sankha Subhra Seth, Pradipta Sarkar, Biplab Das, Soumyabrata Dey, Soumili Ghosh",
//           // year: 2023,
//           journal: "proc. of the 2nd NCCPB",
//           link: "https://scholar.google.com/scholar?cluster=1949627483493699629&hl=en&oi=scholarr",
//         },
//         {
//           title: "Recognition of Pincodes from Indian Postal Documents",
//           authors: "Subhadip Basu, Sankha Subhra Seth, Pradipta Sarkar, Biplab Das, Soumyabrata Dey, Soumili Ghosh ",
//           // year: 2021,
//           journal: "Allied Publishers",
//           link: "https://books.google.com/books?hl=en&lr=&id=IkajJC9iGxMC&oi=fnd&pg=PA239&dq=info:-Rf2mJkHAiwJ:scholar.google.com&ots=wEgvK5kh9Y&sig=pk7JdMkUMj5nwYafEm7hefaXqEc",
//         },
       
//       ],
//     },
//     {
//       id: 9,
//       name: "Prof. Sanjukta Mishra",
//       position: "Assistant Professor",
//       specialization: "DBMS, Discrete Mathematics",
//       education: "Ph.D , NIT Durgapur",
//       experience: "9+ years of teaching and research experience",
//       email: "sanjukta.mishra@uem.edu.in",
//       phone: "+91 8337045860",
//       office: "Room 203, IT Building",
//       image: "https://q3tt99cbr02qqrnr.public.blob.vercel-storage.com/df-Bt5QocKiqgsbgDvUOopRybYr1OqEeu.png",
//       researchInterests: ["Machine Learning", "Image Processing", "Database Management"],
//       publications: [
//         "Joshi, S., et al. (2022). 'Progressive Web Applications'. ACM Web Conference.",
//         "Joshi, S., et al. (2020). 'Web Security Best Practices'. Journal of Web Engineering.",
//       ],
//       socialLinks: {
//         linkedin: "https://www.linkedin.com/in/sanjukta-mishra-9651a536/",
//         twitter: "#",
//         website: "#",
//       },
//       department: "Computer Science and Technology",
//       researchPapers: [
//         {
//           title: "Automatic caption generation of retinal diseases with self-trained rnn merge model",
//           authors: "Sanjukta Mishra, Minakshi Banerjee",
//           // year: 2022,
//           journal: " Springer Singapore",
//           link: "https://link.springer.com/chapter/10.1007/978-981-15-2930-6_1",
//         },
//         {
//           title: "Identification of Cloud Types for Meteorological Satellite Images: A Character-Based CNN-LSTM Hybrid Caption Model",
//           authors: "Sanjukta Mishra, Parag Kumar Guhathakurta",
//           // year: 2020,
//           journal: "Springer Nature Switzerland",
//           link: "https://link.springer.com/chapter/10.1007/978-3-031-48876-4_15",
//         },
//         {
//           title: "Use of Marker-Controlled Watershed Segmentation to Classify Cumulonimbus Cloud with Pre-trained CNN",
//           authors: "Sitikantha Chattopadhyay, Subhra Prokash Dutta, Sanjukta Mishra, Suprativ Saha",
//           // year: 2019,
//           journal: "Springer Singapore",
//           link: "https://link.springer.com/chapter/10.1007/978-981-16-1696-9_6",
//         },
//         {
//           title: "Robust and Atomic Technique for Edge Detection to Identify Edges Present in Digital Image Using DSCTHS Method",
//           authors: "Debkumar Chowdhury, Sanjukta Mishra, Sujoy Paul, Sreejit Bagchi, Hazim Ahmed, Trisha Das, Chinmoy Mandal",
//           // year: 2019,
//           journal: "Springer Singapore",
//           link: "https://link.springer.com/chapter/10.1007/978-981-15-9433-5_21",
//         },
//         {
//           title: "Cloud-WAVECAP: Ground-based cloud types detection with an efficient wavelet-capsule approach",
//           authors: "Sanjukta Mishra, Samarjit Kar, Parag Kumar Guhathakurta",
//           // year: 2019,
//           journal: "Springer US",
//           link: "https://link.springer.com/article/10.1007/s11227-025-06941-4",
//         },
//       ],
//     },
//     {id: 10,
//       name: "Prof. Sudipta Sikdar",
//       position: "Assistant Professor",
//       specialization: "Discrete Mathematics, Computer Networks",
//       education: "Ph.D. in Computer Science, IIEST Shibpur",
//       experience: "13+ years of teaching and research experience",
//       email: "sudipta.sikdar@uem.edu.in",
//       phone: "+91 7278886140",
//       office: "Room 202, IT Building",
//       image: "https://q3tt99cbr02qqrnr.public.blob.vercel-storage.com/df-Bt5QocKiqgsbgDvUOopRybYr1OqEeu.png",
//       researchInterests: ["Embedded System", "Internet Of Things", "TinyML", "Biosensing"],
//       publications: [
//         "Desai, A., et al. (2023). 'Cloud Security Frameworks'. IEEE Cloud Computing Conference.",
//         "Desai, A., et al. (2021). 'Virtualization Technologies'. Journal of Cloud Computing.",
//       ],
//       socialLinks: {
//         linkedin: "https://www.linkedin.com/in/sudipta-sikdar/",
//         twitter: "#",
//         website: "#",
//       },
//       department: "Computer Science and Technology",
//       researchPapers: [
//         {
//           title: "A survey on data-driven approaches for reliability, robustness, and energy efficiency in wireless body area networks",
//           authors: "Pulak Majumdar, Satyaki Roy, Sudipta Sikdar, Preetam Ghosh, Nirnay Ghosh",
//           // year: 2023,
//           journal: "MDPI",
//           link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11510943/",
//         },
      
//       ],
//     },
//     {
//       id: 11,
//       name: "Prof. Dr. Anirban Ganguly",
//       position: "Associate Professor",
//       specialization: "Signals & Systems, IOT",
//       education: "Ph.D. in Electrical,Electronics and Communications Engineering, IIEST Shibpur",
//       experience: "6+ years of teaching and research experience",
//       email: "Anirban.Ganguly@uem.edu.in",
//       phone: "+91 8582805315",
//       office: "Room 205, IT Building",
//       image: "https://q3tt99cbr02qqrnr.public.blob.vercel-storage.com/df-Bt5QocKiqgsbgDvUOopRybYr1OqEeu.png",
//       researchInterests: ["VLSI Design", "Deep Learning", "Control Systems", "Neuromorphic Computing"],
//       publications: [
//         "Kumar, A., et al. (2022). 'IoT in Smart Cities'. IEEE IoT Journal.",
//         "Kumar, A., et al. (2020). 'Security Challenges in IoT'. Journal of Network and Computer Applications.",
//       ],
//       socialLinks: {
//         linkedin: "https://www.linkedin.com/in/dr-anirban-ganguly-6b211a4b/",
//         twitter: "#",
//         website: "#",
//       },
//       department: "Computer Science and Technology",
//       researchPapers: [
//         {
//           title: "VLSI architecture for analog radix-4 DFT front-end in QAM–OFDM receiver",
//           authors: "Anirban Ganguly, Ayan Banerjee",
//           // year: 2022,
//           journal: "Springer US",
//           link: "https://link.springer.com/article/10.1007/s10470-019-01551-6",
//         },
//         {
//           title: "Deep Neural Network Based Multi-Object Detection for Real-time Aerial Surveillance",
//           authors: "Rebanta Dey Dey, Binit K Pandit, Anirban Ganguly, Anirban Chakraborty, Ayan Banerjee",
//           // year: 2020,
//           journal: "IEEE ESDC (conference)",
//           link: "https://ieeexplore.ieee.org/abstract/document/10149866/",
//         },
//         {
//           title: "Low Power and High Precision Analog VLSI Design of 1-D DCT for Real-time Application",
//           authors: "Deepak Kumar, Anirban Ganguly, Puja Chakraborty, Anirban Chakraborty, Binit Pandit, Ayan Banerjee",
//           // year: 2019,
//           journal: "IEEE",
//           link: "https://ieeexplore.ieee.org/abstract/document/9864386",
//         },
//         {
//           title: "A Novel Reconfigurable Analog VLSI Architecture of M-point DFT Using Complex Matrix Multiplier and Graph-Based Signal Routing Method",
//           authors: "Deepak Kumar, Anirban Ganguly, Puja Chakraborty, Anirban Chakraborty, Binit Pandit, Ayan Banerjee",
//           // year: 2019,
//           journal: "Springer US",
//           link: "https://link.springer.com/article/10.1007/s00034-022-02030-6",
//         },
//         {
//           title: "Precise realization of one-staged 2-D DCT using analog current mode architecture in compressed sensing front-end",
//           authors: "Anirban Ganguly, Ayan Banerjee",
//           // year: 2019,
//           journal: "Elsevier",
//           link: "https://www.sciencedirect.com/science/article/abs/pii/S0026269221001907",
//         },
//       ],
//     },
//     {
//       id: 12,
//       name: "Prof. Debanjana Dutta Mitra",
//       position: "Associate Professor",
//       specialization: "Computer Networks",
//       education: "Ph.D. in Computer Science, IIT Bhubaneswar",
//       experience: "5+ years of teaching and research experience",
//       email: "debanjana.dattamitra@uem.edu.in",
//       phone: "+91 9674033751",
//       office: "Room 206, IT Building",
//       image: "https://q3tt99cbr02qqrnr.public.blob.vercel-storage.com/df-Bt5QocKiqgsbgDvUOopRybYr1OqEeu.png",
//       researchInterests: ["Deep Learning", "Analog Design Automation", "Artificial Intelligence"],
//       publications: [
//         "Singh, K., et al. (2023). 'Efficient Graph Algorithms'. ACM Transactions on Algorithms.",
//         "Singh, K., et al. (2021). 'Approximation Algorithms for NP-Hard Problems'. Journal of Algorithms.",
//       ],
//       socialLinks: {
//         linkedin: "https://www.linkedin.com/in/debanjana-datta-mitra-83581627/",
//         twitter: "#",
//         website: "#",
//       },
//       department: "Computer Science and Technology",
//       researchPapers: [
//         {
//           title: "Design of current mode sigmoid function and hyperbolic tangent function",
//           authors: "Debanjana Datta, Sweta Agarwal, Vikash Kumar, Mayank Raj, Baidyanath Ray, Ayan Banerjee",
//           // year: 2023,
//           journal: "Springer Singapore",
//           link: "https://link.springer.com/chapter/10.1007/978-981-32-9767-8_5" ,
//         },
//         {
//           title: "A novel power efficient N-MOS based 1-bit full adder",
//           authors: "Debanjana Datta, Debarshi Datta",
//           // year: 2021,
//           journal: "IEEE",
//           link: "https://ieeexplore.ieee.org/abstract/document/7522561",
//         },
//         {
//           title: "Comparative Study and Analysis of Performances among RNS, DBNS, TBNS and MNS for DSP Applications",
//           authors: "Rakhi Roy, Debanjana Datta, Somnath Bhagat, Sangita Saha, Amitabha Sinha",
//           // year: 2020,
//           journal: "Scientific Research Publishing",
//           link: "https://www.scirp.org/journal/paperinformation?paperid=55138",
//         },
//         {
//           title: "Design of current-mode high frequency linear analog circuit",
//           authors: "Debanjana Datta, Mousumi Bhanja, Amit Prasad, Baidyanath Ray, Ayan Banerjee",
//           // year: 2020,
//           journal: "IEEE",
//           link: "https://ieeexplore.ieee.org/abstract/document/8971221",
//         },
//         {
//           title: "Chaotic patrol robot with frequency constraints",
//           authors: "Chayan Banerjee, Debanjana Datta, Avantika Agarwal",
//           // year: 2020,
//           journal: "IEEE",
//           link: "https://ieeexplore.ieee.org/abstract/document/7434261",
//         },
//       ],
//     },
//     {
//       id: 13,
//       name: "Prof. Arpita Saha Chowdhury",
//       position: "Assistant Professor",
//       specialization: "Database Management System",
//       education: "Ph.D , NIT Patna",
//       experience: "5+ years of teaching and research experience",
//       email: "Arpita.Sahachowdhury@uem.edu.in",
//       phone: "+91 98306 77260",
//       office: "Room 206, IT Building",
//       image: "https://q3tt99cbr02qqrnr.public.blob.vercel-storage.com/df-Bt5QocKiqgsbgDvUOopRybYr1OqEeu.png",
//       researchInterests: ["Image Processing", "Pattern Recognition", "Database Management"],
//       publications: [
//         "Singh, K., et al. (2023). 'Efficient Graph Algorithms'. ACM Transactions on Algorithms.",
//         "Singh, K., et al. (2021). 'Approximation Algorithms for NP-Hard Problems'. Journal of Algorithms.",
//       ],
//       socialLinks: {
//         linkedin: "https://www.linkedin.com/in/arpita-saha-chowdhury-063038179/",
//         twitter: "#",
//         website: "#",
//       },
//       department: "Computer Science and Technology",
//       researchPapers: [
//         {
//           title: "Application of spectral unmixing algorithm on hyperspectral data for mangrove species classification",
//           authors: "Somdatta Chakravortty, Ekta Shah, Arpita Saha Chowdhury",
//           // year: 2023,
//           journal: "Springer International Publishing",
//           link: "https://link.springer.com/chapter/10.1007/978-3-319-04126-1_19",
//         },
//         {
//           title: "How our perception and confidence are altered using decision cues",
//           authors: "Tiasha Saha Roy, Bapun Giri, Arpita Saha Chowdhury, Satyaki Mazumder, Koel Das",
//           // year: 2021,
//           journal: "Frontiers Media SA",
//           link: "https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2019.01371/full",
//         },
//         {
//           title: "Determining spatial location of sub pixels in hyperspectral data for mangrove species identification",
//           authors: "Somdatta Chakravortty, Arpita Saha Choudhury",
//           // year: 2020,
//           journal: "IEEE",
//           link: "https://ieeexplore.ieee.org/abstract/document/6497955",
//         },
//         {
//           title: "Application of unsupervised end member detection algorithms for spectral unmixing of hyperspectral data for mangrove species discrimination",
//           authors: "Somdatta Chakravortty, Arpita Saha Choudhury",
//           // year: 2020,
//           journal: "IEEE",
//           link: "https://ieeexplore.ieee.org/abstract/document/6422141",
//         },
//         {
//           title: "Effect of Contextual Guidance and Task Difficulty in Exploring Neural Timeline of Visual Search in Natural Scenes",
//           authors: "Tiasha Saha Roy, Arpita Saha Chowdhury, Sucheta Chakravarty, Koel Das",
//           // year: 2020,
//           journal: "The Association for Research in Vision and Ophthalmology",
//           link: "https://jov.arvojournals.org/article.aspx?articleid=2771469",
//         },
//       ],
//     },
//     {
//       id: 14,
//       name: "Prof. Kamalika Bhowal",
//       position: "Assistant Professor",
//       specialization: "DBMS, Cybersecurity",
//       education: "Masters Of Technology, Software System",
//       experience: "5+ years of teaching and research experience",
//       email: "Kamalika.Bhowal@uem.edu.in",
//       phone: "+91 9581839829",
//       office: "Room 206, IT Building",
//       image: "https://q3tt99cbr02qqrnr.public.blob.vercel-storage.com/df-Bt5QocKiqgsbgDvUOopRybYr1OqEeu.png",
//       researchInterests: ["Data Security","Blockchain Network", "Edge Computing", "Consensus Mechanism"],
//       publications: [
//         "Singh, K., et al. (2023). 'Efficient Graph Algorithms'. ACM Transactions on Algorithms.",
//         "Singh, K., et al. (2021). 'Approximation Algorithms for NP-Hard Problems'. Journal of Algorithms.",
//       ],
//       socialLinks: {
//         linkedin: "https://www.linkedin.com/in/kamalika-bhowal-15b20695/",
//         twitter: "#",
//         website: "#",
//       },
//       department: "Computer Science and Technology",
//       researchPapers: [
//         {
//           title: "Blockchain-Enabled Secure and Efficient Integration of IoT Devices: A Novel Approach for the Internet of Medical Things(IoMT)",
//           authors: "Kamalika Bhowal",
//           // year: 2023,
//           journal: "IEEE",
//           link: "https://example.com/paper34",
//         },
        
//       ],
//     },
//   ]
const API_BASE_URL = "https://cst-csit-server.vercel.app/api";

export const fetchFacultyData = async () => {
    try {
        console.log(`Fetching faculty data from ${API_BASE_URL}/faculty... (using Axios utility)`);
        const response = await axios.get(`${API_BASE_URL}/faculty`);

        if (response.status === 200 && response.data && response.data.success) {
            console.log(`Successfully fetched ${response.data.count} faculty members (Axios utility).`);
            return response.data.data || [];
        } else {
            console.error('Failed to fetch faculty data (Axios utility):', response.data?.message || 'Unknown backend error');
            return [];
        }
    } catch (error) {
        console.error('Error fetching faculty data via Axios utility:', error.message);
        if (error.response) {
            console.error('Axios Error status:', error.response.status);
            console.error('Axios Error data:', error.response.data);
        } else if (error.request) {
            console.error('Axios No response received:', error.request);
        } else {
            console.error('Axios setup error:', error.message);
        }
        return []; // Return empty array on error
    }
};
  // Sample events data
  export const eventsData = {
    2022: {
      odd: [
        {
          id: 1,
          title: "Technical Symposium 2022",
          date: "September 15, 2022",
          time: "10:00 AM - 4:00 PM",
          location: "Main Auditorium",
          description:
            "Annual technical symposium featuring technical paper presentations, coding competitions, and guest lectures from industry experts.",
          image: "/placeholder.svg?height=400&width=600",
          attendees: 350,
          category: "Symposium",
        },
        {
          id: 2,
          title: "Hackathon: Code for Change",
          date: "October 8-9, 2022",
          time: "24 Hours",
          location: "CS Building",
          description:
            "A 24-hour hackathon challenging students to develop innovative solutions for social problems using technology.",
          image: "/placeholder.svg?height=400&width=600",
          attendees: 120,
          category: "Hackathon",
        },
        {
          id: 3,
          title: "Workshop on Cloud Computing",
          date: "November 5, 2022",
          time: "2:00 PM - 5:00 PM",
          location: "Seminar Hall",
          description: "Hands-on workshop on cloud computing technologies, focusing on AWS and Azure services.",
          image: "/placeholder.svg?height=400&width=600",
          attendees: 80,
          category: "Workshop",
        },
        {
          id: 4,
          title: "Guest Lecture: AI Ethics",
          date: "November 20, 2022",
          time: "11:00 AM - 1:00 PM",
          location: "Conference Room",
          description:
            "A guest lecture on ethical considerations in artificial intelligence by Dr. Emily Johnson from MIT.",
          image: "/placeholder.svg?height=400&width=600",
          attendees: 150,
          category: "Lecture",
        },
      ],
      even: [
        {
          id: 5,
          title: "Industry-Academia Meet",
          date: "February 10, 2022",
          time: "9:00 AM - 5:00 PM",
          location: "Main Auditorium",
          description:
            "Annual meeting bringing together industry professionals and academics to discuss the latest trends and challenges in the tech industry.",
          image: "/placeholder.svg?height=400&width=600",
          attendees: 200,
          category: "Conference",
        },
        {
          id: 6,
          title: "Workshop on Blockchain Technology",
          date: "March 15, 2022",
          time: "10:00 AM - 4:00 PM",
          location: "Computer Lab 3",
          description:
            "Hands-on workshop on blockchain technology, cryptocurrency, and smart contracts with practical implementations.",
          image: "/placeholder.svg?height=400&width=600",
          attendees: 75,
          category: "Workshop",
        },
        {
          id: 7,
          title: "Programming Contest",
          date: "April 8, 2022",
          time: "9:00 AM - 2:00 PM",
          location: "CS Building",
          description: "Competitive programming contest testing algorithmic and problem-solving skills of participants.",
          image: "/placeholder.svg?height=400&width=600",
          attendees: 100,
          category: "Competition",
        },
        {
          id: 8,
          title: "Research Symposium",
          date: "May 20, 2022",
          time: "11:00 AM - 4:00 PM",
          location: "Research Center",
          description: "Symposium showcasing research work by faculty and students with poster presentations and demos.",
          image: "/placeholder.svg?height=400&width=600",
          attendees: 120,
          category: "Symposium",
        },
      ],
    },
    2023: {
      odd: [
        {
          id: 9,
          title: "AI & Machine Learning Summit",
          date: "September 10, 2023",
          time: "9:00 AM - 6:00 PM",
          location: "Main Auditorium",
          description:
            "A full-day summit on artificial intelligence and machine learning with keynote speakers from leading tech companies.",
          image: "/placeholder.svg?height=400&width=600",
          attendees: 400,
          category: "Summit",
        },
        {
          id: 10,
          title: "Cybersecurity Workshop",
          date: "October 15, 2023",
          time: "10:00 AM - 3:00 PM",
          location: "Security Lab",
          description: "Hands-on workshop on cybersecurity, ethical hacking, and penetration testing techniques.",
          image: "/placeholder.svg?height=400&width=600",
          attendees: 60,
          category: "Workshop",
        },
        {
          id: 11,
          title: "Tech Startup Bootcamp",
          date: "November 5-7, 2023",
          time: "9:00 AM - 5:00 PM",
          location: "Innovation Center",
          description:
            "Three-day bootcamp for aspiring tech entrepreneurs covering ideation, business planning, and pitching.",
          image: "/placeholder.svg?height=400&width=600",
          attendees: 50,
          category: "Bootcamp",
        },
        {
          id: 12,
          title: "Web Development Hackathon",
          date: "November 25, 2023",
          time: "10:00 AM - 10:00 PM",
          location: "CS Building",
          description: "12-hour hackathon focused on web development technologies and frameworks.",
          image: "/placeholder.svg?height=400&width=600",
          attendees: 80,
          category: "Hackathon",
        },
      ],
      even: [
        {
          id: 13,
          title: "Data Science Conference",
          date: "February 18, 2023",
          time: "9:00 AM - 5:00 PM",
          location: "Main Auditorium",
          description: "Conference on data science, big data analytics, and their applications in various domains.",
          image: "/placeholder.svg?height=400&width=600",
          attendees: 250,
          category: "Conference",
        },
        {
          id: 14,
          title: "IoT Workshop Series",
          date: "March 10-12, 2023",
          time: "10:00 AM - 4:00 PM",
          location: "IoT Lab",
          description: "Three-day workshop series on Internet of Things (IoT) technologies, sensors, and applications.",
          image: "/placeholder.svg?height=400&width=600",
          attendees: 70,
          category: "Workshop",
        },
        {
          id: 15,
          title: "Mobile App Development Contest",
          date: "April 22, 2023",
          time: "9:00 AM - 6:00 PM",
          location: "CS Building",
          description: "Contest challenging participants to develop innovative mobile applications within a day.",
          image: "/placeholder.svg?height=400&width=600",
          attendees: 90,
          category: "Competition",
        },
        {
          id: 16,
          title: "Industry Visit to Google",
          date: "May 15, 2023",
          time: "10:00 AM - 4:00 PM",
          location: "Google Office",
          description:
            "Educational visit to Google's office to learn about their work culture, technologies, and career opportunities.",
          image: "/placeholder.svg?height=400&width=600",
          attendees: 40,
          category: "Industry Visit",
        },
      ],
    },
    2024: {
      odd: [
        {
          id: 17,
          title: "Tech Fest 2024",
          date: "September 20-22, 2024",
          time: "9:00 AM - 8:00 PM",
          location: "University Campus",
          description: "Annual technology festival featuring competitions, workshops, exhibitions, and cultural events.",
          image: "/placeholder.svg?height=400&width=600",
          attendees: 500,
          category: "Festival",
        },
        {
          id: 18,
          title: "Quantum Computing Workshop",
          date: "October 12, 2024",
          time: "10:00 AM - 4:00 PM",
          location: "Research Center",
          description: "Workshop introducing the principles of quantum computing and its potential applications.",
          image: "/placeholder.svg?height=400&width=600",
          attendees: 60,
          category: "Workshop",
        },
        {
          id: 19,
          title: "DevOps & Cloud Integration Seminar",
          date: "November 8, 2024",
          time: "2:00 PM - 5:00 PM",
          location: "Seminar Hall",
          description: "Seminar on DevOps practices and cloud integration strategies for modern software development.",
          image: "/placeholder.svg?height=400&width=600",
          attendees: 120,
          category: "Seminar",
        },
        {
          id: 20,
          title: "AR/VR Development Challenge",
          date: "November 30, 2024",
          time: "9:00 AM - 9:00 PM",
          location: "Innovation Lab",
          description: "Challenge to develop augmented reality or virtual reality applications for educational purposes.",
          image: "/placeholder.svg?height=400&width=600",
          attendees: 70,
          category: "Challenge",
        },
      ],
      even: [
        {
          id: 21,
          title: "Future of AI Conference",
          date: "February 15, 2024",
          time: "9:00 AM - 6:00 PM",
          location: "Main Auditorium",
          description:
            "Conference exploring the future trends and challenges in artificial intelligence and its impact on society.",
          image: "/placeholder.svg?height=400&width=600",
          attendees: 300,
          category: "Conference",
        },
        {
          id: 22,
          title: "Cybersecurity Hackathon",
          date: "March 20, 2024",
          time: "10:00 AM - 10:00 PM",
          location: "Security Lab",
          description: "Hackathon focusing on identifying and solving cybersecurity challenges and vulnerabilities.",
          image: "/placeholder.svg?height=400&width=600",
          attendees: 80,
          category: "Hackathon",
        },
        {
          id: 23,
          title: "Industry-Academia Research Symposium",
          date: "April 25, 2024",
          time: "10:00 AM - 4:00 PM",
          location: "Research Center",
          description:
            "Symposium bringing together industry professionals and academics to discuss collaborative research opportunities.",
          image: "/placeholder.svg?height=400&width=600",
          attendees: 150,
          category: "Symposium",
        },
        {
          id: 24,
          title: "Graduation Project Showcase",
          date: "May 30, 2024",
          time: "11:00 AM - 5:00 PM",
          location: "Exhibition Hall",
          description: "Showcase of final year graduation projects developed by the outgoing batch of students.",
          image: "/placeholder.svg?height=400&width=600",
          attendees: 200,
          category: "Exhibition",
        },
      ],
    },
    2025: {
      odd: [
        {
          id: 25,
          title: "Tech Innovation Summit 2025",
          date: "September 5, 2025",
          time: "9:00 AM - 6:00 PM",
          location: "Main Auditorium",
          description: "Summit focusing on technological innovations and their potential to solve global challenges.",
          image: "/placeholder.svg?height=400&width=600",
          attendees: 350,
          category: "Summit",
        },
        {
          id: 26,
          title: "Blockchain & Cryptocurrency Workshop",
          date: "October 18, 2025",
          time: "10:00 AM - 4:00 PM",
          location: "Computer Lab",
          description: "Advanced workshop on blockchain technology, cryptocurrency, and decentralized applications.",
          image: "/placeholder.svg?height=400&width=600",
          attendees: 70,
          category: "Workshop",
        },
        {
          id: 27,
          title: "AI for Social Good Hackathon",
          date: "November 15-16, 2025",
          time: "24 Hours",
          location: "Innovation Center",
          description:
            "Hackathon challenging participants to develop AI solutions for social and environmental problems.",
          image: "/placeholder.svg?height=400&width=600",
          attendees: 100,
          category: "Hackathon",
        },
        {
          id: 28,
          title: "Tech Career Fair",
          date: "November 28, 2025",
          time: "10:00 AM - 4:00 PM",
          location: "University Campus",
          description: "Career fair connecting students with potential employers from the tech industry.",
          image: "/placeholder.svg?height=400&width=600",
          attendees: 300,
          category: "Career Fair",
        },
      ],
      even: [
        {
          id: 29,
          title: "Emerging Technologies Conference",
          date: "February 20, 2025",
          time: "9:00 AM - 5:00 PM",
          location: "Main Auditorium",
          description:
            "Conference exploring emerging technologies like quantum computing, 6G, and brain-computer interfaces.",
          image: "/placeholder.svg?height=400&width=600",
          attendees: 250,
          category: "Conference",
        },
        {
          id: 30,
          title: "Game Development Workshop",
          date: "March 15, 2025",
          time: "10:00 AM - 4:00 PM",
          location: "Game Lab",
          description: "Workshop on game development using Unity and Unreal Engine with hands-on projects.",
          image: "/placeholder.svg?height=400&width=600",
          attendees: 60,
          category: "Workshop",
        },
        {
          id: 31,
          title: "Robotics Competition",
          date: "April 10, 2025",
          time: "9:00 AM - 6:00 PM",
          location: "Robotics Lab",
          description: "Competition challenging teams to design and program robots to complete specific tasks.",
          image: "/placeholder.svg?height=400&width=600",
          attendees: 80,
          category: "Competition",
        },
        {
          id: 32,
          title: "Research Paper Presentation Contest",
          date: "May 25, 2025",
          time: "10:00 AM - 4:00 PM",
          location: "Seminar Hall",
          description: "Contest for students to present their research papers and receive feedback from experts.",
          image: "/placeholder.svg?height=400&width=600",
          attendees: 100,
          category: "Contest",
        },
      ],
    },
  }
  
  // Sample data for student coordinators
  export const studentCoordinators = [
    {
      id: 1,
      name: "Haimanti Chakraborty",
      position: "Student Coordinator (Technical)",
      email: "haimantic8@gmail.com",
      phone: "+91 9831243082",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "Priya Patel",
      position: "Student Coordinator (Events)",
      email: "priya.patel@example.com",
      phone: "+91 9876543211",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "Amit Kumar",
      position: "Student Coordinator (Research)",
      email: "amit.kumar@example.com",
      phone: "+91 9876543212",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      name: "Sneha Gupta",
      position: "Student Coordinator (Placement)",
      email: "sneha.gupta@example.com",
      phone: "+91 9876543213",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]
  
  // Sample data for faculty contacts
  export const facultyContacts = [
    {
      id: 1,
      name: "Prof. Pradipta Sarkar",
      position: "Assistant Professor",
      email: "pradipta.sarkar@uem.edu.in",
      phone: "+91 9433443926",
      office: "Room 101, CS Building",
      image: "https://thk0zqcdijpzgdnr.public.blob.vercel-storage.com/8-rIdNGaXjjHKfy38w0BhL6khkJX9wyu.jpeg",
    },
    {
      id: 2,
      name: "Prof. Sudipta Sikdar",
      position: "Assistant Professor",
      email: "sudipta.sikdar@uem.edu.in",
      phone: "+91 9432253556",
      office: "Room 102, CS Building",
      image: "https://thk0zqcdijpzgdnr.public.blob.vercel-storage.com/10-KRxFieUOodANZ9sVyS98zD7CZ93Tk5.jpeg",
    },
    {
      id: 3,
      name: "Prof. Sanjukta Mishra",
      position: "Assistant Professor",
      email: "sanjukta.mishra@uem.edu.in",
      phone: "+91 8910874737",
      office: "Room 103, CS Building",
      image: "https://thk0zqcdijpzgdnr.public.blob.vercel-storage.com/9-rkP65z0pKZwoRXwB5u3j4c8qqd61lP.jpeg",
    },
  ]
  
  // Sample data for faculty section on home page
  export const homeFaculty = [
    {
      id: 1,
      name: "Prof. Dr. Maumita Chakraborty",
      role: "Professor  & HOD",
      specialization: "Blockchain Technology, DSA",
      image: "https://thk0zqcdijpzgdnr.public.blob.vercel-storage.com/hod-GTA3D3SbhmBiGZL0Lbzkxi0UtoTbxU.jpg",
    },
    {
      id: 2,
      name: "Prof. Dr. Subhalaxmi Chakraborty",
      role: "Professor & Assistant HOD",
      specialization: "Blockchain, CyberSecurity, COA",
      image: "https://thk0zqcdijpzgdnr.public.blob.vercel-storage.com/2-EuHThJGCti95jKS1yGhSztoRQBV9D6.jpeg",
    },
    {
      id: 3,
      name: "Prof. Dr. Sudipta Basu Pal",
      role: "Associate Professor",
      specialization: "OS, Internet Of Things, OOPS",
      image: "https://thk0zqcdijpzgdnr.public.blob.vercel-storage.com/3-5VPEcnydYIXTctT9LlHT2bNhiu47r9.jpeg",
    },
    {
      id: 4,
      name: "Prof. Dr. Chiradeep Mukherjee",
      role: "Assistant Professor",
      specialization: "AI & ML, NLP, COA",
      image: "https://thk0zqcdijpzgdnr.public.blob.vercel-storage.com/4-wz3aBhTDQwRv7ODjhkyhEVhfZaaPD1.jpeg",
    },
  ]
  
  // Sample data for news section
  export const news = [
    {
      id: 1,
      title: "Department Secures Major Research Grant",
      date: "March 15, 2025",
      excerpt:
        "Our department has been awarded a prestigious research grant to develop cutting-edge AI solutions for healthcare.",
      category: "Research",
      fullContent: `
        <p>We are thrilled to announce that our department has been awarded a prestigious research grant of $2.5 million from the National Science Foundation to develop cutting-edge AI solutions for healthcare.</p>
        
        <p>The project, titled "AI-Driven Diagnostic Tools for Early Disease Detection," will be led by Dr. Jane Smith and will involve a team of researchers from our department as well as collaborators from the University Medical Center.</p>
        
        <p>The research aims to develop machine learning algorithms that can analyze medical imaging data to detect early signs of diseases such as cancer, Alzheimer's, and cardiovascular conditions. The project is expected to run for three years and will provide numerous opportunities for graduate and undergraduate students to gain hands-on experience in AI research.</p>
        
        <p>"This grant represents a significant milestone for our department and recognizes our expertise in artificial intelligence and its applications in healthcare," said Dr. Smith. "We are excited about the potential impact of this research on improving patient outcomes through early disease detection."</p>
        
        <p>The department will be organizing a kickoff symposium in the coming months to introduce the project to the academic community and industry partners. Stay tuned for more updates on this exciting initiative!</p>
      `,
    },
    {
      id: 2,
      title: "Annual Tech Symposium Announced",
      date: "February 28, 2025",
      excerpt:
        "Join us for our annual technology symposium featuring industry experts, workshops, and networking opportunities.",
      category: "Event",
      fullContent: `
        <p>We are excited to announce our Annual Technology Symposium, scheduled for April 15-17, 2025, at the University Main Auditorium.</p>
        
        <p>This year's theme is "Emerging Technologies: Shaping the Future," and will feature keynote speeches, panel discussions, workshops, and networking sessions focused on the latest trends and innovations in technology.</p>
        
        <p>We have an impressive lineup of speakers from leading tech companies including Google, Microsoft, Amazon, and Tesla, as well as renowned academics from top universities around the world.</p>
        
        <p>The symposium will cover a wide range of topics including:</p>
        <ul>
          <li>Artificial Intelligence and Machine Learning</li>
          <li>Quantum Computing</li>
          <li>Cybersecurity</li>
          <li>Blockchain Technology</li>
          <li>Internet of Things (IoT)</li>
          <li>5G and Beyond</li>
        </ul>
        
        <p>Students will have the opportunity to showcase their projects and research work through poster presentations and demo sessions. There will also be a job fair where companies will be recruiting for internships and full-time positions.</p>
        
        <p>Registration is now open, with early bird discounts available until March 31. Students can register at a special discounted rate. For more information and to register, please visit the symposium website or contact the organizing committee at symposium@cstcsit.edu.</p>
        
        <p>We look forward to your participation in this exciting event!</p>
      `,
    },
    {
      id: 3,
      title: "Students Win National Coding Competition",
      date: "January 20, 2025",
      excerpt:
        "Our students secured first place in the national coding championship, demonstrating exceptional problem-solving skills.",
      category: "Achievement",
      fullContent: `
        <p>We are proud to announce that a team of four students from our department has won the National Coding Championship 2025, beating over 200 teams from universities across the country.</p>
        
        <p>The winning team, "Code Wizards," consisted of Rahul Sharma (4th year), Priya Patel (3rd year), Amit Kumar (4th year), and Sneha Gupta (2nd year). They demonstrated exceptional problem-solving skills, algorithmic thinking, and teamwork throughout the competition.</p>
        
        <p>The championship, organized by TechCorp Inc., is one of the most prestigious coding competitions in the country. It tests participants' abilities to solve complex algorithmic problems under time constraints. The final round, held in Bangalore last weekend, featured 20 teams that had qualified through regional rounds.</p>
        
        <p>"It was an intense competition with some really challenging problems," said team leader Rahul Sharma. "We had been preparing for months, solving problems together every weekend. Our professors' guidance and the rigorous training in data structures and algorithms really paid off."</p>
        
        <p>The team won a cash prize of ₹5,00,000, internship opportunities at TechCorp, and the latest gaming laptops for each team member. More importantly, they have brought recognition to our department and university on the national stage.</p>
        
        <p>Department Head Dr. Rajesh Kumar expressed his pride in the team's achievement: "This victory reflects the quality of education and training we provide at our department. These students have not only made us proud but have also inspired their peers to excel in competitive programming."</p>
        
        <p>A felicitation ceremony will be held next week to honor the winning team. The department is also planning to enhance its competitive programming club to build on this success and prepare more students for future competitions.</p>
      `,
    },
    {
      id: 4,
      title: "New AI Lab Inauguration",
      date: "December 10, 2024",
      excerpt:
        "The department is proud to announce the inauguration of our state-of-the-art Artificial Intelligence laboratory.",
      category: "Facility",
      fullContent: `
        <p>We are delighted to announce the inauguration of our new state-of-the-art Artificial Intelligence Laboratory on December 20, 2024. The lab will be officially opened by Prof. Samantha Lee, a renowned AI researcher from Stanford University.</p>
        
        <p>The AI Lab represents an investment of over ₹2 crore and is equipped with the latest hardware and software resources for advanced AI research and education. The facilities include:</p>
        
        <ul>
          <li>A cluster of high-performance computing servers with multiple NVIDIA A100 GPUs</li>
          <li>Specialized workstations for deep learning and computer vision research</li>
          <li>Robotics equipment including humanoid robots, drones, and robotic arms</li>
          <li>Advanced sensor arrays for IoT and smart environment research</li>
          <li>Collaborative spaces for team projects and research discussions</li>
        </ul>
        
        <p>The lab will support a wide range of research areas including machine learning, natural language processing, computer vision, robotics, and AI ethics. It will be available to undergraduate and graduate students, faculty members, and research scholars.</p>
        
        <p>"This new facility will significantly enhance our research capabilities and provide our students with hands-on experience using the same tools and technologies used in industry," said Dr. Anand Singh, who will be heading the lab. "It will also strengthen our collaborations with industry partners and other academic institutions."</p>
        
        <p>The inauguration ceremony will include demonstrations of ongoing AI projects, a panel discussion on the future of AI, and networking opportunities with industry representatives. All students and faculty members are invited to attend.</p>
        
        <p>Following the inauguration, the department will be launching several new initiatives including an AI Innovation Challenge, specialized workshops, and a seminar series featuring speakers from academia and industry.</p>
      `,
    },
  ]
  
  // Stats data
  export const stats = [
    {
      id: 1,
      name: "Students",
      value: "1,200+",
      icon: "Users",
      description: "Bright minds shaping the future",
    },
    {
      id: 2,
      name: "Courses",
      value: "40+",
      icon: "BookOpen",
      description: "Comprehensive curriculum",
    },
    {
      id: 3,
      name: "Awards",
      value: "50+",
      icon: "Award",
      description: "Recognition for excellence",
    },
    {
      id: 4,
      name: "Labs",
      value: "12",
      icon: "Building",
      description: "State-of-the-art facilities",
    },
  ]
  
  export const subjectsData = [
    {
      id: 1,
      name: "First Semester",
      credits: 24,
      subjects: [
        {
          name: "Engineering Mathematics I",
          code: "MA101",
          type: "Theory",
          credits: 4,
          hours: 4,
          resources: 12,
          driveLink: "https://drive.google.com/drive/folders/example-link-1",
        },
        {
          name: "Engineering Physics",
          code: "PH101",
          type: "Theory + Lab",
          credits: 4,
          hours: 6,
          resources: 15,
          driveLink: "https://drive.google.com/drive/folders/example-link-2",
        },
        {
          name: "Engineering Chemistry",
          code: "CH101",
          type: "Theory + Lab",
          credits: 4,
          hours: 6,
          resources: 14,
          driveLink: "https://drive.google.com/drive/folders/example-link-3",
        },
        {
          name: "Basic Electrical Engineering",
          code: "EE101",
          type: "Theory + Lab",
          credits: 4,
          hours: 6,
          resources: 10,
          driveLink: "https://drive.google.com/drive/folders/example-link-4",
        },
        {
          name: "Engineering Graphics & Design",
          code: "ME101",
          type: "Theory + Lab",
          credits: 3,
          hours: 5,
          resources: 8,
          driveLink: "https://drive.google.com/drive/folders/example-link-5",
        },
        {
          name: "Communication Skills",
          code: "HU101",
          type: "Theory",
          credits: 2,
          hours: 3,
          resources: 6,
          driveLink: "https://drive.google.com/drive/folders/example-link-6",
        },
      ],
    },
    {
      id: 2,
      name: "Second Semester",
      credits: 25,
      subjects: [
        {
          name: "Engineering Mathematics II",
          code: "MA102",
          type: "Theory",
          credits: 4,
          hours: 4,
          resources: 14,
          driveLink: "https://drive.google.com/drive/folders/example-link-7",
        },
        {
          name: "Programming for Problem Solving",
          code: "CS101",
          type: "Theory + Lab",
          credits: 4,
          hours: 6,
          resources: 18,
          driveLink: "https://drive.google.com/drive/folders/example-link-8",
        },
        {
          name: "Engineering Mechanics",
          code: "ME102",
          type: "Theory",
          credits: 4,
          hours: 4,
          resources: 12,
          driveLink: "https://drive.google.com/drive/folders/example-link-9",
        },
        {
          name: "Basic Electronics",
          code: "EC101",
          type: "Theory + Lab",
          credits: 4,
          hours: 6,
          resources: 15,
          driveLink: "https://drive.google.com/drive/folders/example-link-10",
        },
        {
          name: "Environmental Science",
          code: "ES101",
          type: "Theory",
          credits: 3,
          hours: 3,
          resources: 9,
          driveLink: "https://drive.google.com/drive/folders/example-link-11",
        },
        {
          name: "Professional Ethics",
          code: "HU102",
          type: "Theory",
          credits: 2,
          hours: 2,
          resources: 7,
          driveLink: "https://drive.google.com/drive/folders/example-link-12",
        },
      ],
    },
    {
      id: 3,
      name: "Third Semester",
      credits: 26,
      subjects: [
        {
          name: "Data Structures",
          code: "CS201",
          type: "Theory + Lab",
          credits: 4,
          hours: 6,
          resources: 20,
          driveLink: "https://drive.google.com/drive/folders/example-link-13",
        },
        {
          name: "Digital Logic Design",
          code: "CS202",
          type: "Theory + Lab",
          credits: 4,
          hours: 6,
          resources: 16,
          driveLink: "https://drive.google.com/drive/folders/example-link-14",
        },
        {
          name: "Discrete Mathematics",
          code: "MA201",
          type: "Theory",
          credits: 4,
          hours: 4,
          resources: 12,
          driveLink: "https://drive.google.com/drive/folders/example-link-15",
        },
        {
          name: "Object Oriented Programming",
          code: "CS203",
          type: "Theory + Lab",
          credits: 4,
          hours: 6,
          resources: 18,
          driveLink: "https://drive.google.com/drive/folders/example-link-16",
        },
        {
          name: "Computer Organization",
          code: "CS204",
          type: "Theory",
          credits: 4,
          hours: 4,
          resources: 14,
          driveLink: "https://drive.google.com/drive/folders/example-link-17",
        },
        {
          name: "Economics for Engineers",
          code: "HU201",
          type: "Theory",
          credits: 3,
          hours: 3,
          resources: 8,
          driveLink: "https://drive.google.com/drive/folders/example-link-18",
        },
      ],
    },
    {
      id: 4,
      name: "Fourth Semester",
      credits: 25,
      subjects: [
        {
          name: "Design and Analysis of Algorithms",
          code: "CS301",
          type: "Theory + Lab",
          credits: 4,
          hours: 6,
          resources: 22,
          driveLink: "https://drive.google.com/drive/folders/example-link-19",
        },
        {
          name: "Database Management Systems",
          code: "CS302",
          type: "Theory + Lab",
          credits: 4,
          hours: 6,
          resources: 20,
          driveLink: "https://drive.google.com/drive/folders/example-link-20",
        },
        {
          name: "Operating Systems",
          code: "CS303",
          type: "Theory + Lab",
          credits: 4,
          hours: 6,
          resources: 18,
          driveLink: "https://drive.google.com/drive/folders/example-link-21",
        },
        {
          name: "Theory of Computation",
          code: "CS304",
          type: "Theory",
          credits: 4,
          hours: 4,
          resources: 15,
          driveLink: "https://drive.google.com/drive/folders/example-link-22",
        },
        {
          name: "Software Engineering",
          code: "CS305",
          type: "Theory + Lab",
          credits: 4,
          hours: 6,
          resources: 16,
          driveLink: "https://drive.google.com/drive/folders/example-link-23",
        },
        {
          name: "Technical Writing",
          code: "HU301",
          type: "Theory",
          credits: 2,
          hours: 2,
          resources: 7,
          driveLink: "https://drive.google.com/drive/folders/example-link-24",
        },
      ],
    },
    {
      id: 5,
      name: "Fifth Semester",
      credits: 24,
      subjects: [
        {
          name: "Computer Networks",
          code: "CS401",
          type: "Theory + Lab",
          credits: 4,
          hours: 6,
          resources: 19,
          driveLink: "https://drive.google.com/drive/folders/example-link-25",
        },
        {
          name: "Web Technologies",
          code: "CS402",
          type: "Theory + Lab",
          credits: 4,
          hours: 6,
          resources: 21,
          driveLink: "https://drive.google.com/drive/folders/example-link-26",
        },
        {
          name: "Artificial Intelligence",
          code: "CS403",
          type: "Theory + Lab",
          credits: 4,
          hours: 6,
          resources: 17,
          driveLink: "https://drive.google.com/drive/folders/example-link-27",
        },
        {
          name: "Compiler Design",
          code: "CS404",
          type: "Theory + Lab",
          credits: 4,
          hours: 6,
          resources: 16,
          driveLink: "https://drive.google.com/drive/folders/example-link-28",
        },
        {
          name: "Information Security",
          code: "CS405",
          type: "Theory",
          credits: 4,
          hours: 4,
          resources: 14,
          driveLink: "https://drive.google.com/drive/folders/example-link-29",
        },
        {
          name: "Professional Communication",
          code: "HU401",
          type: "Theory",
          credits: 2,
          hours: 2,
          resources: 8,
          driveLink: "https://drive.google.com/drive/folders/example-link-30",
        },
      ],
    },
    {
      id: 6,
      name: "Sixth Semester",
      credits: 24,
      subjects: [
        {
          name: "Machine Learning",
          code: "CS501",
          type: "Theory + Lab",
          credits: 4,
          hours: 6,
          resources: 23,
          driveLink: "https://drive.google.com/drive/folders/example-link-31",
        },
        {
          name: "Cloud Computing",
          code: "CS502",
          type: "Theory + Lab",
          credits: 4,
          hours: 6,
          resources: 18,
          driveLink: "https://drive.google.com/drive/folders/example-link-32",
        },
        {
          name: "Mobile Application Development",
          code: "CS503",
          type: "Theory + Lab",
          credits: 4,
          hours: 6,
          resources: 20,
          driveLink: "https://drive.google.com/drive/folders/example-link-33",
        },
        {
          name: "Data Mining and Warehousing",
          code: "CS504",
          type: "Theory + Lab",
          credits: 4,
          hours: 6,
          resources: 16,
          driveLink: "https://drive.google.com/drive/folders/example-link-34",
        },
        {
          name: "Computer Graphics",
          code: "CS505",
          type: "Theory + Lab",
          credits: 4,
          hours: 6,
          resources: 15,
          driveLink: "https://drive.google.com/drive/folders/example-link-35",
        },
        {
          name: "Project Management",
          code: "HU501",
          type: "Theory",
          credits: 2,
          hours: 2,
          resources: 9,
          driveLink: "https://drive.google.com/drive/folders/example-link-36",
        },
      ],
    },
    {
      id: 7,
      name: "Seventh Semester",
      credits: 22,
      subjects: [
        {
          name: "Big Data Analytics",
          code: "CS601",
          type: "Theory + Lab",
          credits: 4,
          hours: 6,
          resources: 19,
          driveLink: "https://drive.google.com/drive/folders/example-link-37",
        },
        {
          name: "Internet of Things",
          code: "CS602",
          type: "Theory + Lab",
          credits: 4,
          hours: 6,
          resources: 17,
          driveLink: "https://drive.google.com/drive/folders/example-link-38",
        },
        {
          name: "Distributed Systems",
          code: "CS603",
          type: "Theory",
          credits: 4,
          hours: 4,
          resources: 14,
          driveLink: "https://drive.google.com/drive/folders/example-link-39",
        },
        {
          name: "Natural Language Processing",
          code: "CS604",
          type: "Theory + Lab",
          credits: 4,
          hours: 6,
          resources: 16,
          driveLink: "https://drive.google.com/drive/folders/example-link-40",
        },
        {
          name: "Major Project - I",
          code: "CS605",
          type: "Project",
          credits: 6,
          hours: 12,
          resources: 8,
          driveLink: "https://drive.google.com/drive/folders/example-link-41",
        },
      ],
    },
    {
      id: 8,
      name: "Eighth Semester",
      credits: 20,
      subjects: [
        {
          name: "Deep Learning",
          code: "CS701",
          type: "Theory + Lab",
          credits: 4,
          hours: 6,
          resources: 21,
          driveLink: "https://drive.google.com/drive/folders/example-link-42",
        },
        {
          name: "Blockchain Technology",
          code: "CS702",
          type: "Theory + Lab",
          credits: 4,
          hours: 6,
          resources: 18,
          driveLink: "https://drive.google.com/drive/folders/example-link-43",
        },
        {
          name: "Quantum Computing",
          code: "CS703",
          type: "Theory",
          credits: 4,
          hours: 4,
          resources: 15,
          driveLink: "https://drive.google.com/drive/folders/example-link-44",
        },
        {
          name: "Major Project - II",
          code: "CS704",
          type: "Project",
          credits: 8,
          hours: 16,
          resources: 10,
          driveLink: "https://drive.google.com/drive/folders/example-link-45",
        },
      ],
    },
  ]
  