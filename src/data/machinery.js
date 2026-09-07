import manford from "../assets/machines/manford-vh1100.jpg";
import cvm8k from "../assets/machines/cosmos-cvm800-8k.jpg";
import vl1300 from "../assets/machines/stm-vl1300.jpg";
import cvm12k from "../assets/machines/cosmos-cvm800-12k.jpg";
import vl850 from "../assets/machines/stm-vl850.jpg";
import jyoti from "../assets/machines/jyoti-dx200.jpg";
import ratna from "../assets/machines/ratna-edm-7045.jpg";

export const vmcMachines = [
  {
    id: "manford-vh1100",
    category: "Vertical Machining Center",
    series: "Die Mould Series",
    name: "Manford VH 1100",
    image: manford,
    specs: [
      { label: "Table Size", value: "X = 1300 mm, Y = 700 mm" },
      { label: "Travel", value: "X = 1100 mm, Y = 700 mm, Z = 710 mm" },
      { label: "Spindle", value: "Max 8000 RPM" },
      { label: "Control", value: "Mitsubishi M80" },
      { label: "Max Load", value: "1500 Kgs" },
      { label: "Holder", value: "BT40" },
    ],
  },
  {
    id: "cosmos-cvm800-8k",
    category: "Vertical Machining Center",
    series: "Die Mould Series",
    name: "Cosmos CVM 800",
    image: cvm8k,
    specs: [
      { label: "Table Size", value: "X = 1000 mm, Y = 500 mm" },
      { label: "Travel", value: "X = 800 mm, Y = 500 mm, Z = 500 mm" },
      { label: "Spindle", value: "Max 8000 RPM" },
      { label: "Control", value: "Mitsubishi M80AVU" },
      { label: "Max Load", value: "600 Kgs" },
      { label: "Holder", value: "BT40" },
    ],
  },
  {
    id: "stm-vl1300",
    category: "Vertical Machining Center",
    series: "Die Mould Series",
    name: "STM VL1300",
    image: vl1300,
    specs: [
      { label: "Table Size", value: "X = 1300 mm, Y = 1000 mm" },
      { label: "Travel", value: "X = 1300 mm, Y = 1050 mm" },
      { label: "Spindle", value: "Max 8000 RPM" },
      { label: "Control", value: "Mitsubishi M80AVU" },
      { label: "Max Load", value: "1500 Kgs" },
      { label: "Holder", value: "BT50" },
    ],
  },
  {
    id: "cosmos-cvm800-12k",
    category: "Vertical Machining Center",
    series: "Die Mould Series",
    name: "Cosmos CVM 800 (12000 RPM)",
    image: cvm12k,
    specs: [
      { label: "Table Size", value: "X = 1000 mm, Y = 500 mm" },
      { label: "Travel", value: "X = 800 mm, Y = 500 mm, Z = 500 mm" },
      { label: "Spindle RPM", value: "Max 12000 RPM" },
      { label: "Control", value: "Mitsubishi M80AVU" },
      { label: "Max Load", value: "600 Kgs" },
      { label: "Spindle", value: "BBT40 (Direct Drive)" },
    ],
  },
  {
    id: "stm-vl850",
    category: "Vertical Machining Center",
    series: "Die Mould Series",
    name: "STM VL 850",
    image: vl850,
    specs: [
      { label: "Table Size", value: "X = 850 mm, Y = 510 mm" },
      { label: "Travel", value: "X = 850 mm, Y = 510 mm, Z = 510 mm" },
      { label: "Spindle RPM", value: "Max 12000 RPM" },
      { label: "Control", value: "Mitsubishi M80AVU" },
      { label: "Max Load", value: "800 Kgs" },
      { label: "Spindle", value: "BBT40 (Belt Drive)" },
    ],
  },
];

export const turningMachine = {
  id: "jyoti-dx200",
  category: "CNC Turning",
  series: "Die Mould Series",
  name: "Jyoti DX 200",
  image: jyoti,
  specs: [
    { label: "Maximum Turning Dia", value: "\u00d8 365 mm" },
    { label: "Travel", value: "X = 175\u2013200 mm, Z = 300\u2013700 mm" },
    { label: "Spindle RPM", value: "Max 4000 RPM" },
    { label: "Control", value: "Siemens" },
    { label: "Spindle Bore Capacity", value: "55 mm to 44 mm" },
    { label: "Tool Size", value: "25 x 25 mm" },
  ],
};

export const edmMachine = {
  id: "ratna-sparking-7045",
  category: "CNC Sparking (EDM)",
  series: "Die Mould Series",
  name: "Ratna Sparking 7045 CNC EDM",
  image: ratna,
  specs: [
    { label: "Table Size", value: "X = 700 mm, Y = 450 mm" },
    { label: "Travel", value: "X = 450 mm, Y = 350 mm, Z = 250 mm" },
    { label: "Spindle RPM", value: "Max 12000 RPM" },
    { label: "Max Load", value: "800 Kgs" },
    { label: "Tank Dimensions", value: "X = 1100 mm, Y = 700 mm, Z = 400 mm" },
  ],
};

export const rotaryTable = {
  id: "4th-axis-gxa320h",
  category: "4th Axis Rotary Table",
  name: "Model \u2013 GXA 320H",
  specs: [
    { label: "Work Table Dia", value: "Dia 12\u2013550" },
    { label: "Clamp", value: "Hydraulic" },
    { label: "Accuracy", value: "0.01 mm" },
    { label: "Repeatability", value: "15 Sec" },
    { label: "Max Load", value: "200 / 440 Kgs" },
    { label: "Cutting Torque", value: "780 / 574.86 Nm / ft-lbs" },
  ],
};

export const powerGripUnit = {
  id: "power-grip-unit",
  category: "Tool Clamping",
  name: "Power Grip Tool Clamping Unit",
  specs: [
    { label: "Make", value: "Rego-Fix" },
    { label: "Clamp", value: "Hydraulic" },
    { label: "Accuracy", value: "0.005 mm Tool Runout" },
    { label: "Type", value: "PGU 9500 E" },
    { label: "Power", value: "230V / 50Hz" },
    { label: "Dimension", value: "555 x 454 x 648 mm" },
  ],
};

export const allPrecisionMachines = [
  ...vmcMachines,
  turningMachine,
  edmMachine,
];
