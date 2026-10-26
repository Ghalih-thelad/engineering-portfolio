/*
 * YOUR PROJECT CONTENT LIVES HERE.
 * --------------------------------------------------------------
 * To add a project: copy an object, give it a unique id, then
 * update the content and image paths. The website builds the
 * project cards and case-study popups automatically.
 *
 * category: "underwater", "automation", or "design"
 * featured: true -> wide first-row card (best for ONE project)
 */
const PROJECTS = [
  {
    id: "microtissue-robot",
    number: "01",
    featured: true,
    category: "automation",
    categoryLabel: "ROBOTICS / RESEARCH INTERNSHIP",
    dates: "AUG — DEC 2025",
    title: "AUTONOMOUS MICROTISSUE & LIQUID MANIPULATING ARM",
    shortTitle: "MICROTISSUE ROBOT",
    tagline: "VISION-GUIDED PRECISION, FROM IMAGE TO MOTION.",
    description: "A semi-autonomous system for locating and transferring microtissues between labware using a DOBOT MG400, machine vision, and a custom end-effector.",
    videos: [
      {
          type: "file",
          src: "videos/ALMA ARM.mp4",
          poster: "assets/vidthumbnail.webp",
          caption: "LIQUID HANDLING TEST"
      }
    ],
    thumbnail: "assets/robot-lab.webp",
    imagePosition: "center 54%",
    gallery: [
      { src: "assets/robot-lab.webp", alt: "Microtissue handling robotic arm working at NCKU", caption: "SYSTEM / DOBOT MG400 IN THE LAB" },
      { src: "assets/effector-cad.webp", alt: "CAD technical drawing of custom syringe-based end-effector", caption: "DESIGN / CUSTOM SYRINGE END-EFFECTOR" },
      { src: "assets/Cara kerja EE.webp", alt: "End Effector Workflow", caption: "END-EFFECTOR WORKFLOW" },
      { src: "assets/microtissues-a.webp", alt: "Computer vision image of microtissues in a Petri dish", caption: "PERCEPTION / MICROTISSUE DETECTION" }
    ],
    facts: [{ value: "0.922", label: "mAP@0.5" }, { value: "0.921", label: "RECALL" }, { value: "1.881", label: "POSITION RMS / MM" }],
    role: "Research Intern · Integrated Mechano-Biosystem Lab, NCKU, Taiwan",
    tasks: [
      "Designed a 1 cc syringe-based, stepper-driven suction end-effector for controlled microtissue pickup and release.",
      "Implemented YOLOv8 object detection and homography for image-to-workspace coordinate mapping.",
      "Integrated the camera, Raspberry Pi 5, end-effector, and DOBOT MG400 into a robotic handling workflow.",
      "Validated detection (0.853 precision, 0.921 recall, 0.922 mAP@0.5) and positioning (1.424 mm mean error, 1.881 mm RMS error)."
    ],
    stack: ["DOBOT MG400", "PYTHON", "YOLOV8", "OPENCV", "RASPBERRY PI", "CAD"]
  },
  {
    id: "auv-control",
    number: "02",
    featured: false,
    category: "design",
    categoryLabel: "PERSONAL RESEARCH / ROS2",
    dates: "SEPT — NOV 2026",
    title: "ROS2 & GAZEBO SIMULATION OF AUV",
    shortTitle: "AUV ROS2 SIMULATION",
    tagline: "SIMULATION AND CONTROL OF AUTONOMOUS UNDERWATER VEHICLES.",
    description: "An ongoing personal research project focused on developing a physics-based simulation of a long-range Autonomous Underwater Vehicle (AUV) using ROS 2 and Gazebo. The project integrates a custom underwater vehicle model, hydrodynamic forces, buoyancy, twin-thruster propulsion, and controllable fins. It explores both manual ROV operation and autonomous stabilization through feedback control of depth, heading, pitch, and forward speed.",
    model3d: {
    src: "models/MRV Baracuda.glb",
    poster: "assets/CAD_loading.webp",
    label: "3D VIEWER TEST",
    },
    videos: [
      {
          type: "file",
          src: "videos/AUV Simulation.mp4",
          poster: "assets/vidthumbnail.webp",
          caption: "GAZEBO / UNDERWATER VEHICLE SIMULATION"
      }
    ],
    thumbnail: "assets/long-range-auv.webp",
    imagePosition: "center",
    gallery: [
      { src: "assets/long-range-auv.webp", alt: "CAD render of long-range AUV", caption: "PLATFORM / LONG-RANGE AUV CONCEPT" },
    ],
    facts: [
        { value: "ROS 2", label: "ROBOTICS FRAMEWORK" },
        { value: "GAZEBO", label: "PHYSICS SIMULATION" },
        { value: "PID / PI", label: "FEEDBACK CONTROL" },
        { value: "4", label: "ACTUATORS / 2 THRUSTERS + 2 FINS" }
    ],
    role: "Personal Research Project",
    tasks: [
      "Developed a custom AUV simulation model using URDF and Gazebo, including the hull, twin rear thrusters, controllable elevator fins, and passive stabilizers.",
      "Configured underwater physics including buoyancy, hydrodynamic damping, and fin lift and drag, with ballast distribution tuned for stable vehicle equilibrium.",
      "Integrated ROS 2 with Gazebo through ros_gz_bridge and ros2_control to command thrusters and fin actuators.",
      "Implemented differential thrust control for propulsion and steering, along with gamepad-based manual operation in ROV mode.",
      "Developed feedback controllers for depth, heading, pitch, and forward speed using PID/PI control strategies.",
      "Integrated simulated IMU and odometry feedback to support closed-loop control and evaluation of underwater vehicle motion."
    ],
    stack: ["ROS 2", "GAZEBO SIM", "HYDRODYNAMICS", "ROBOT SIMULATION"]
  },
  {
    id: "marvic-25",
    number: "03",
    featured: false,
    category: "underwater",
    categoryLabel: "UNDERWATER / AUV",
    dates: "NOV 2024 — MAR 2025",
    title: "MARVIC 2.5 — AUV",
    shortTitle: "MARVIC 2.5",
    tagline: "MECHANICAL PRECISION UNDER PRESSURE.",
    description: "An updated competition AUV with modular mechanical packaging and a servo-driven scissor mechanism to retrieve and release underwater payloads. Made to participate in the Singapore AUV Challenge 2025.",
    thumbnail: "assets/auv-competition.webp",
    imagePosition: "center 58%",
    gallery: [
      { src: "assets/auv-competition.webp", alt: "MARVIC 2.5 vehicle undergoing tests", caption: "PROTOTYPE / POOL VALIDATION" },
      { src: "assets/auv-scissor-cad.webp", alt: "Technical drawing of MARVIC scissor mechanism", caption: "MECHANISM / SCISSOR GRIPPER & TRAP DOOR" }
    ],
    facts: [{ value: "21", label: "RANK / 45 TEAMS" }, { value: "2025", label: "SAUVC" }],
    role: "Head Mechanic · MARE VICTOR, Universitas Airlangga",
    tasks: [
      "Drafted the vehicle's mechanical parts and enclosures with attention to buoyancy and modularity.",
      "Fabricated structural components using laser cutting and 3D printing.",
      "Developed and integrated a servo-actuated scissor and trap-door mechanism for underwater ball handling.",
      "Conducted sealing and waterproofing tests for competition readiness."
    ],
    stack: ["FUSION 360", "3D PRINTING", "LASER CUTTING", "CAD"]
  },
  {
    id: "biosensor",
    number: "04",
    featured: false,
    category: "automation",
    categoryLabel: "BIOMEDICAL / PRODUCT DESIGN",
    dates: "APR — OCT 2024",
    title: "PORTABLE CD4 MONITORING DEVICE",
    shortTitle: "CD4 MONITORING DEVICE",
    tagline: "PRECISION MECHANISMS FOR HUMAN HEALTH.",
    description: "A compact biomedical prototype exploring optical monitoring of CD4 white blood cell levels, with a custom camera stand and electrical housing.",
    thumbnail: "assets/biosensor-photo.webp",
    imagePosition: "center",
    gallery: [
      { src: "assets/biosensor-photo.webp", alt: "Physical prototype of biomedical device", caption: "PROTOTYPE / CAMERA AND HOUSING" },
      { src: "assets/biosensor-render.webp", alt: "3D CAD render of portable biosensor", caption: "CAD / CONCEPT MODEL" }
    ],
    facts: [{ value: "BRONZE", label: "PIMNAS 37 / PRESENTATION" }, { value: "2024", label: "NATIONAL COMPETITION" }],
    role: "Product Design · PKM-Karsa Cipta, Universitas Airlangga",
    tasks: [
      "Designed the optical camera stand and electrical enclosure in 3D CAD.",
      "Researched lens and camera configurations for medical image capture.",
      "Helped prototype an IoT-connected microfluidic optical sensing device.",
      "Presented the team project at PIMNAS 37, earning a bronze medal in the presentation category."
    ],
    stack: ["CAD", "OPTICAL SETUP", "PROTOTYPING", "IOT"]
  },
  {
    id: "agv",
    number: "05",
    featured: false,
    category: "automation",
    categoryLabel: "INDUSTRIAL AUTOMATION / AGV",
    dates: "AUG 2024 — JAN 2025",
    title: "LINE-FOLLOWING GUIDED VEHICLE",
    shortTitle: "AUTOMATED GUIDED VEHICLE",
    tagline: "A PRACTICAL MOBILE ROBOT FOR MATERIAL HANDLING.",
    description: "An automated guided vehicle concept developed to move miniature trolleys using line following and ultrasonic trolley detection.",
    model3d: {
    src: "models/AGV.glb",
    poster: "assets/CAD_loading.webp",
    label: "3D VIEWER TEST",
    },
    thumbnail: "assets/agv-photo.webp",
    imagePosition: "center",
    gallery: [
      { src: "assets/agv-photo.webp", alt: "Physical automated guided vehicle prototype", caption: "PROTOTYPE / AGV ASSEMBLY" },
      { src: "assets/agv-cad.webp", alt: "Mechanical CAD design for AGV", caption: "DRAWINGS / AGV DESIGN" }
    ],
    facts: [{ value: "AGV", label: "MOBILE ROBOT" }, { value: "2025", label: "ACADEMIC PROJECT" }],
    role: "Mechanical Drafter · Academic Team Project, Universitas Airlangga",
    tasks: [
      "Produced mechanical drawings for an AGV designed to transport small trolleys.",
      "Incorporated line-following guidance and ultrasonic trolley detection in the system concept.",
      "Collaborated on the physical assembly and proof-of-concept prototype."
    ],
    stack: ["CAD", "AGV", "LINE FOLLOWING", "ULTRASONIC SENSING"]
  },
  {
    id: "marvic-20",
    number: "06",
    featured: false,
    category: "underwater",
    categoryLabel: "UNDERWATER / AUV",
    dates: "APR — JUL 2024",
    title: "MARVIC 2.0 — AUV",
    shortTitle: "MARVIC 2.0",
    tagline: "A VEHICLE BUILT TO COMPLETE THE MISSION.",
    description: "A six-thruster AUV designed for underwater obstacle navigation and payload dropping at the Indonesian Underwater Robotics Contest (KRBAI) 2024.",
    videos: [
      {
          type: "file",
          src: "videos/KRBAI.mp4",
          poster: "assets/vidthumbnail.webp",
          caption: "AUV PERFORMANCE IN KRBAI 2024"
      }
    ],
    thumbnail: "assets/auv-pool.webp",
    imagePosition: "center 50%",
    gallery: [
      { src: "assets/auv-pool.webp", alt: "MARVIC 2.0 operating underwater", caption: "VEHICLE / UNDERWATER TEST" },
      { src: "assets/auv-cad.webp", alt: "Mechanical engineering drawing of MARVIC AUV", caption: "DRAWINGS / MECHANICAL DESIGN" },
      { src: "assets/bucket-CAD.webp", alt: "Mechanical engineering drawing of bucket mechanism", caption: "DRAWINGS / DROPPER" },
      { src: "assets/bucket-workflow.webp", alt: "Dropper", caption: "DROPPER WORKFLOW" }
    ],
    facts: [{ value: "09", label: "NATIONAL RANK / 18" }, { value: "1:22", label: "TIME / 3 OF 4 TASKS" }, { value: "6", label: "THRUSTERS" }],
    role: "Head Mechanic · MARE VICTOR, Universitas Airlangga",
    tasks: [
      "Designed vehicle components and the golf-ball release mechanism.",
      "Conducted waterproofing tests and participated in full-system integration.",
      "Assembled a 55 × 44 × 24 cm AUV, completing three of four competition tasks in 1 minute 22 seconds.",
      "Achieved 9th place nationally among 18 participating universities."
    ],
    stack: ["AUTODESK INVENTOR", "CAD", "ROBOTICS", "FABRICATION"]
  },
  {
    id: "marvic-10",
    number: "07",
    featured: false,
    category: "underwater",
    categoryLabel: "UNDERWATER / ROV",
    dates: "NOV 2023 — MAR 2024",
    title: "MARVIC 1.0 — ROV",
    shortTitle: "MARVIC 1.0",
    tagline: "WHERE THE UNDERWATER JOURNEY BEGAN.",
    description: "The team's first ROV prototype, turning early CAD and rapid fabrication into a waterproof, integrated underwater platform.",
    videos: [
      {
          type: "file",
          src: "videos/MARVIC 1.0 DEMO.mp4",
          poster: "assets/vidthumbnail.webp",
          caption: "MARVIC 1.0 ROV DEMONSTRATION"
      }
    ],
    thumbnail: "assets/MARVIC 1.0.webp",
    imagePosition: "center",
    gallery: [
      { src: "assets/MARVIC 1.0.webp", alt: "First ROV prototype", caption: "FIRST ROV PLATFORM" },
      { src: "assets/rov-prototype-cad.webp", alt: "Inventor CAD drawing of first ROV design", caption: "DRAWINGS / FIRST ROV PLATFORM" }],
    facts: [{ value: "01", label: "FIRST ROV PROTOTYPE" }, { value: "2024", label: "KRBAI PREPARATION" }],
    role: "Head Mechanic · MARE VICTOR, Universitas Airlangga",
    tasks: [
      "Designed mechanical parts and assembly layouts in Autodesk Inventor.",
      "Fabricated parts through 3D printing and laser cutting.",
      "Performed waterproofing checks on enclosures and connections.",
      "Assembled the mechanical system that became the foundation for the following AUV program."
    ],
    stack: ["AUTODESK INVENTOR", "PROTOTYPING", "3D PRINTING", "WATERPROOFING"]
  }  
];
