import turningGraphic from "../assets/services/turning-graphic.jpg";
import edmGraphic from "../assets/services/edm-graphic.jpg";
import fourthAxisGraphic from "../assets/services/4th-axis-graphic.jpg";
import diecastingGraphic from "../assets/services/diecasting-graphic.jpg";
import patternPlateMachining from "../assets/services/pattern-plate-machining.jpg";
import subAssemblyGraphic from "../assets/services/sub-assembly-graphic.jpg";
import toolAssemblyGraphic from "../assets/services/tool-assembly-graphic.jpg";
import pressToolFabGraphic from "../assets/services/press-tool-fab-graphic.jpg";
import pressToolTestingGraphic from "../assets/services/press-tool-testing-graphic.jpg";

export const services = [
  {
    id: "precision-machined-parts",
    slug: "precision-machined-parts",
    navLabel: "Precision Machined Parts",
    shortName: "Precision Machining",
    seoTitle: "Precision Machined Parts | CNC Turning, EDM & 4th Axis",
    metaDescription:
      "Precision machined parts using CNC turning, EDM sparking and 4th axis rotary machining for automotive, tooling and industrial components.",
    heroImage: turningGraphic,
    summary:
      "CNC turning, CNC EDM sparking and 4th axis rotary machining for components across automotive, tooling and industrial applications.",
    intro: [
      "Precision machined parts require accurate manufacturing, consistent dimensions and reliable repeatability. Our precision CNC machining combines CNC turning, CNC EDM sparking and 4th axis rotary machining to manufacture components for automotive, tooling and industrial applications.",
      "From cylindrical components and shafts to complex cavities, dies, fixtures and multi-face components, our machining capability is built to support different component geometries and production requirements.",
    ],
    capabilities: [
      "CNC turning services",
      "CNC EDM sparking and cavity sinking",
      "4th axis rotary table machining",
      "Precision cylindrical machining",
      "Complex geometry machining",
      "Multi-side component machining",
      "Die and mould machining",
      "Tool and fixture machining",
      "Automotive component machining",
      "Industrial component machining",
    ],
    sections: [
      {
        heading: "CNC Turning \u2013 Precision Cylindrical Machining",
        body: "Our CNC turning is suited to cylindrical and rotationally symmetric metal components. The Jyoti DX 200 CNC Turning Center provides a maximum turning diameter of \u00d8365 mm and spindle speeds up to 4000 RPM \u2013 suitable for components that need consistent dimensions and repeatable machining across shafts, bushings, flanges, pins, sleeves and other rotationally symmetric parts.",
        image: turningGraphic,
      },
      {
        heading: "CNC Sparking & EDM \u2013 Precision Cavity Sinking",
        body: "CNC EDM (electrical discharge machining) is used for complex shapes, deep contours and cavities where conventional rotating cutting tools reach their limits. Our CNC sparking runs on the Ratna Sparking 7045 CNC EDM, with an 800 kg maximum load capacity and a large dielectric tank for continuous submersion \u2013 suited to die cavity manufacturing, complex tooling geometries and hardened material (60+ HRC) applications.",
        image: edmGraphic,
      },
      {
        heading: "4th Axis Rotary Table Machining",
        body: "4th axis rotary machining lets components be indexed and machined across multiple faces and angular orientations in a single setup. Our Model-GXA 320H hydraulic clamping rotary table provides rigid workholding, cutting cumulative setup error and preserving true-position and concentricity for multi-face blocks, manifold housings, angular brackets and indexing plates.",
        image: fourthAxisGraphic,
      },
    ],
    applications: [
      "Automotive components: powertrain brackets, drive shafts, valve sleeves, fixtures and custom tooling",
      "Tool and die components: die blocks, mould cavities, core inserts, stamping punches and locating fixtures",
      "Industrial components: machinery parts, fluid manifold housings, wear sleeves, bushings and custom equipment parts",
    ],
    workflow: [
      { title: "Requirement Review", body: "Assessment of 2D/3D CAD, GD&T, material grades and batch volumes." },
      { title: "Process Selection", body: "Routing across turning, 4th axis milling or EDM cavity sinking." },
      { title: "CNC Machining", body: "Execution with optimised feed rates, tooling and hydraulic clamping." },
      { title: "Inspection", body: "Verification of critical dimensions using calibrated measuring instruments." },
      { title: "Finishing", body: "Deburring, surface treatment, cleaning and protective packaging." },
      { title: "Delivery", body: "Dispatch with inspection documentation and certificate of conformance." },
    ],
    faqs: [
      {
        q: "What are precision machined parts?",
        a: "Components manufactured using controlled machining operations to achieve tight tolerances, intricate geometries and high batch-to-batch repeatability.",
      },
      {
        q: "What is the maximum turning diameter of your CNC turning centre?",
        a: "The Jyoti DX 200 CNC Turning Center supports a maximum turning diameter of \u00d8365 mm with spindle speeds up to 4000 RPM.",
      },
      {
        q: "What is cavity sinking EDM?",
        a: "An electrical discharge process that uses a shaped electrode submerged in dielectric fluid to reproduce complex blind cavities in conductive materials, regardless of hardness.",
      },
      {
        q: "What are the benefits of 4th axis machining?",
        a: "It allows indexing and machining across multiple faces in a single clamping, cutting cycle times and removing alignment errors between separate setups.",
      },
    ],
    cta: "Share your technical drawings (PDF, DWG or STEP) with our team for process evaluation and quotation.",
  },
  {
    id: "mould-and-dies",
    slug: "mould-and-dies",
    navLabel: "Mould & Die Manufacturing",
    shortName: "Mould & Dies",
    seoTitle: "Mould and Die Manufacturing Services | Precision Tooling",
    metaDescription:
      "Mould and die manufacturing services for aluminium die casting, automotive components, industrial parts and precision foundry pattern plates.",
    heroImage: diecastingGraphic,
    summary:
      "Custom moulds, dies, aluminium die casting tooling and foundry pattern plates for automotive, industrial and casting applications.",
    intro: [
      "Mould and die manufacturing plays an important role in producing accurate, repeatable and durable metal components for automotive, industrial, electrical, electronic and foundry applications. Our mould and die manufacturing is built around specific component geometry, production requirements and casting applications.",
      "We manufacture custom moulds, dies, aluminium die casting moulds and pattern plates with a focus on dimensional accuracy, repeatability, durability and reliable production performance.",
    ],
    capabilities: [
      "Custom mould and die manufacturing",
      "Aluminium die casting mould and die manufacturing",
      "Pattern plate manufacturing",
      "Foundry pattern plate manufacturing",
      "Match plate pattern manufacturing",
      "Tooling for automotive components",
      "Tooling for industrial machinery components",
      "Tooling for electrical and electronic enclosures",
      "Custom moulds and dies for heavy-duty metal components",
    ],
    sections: [
      {
        heading: "Aluminium Die Casting Mould & Die",
        body: "Aluminium die casting moulds and dies produce metal components with consistent shapes, dimensions and surface characteristics \u2013 particularly suited to high-volume production where repeatability and mould durability matter. Applications include automotive engine and transmission components, industrial machinery housings, structural metal components, and electrical or electronic enclosures.",
        image: diecastingGraphic,
      },
      {
        heading: "Pattern Plate Manufacturing",
        body: "Pattern plates are tooling components used in foundry and sand casting to create accurate mould cavities and improve repeatability during casting production. We manufacture precision pattern plates for sand casting, green sand moulding, shell moulding and match plate moulding, across both ferrous and non-ferrous metals.",
        image: patternPlateMachining,
      },
    ],
    mouldTypesIntro:
      "Alongside custom aluminium die casting tooling, our facility also builds pattern plates and press tool sets \u2013 the reference types below outline the tooling forms we work with.",
    process: [
      "Requirement Review \u2013 component requirements, application, production volume and tooling needs are reviewed before manufacturing begins.",
      "Tooling Design \u2013 the mould, die or pattern plate is designed to the component geometry and manufacturing process.",
      "Manufacturing \u2013 tooling is produced to the approved design and dimensional specification.",
      "Inspection \u2013 the completed mould, die or pattern plate is checked for dimensional accuracy and build quality.",
      "Validation \u2013 tooling is evaluated for its intended application, with adjustments made before production.",
      "Delivery \u2013 finished tooling is prepared for the customer's production process.",
    ],
    faqs: [
      {
        q: "What is mould and die manufacturing?",
        a: "The process of designing and producing specialised tooling used to shape and form components during manufacturing and casting, built to the required component geometry and production method.",
      },
      {
        q: "What is an aluminium die casting mould?",
        a: "Specialised tooling used to produce aluminium components through the die casting process, designed to create the required shape and support repeatable production.",
      },
      {
        q: "Can moulds and dies be customised?",
        a: "Yes \u2013 to component geometry, production volume, casting method, dimensional requirements and the intended manufacturing application.",
      },
      {
        q: "What is a pattern plate used for?",
        a: "A pattern plate is used in foundry and moulding applications to create the required mould cavity for casting, improving repeatability and consistency during mould preparation.",
      },
    ],
    cta: "Contact us to discuss your component design, aluminium die casting tooling or pattern plate requirements.",
  },
  {
    id: "mechanical-assembly",
    slug: "mechanical-assembly",
    navLabel: "Mechanical & Tool Assembly",
    shortName: "Mechanical Assembly",
    seoTitle: "Mechanical Assembly Services | Tool & Sub-Assembly",
    metaDescription:
      "Mechanical sub-assembly and tool assembly services for machined components, die sets, fixtures, jigs and industrial mechanical assemblies.",
    heroImage: subAssemblyGraphic,
    summary:
      "Turning individually machined components into complete, functional assemblies ready for line integration.",
    intro: [
      "Mechanical sub-assembly and tool assembly services help transform individual machined components into complete, functional assemblies ready for integration into larger systems or production processes.",
      "Our assembly work covers mechanical sub-assemblies, tooling components, fixtures, jigs, die sets and complete tool assemblies \u2013 each carried out to the component design, fit requirements, alignment requirements and intended application.",
    ],
    capabilities: [
      "Machined component assembly & mechanical component integration",
      "Modular sub-assembly & machine sub-unit assembly",
      "Tooling component assembly, fixture and jig integration",
      "Die set assembly for press tools and mould bases",
      "Pre-assembly of multi-part units for swift line integration",
    ],
    sections: [
      {
        heading: "Full Tool Assembly & Tooling Integration",
        body: "Individually manufactured components are assembled into ready-to-run tooling packages: accurate integration of core blocks, cavity plates, ejector pins, guide pillars and bushings for die and mould tool assembly; mechanical fastening, clamping integration, pin alignment and repeatability testing for fixtures and jigs; and dedicated bench assembly for small mechanical units, actuators, brackets and machine sub-modules.",
        image: toolAssemblyGraphic,
      },
      {
        heading: "Mechanical Sub-Assembly Works",
        body: "Component integration and mechanical sub-assembly tasks prepare modular parts for industrial deployment \u2013 checked for clearance, parallelism, squareness and rotational freedom before functional verification.",
        image: subAssemblyGraphic,
      },
    ],
    workflow: [
      { title: "Component Review", body: "Audit of parts, bill of materials and tolerance stack-ups against assembly drawings." },
      { title: "Component Preparation", body: "Cleaning, deburring, inspection and staging of fasteners and pins." },
      { title: "Component Integration", body: "Sequential fit-up following torque parameters and dowel alignment." },
      { title: "Fit & Alignment Check", body: "Checking clearance, parallelism, squareness and rotational freedom." },
      { title: "Functional Verification", body: "Smoothness of stroke, locking mechanism function and interface testing." },
      { title: "Final Inspection & Delivery", body: "QA sign-off and secure crating for plant-floor deployment." },
    ],
    faqs: [
      {
        q: "What is the difference between sub-assembly and full tool assembly?",
        a: "A sub-assembly is a modular unit that integrates into a larger system, such as a bearing block or guide assembly. Full tool assembly produces a finished, operational tool such as a complete die set or machining fixture.",
      },
      {
        q: "Can you assemble customer-supplied parts with in-house machined parts?",
        a: "Yes \u2013 hybrid assembly projects combining client-furnished hardware with components machined in our workshop are handled regularly.",
      },
      {
        q: "What documentation is needed to start an assembly project?",
        a: "Assembly drawings with torque and fit specifications, a bill of materials, 3D CAD models, and functional acceptance criteria.",
      },
    ],
    cta: "Send your sub-assembly drawings and BOM to receive a manufacturing and assembly plan.",
  },
  {
    id: "press-tool-assembly",
    slug: "press-tool-assembly",
    navLabel: "Press Tool Assembly",
    shortName: "Press Tool Assembly",
    seoTitle: "Press Tool Assembly & Fabrication Services | Testing",
    metaDescription:
      "Press tool assembly, fabrication, alignment and trial testing for progressive, compound and single-operation sheet metal stamping tools.",
    heroImage: pressToolFabGraphic,
    summary:
      "Fabrication, assembly, alignment and trial testing for progressive, compound and single-operation press tools.",
    intro: [
      "Press tool assembly is central to sheet metal stamping, where accurately manufactured components are assembled, aligned and tested to create a functional production tool. Our press tool assembly covers the complete tooling process, from fabrication of individual components through to full tool assembly, alignment and trial testing.",
      "We support progressive press tools, compound tools and single-operation press tools across automotive, electrical, electronic and industrial sheet metal manufacturing.",
    ],
    capabilities: [
      "Punch plate fabrication",
      "Die block machining (D2, H13 tool steels)",
      "Stripper plate fabrication",
      "Progressive press tool building",
      "Compound press tool building",
      "Single-operation press tool building",
    ],
    sections: [
      {
        heading: "Critical Tooling Component Fabrication",
        body: "Punch plates are precision ground and bored to hold punches in exact positional orientation. Die blocks are machined from hardened alloy and tool steels (D2, H13) to withstand repeated stamping shock. Stripper plates are engineered for positive sheet strip control, smooth ejection and clearance guidance.",
        image: pressToolFabGraphic,
      },
      {
        heading: "Tool Alignment and Trial Testing",
        body: "Accurate punch-to-die clearance is essential to tool longevity and burr-free parts. Optical and feeler inspection verifies uniform cutting clearance across punch contours, followed by press trials to evaluate material feed progression, slug clearance, stripping action and forming fidelity before fine tuning and sign-off.",
        image: pressToolTestingGraphic,
      },
    ],
    types: [
      {
        name: "Progressive Press Tools",
        detail: "Multi-station stamping dies performing sequential piercing, notching, bending and blanking on continuous strip coils for high-volume automotive and electronics applications.",
      },
      {
        name: "Compound Press Tools",
        detail: "Single-stroke cutting dies that perform blanking and internal piercing simultaneously, guaranteeing concentricity.",
      },
      {
        name: "Single-Operation Press Tools",
        detail: "Specialised dies for dedicated secondary operations \u2013 blanking, forming, flanging or trimming.",
      },
    ],
    workflow: [
      { title: "Tooling Requirement & CAD Review", body: "Strip layout analysis, tonnage calculations and die clearance evaluation." },
      { title: "Component Fabrication", body: "Precision machining of punch plates, die blocks, stripper plates and guide systems." },
      { title: "Assembly & Alignment", body: "Optical and feeler inspection verifying uniform cutting clearance across punch contours." },
      { title: "Trial Testing", body: "Press trials evaluating material feed, slug clearance, stripping action and forming fidelity." },
      { title: "Fine Tuning & Sign-off", body: "Punch relief adjustments, edge re-stoning and FAI measurement before handover." },
    ],
    faqs: [
      {
        q: "Why is trial testing critical before shipping a press tool?",
        a: "Trial testing identifies strip feeding issues, punch deflection, improper clearance or burr formation under actual load, ensuring a production-ready tool on arrival.",
      },
      {
        q: "What materials are typically used for die blocks and punches?",
        a: "Tool steels such as D2, D3, H13 and tungsten carbide, selected based on sheet thickness, abrasiveness and expected stamping volumes.",
      },
      {
        q: "What is the advantage of a progressive press tool?",
        a: "Progressive dies allow complex components to be formed continuously at high cycle rates, reducing per-part manufacturing cost for volume production.",
      },
    ],
    cta: "Submit your component strip layout, sheet metal drawings and press machine specification for an engineering quote.",
  },
];

export const getServiceBySlug = (slug) =>
  services.find((s) => s.slug === slug);
