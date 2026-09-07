import fourthAxis1 from "../assets/equipment/4th-axis-1.jpg";
import fourthAxis2 from "../assets/equipment/4th-axis-2.jpg";
import powerGrip from "../assets/equipment/power-grip-unit.jpg";
import radialDrill from "../assets/equipment/radial-drill.jpg";
import magneticChuck from "../assets/equipment/magnetic-chuck.jpg";
import laserEngraving from "../assets/equipment/laser-engraving.jpg";
import manualStacker from "../assets/equipment/manual-stacker.jpg";
import shopCrane from "../assets/equipment/shop-crane.jpg";
import assemblyCrane from "../assets/equipment/assembly-crane.jpg";

import heightGauge from "../assets/instruments/height-gauge.jpg";
import vernierCaliper from "../assets/instruments/vernier-caliper.jpg";
import tester3d from "../assets/instruments/3d-tester.jpg";
import micrometer from "../assets/instruments/micrometer.jpg";

export const supportEquipment = [
  {
    id: "4th-axis",
    name: "4th Axis Rotary Table \u2013 GXA 320H",
    image: fourthAxis1,
    image2: fourthAxis2,
    blurb:
      "Hydraulic clamping rotary table for multi-side and angular component machining, 0.01 mm accuracy and 15 second repeatability.",
  },
  {
    id: "power-grip",
    name: "Power Grip Tool Clamping Unit",
    image: powerGrip,
    blurb:
      "Rego-Fix PGU 9500 E hydraulic clamping unit holding tool runout to 0.005 mm.",
  },
  {
    id: "radial-drill",
    name: "MAAN Radial Drilling Machine",
    image: radialDrill,
    blurb: "360-degree rotation arm, drill diameter up to 40 mm.",
  },
  {
    id: "magnetic-chuck",
    name: "Electro Permanent Magnetic Chuck",
    image: magneticChuck,
    blurb: "Work-holding chuck sized X 1000 mm, Y 600 mm.",
  },
  {
    id: "laser-engraving",
    name: "Meera Laser Engraving Machine",
    image: laserEngraving,
    blurb: "Part marking and traceability engraving on machined components.",
  },
];

export const handlingEquipment = [
  {
    id: "manual-stacker",
    name: "Stobin Manual Stacker",
    image: manualStacker,
    capacity: "1500 Kgs capacity",
  },
  {
    id: "shop-crane",
    name: "Stobin Shop Crane",
    image: shopCrane,
    capacity: "1500 Kgs capacity",
  },
  {
    id: "assembly-crane",
    name: "Assembly Crane",
    image: assemblyCrane,
    capacity: "2000 Kgs (SWL 2 Ton) capacity",
  },
];

export const measuringInstruments = [
  {
    id: "height-gauge",
    name: "INSIZE Digital Height Gauge",
    image: heightGauge,
    detail: "600 mm height",
  },
  {
    id: "vernier-caliper",
    name: "INSIZE Digital Vernier Caliper",
    image: vernierCaliper,
    detail: "150 mm and 300 mm length",
  },
  {
    id: "3d-tester",
    name: "3D Tester",
    image: tester3d,
    detail: "For taking work offsets inside the machine",
  },
  {
    id: "micrometer",
    name: "Micrometer Set",
    image: micrometer,
    detail: "1 mm to 300 mm length",
  },
];
