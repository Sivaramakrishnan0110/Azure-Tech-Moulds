import heroInstall from "../assets/brand/hero-install.jpg";
import factoryExterior from "../assets/company/factory-exterior.jpg";
import office1 from "../assets/company/office-1.jpg";
import office2 from "../assets/company/office-2.jpg";
import office3 from "../assets/company/office-3.jpg";
import office4 from "../assets/company/office-4.jpg";

import manford from "../assets/machines/manford-vh1100.jpg";
import cvm8k from "../assets/machines/cosmos-cvm800-8k.jpg";
import vl1300 from "../assets/machines/stm-vl1300.jpg";
import cvm12k from "../assets/machines/cosmos-cvm800-12k.jpg";
import vl850 from "../assets/machines/stm-vl850.jpg";
import jyoti from "../assets/machines/jyoti-dx200.jpg";
import ratna from "../assets/machines/ratna-edm-7045.jpg";

import fourthAxis1 from "../assets/equipment/4th-axis-1.jpg";
import powerGrip from "../assets/equipment/power-grip-unit.jpg";
import laserEngraving from "../assets/equipment/laser-engraving.jpg";

export const galleryCategories = [
  {
    id: "infrastructure",
    label: "Infrastructure",
    items: [
      { image: factoryExterior, caption: "Factory building, Sri Venkateswara Industrial Complex" },
      { image: office1, caption: "Engineering office" },
      { image: office2, caption: "Front office and billing counter" },
      { image: office3, caption: "Office entrance" },
      { image: office4, caption: "Programming and planning desks" },
    ],
  },
  {
    id: "machinery",
    label: "Machinery",
    items: [
      { image: heroInstall, caption: "STM VMC installation on the shop floor" },
      { image: manford, caption: "Manford VH 1100 vertical machining centre" },
      { image: cvm8k, caption: "Cosmos CVM 800 vertical machining centre" },
      { image: vl1300, caption: "STM VL1300 vertical machining centre" },
      { image: cvm12k, caption: "Cosmos CVM 800 (12000 RPM) vertical machining centre" },
      { image: vl850, caption: "STM VL 850 vertical machining centre" },
      { image: jyoti, caption: "Jyoti DX 200 CNC turning centre" },
      { image: ratna, caption: "Ratna Sparking 7045 CNC EDM" },
      { image: fourthAxis1, caption: "4th axis hydraulic rotary table" },
      { image: powerGrip, caption: "Power grip tool clamping unit" },
      { image: laserEngraving, caption: "Meera laser engraving machine" },
    ],
  },
];
