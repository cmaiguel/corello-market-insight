export interface ManufacturingImage {
  src: string;
  title: string;
  caption: string;
  insight: string;
  whyItMatters: string;
  category: "traveler" | "floor" | "documents" | "knowledge" | "systems";
}

export const manufacturingImages: ManufacturingImage[] = [
  {
    src: "/manufacturing-reality/paper-stacks-desk.jpeg",
    title: "The Paper Backlog",
    caption: "A Mueller Coatings employee works through stacks of paper travelers.",
    insight: "Every stack is a job. Every job has context that exists only on paper.",
    whyItMatters: "When something goes wrong, you search through physical stacks. There is no query. There is no search. There is only memory.",
    category: "traveler",
  },
  {
    src: "/manufacturing-reality/traveler-clipboard.jpeg",
    title: "Live Paper Traveler",
    caption: "An active R&S production traveler clipped to a rack on the shop floor.",
    insight: "This document tracks the job through pre-treatment, basecoat, bake, metalize, topcoat, and unload — all by hand.",
    whyItMatters: "This traveler contains production instructions, quality data, and timing records that exist in no software system.",
    category: "traveler",
  },
  {
    src: "/manufacturing-reality/paper-traveler-form.jpeg",
    title: "UV Line Traveler Form",
    caption: "Blank paper traveler for a UV coating line — customer name, truck #, shift, traveler # — all filled by hand.",
    insight: "This template captures six production stages. Every field is filled manually, every shift.",
    whyItMatters: "Thousands of these forms are generated annually per facility. None of that data is machine-readable.",
    category: "traveler",
  },
  {
    src: "/manufacturing-reality/metalizing-shot-log.jpeg",
    title: "Metalizing Shot Log",
    caption: "Handwritten production log tracking cycle recipes, traveler numbers, and shift data for an automated coater.",
    insight: "This log records which recipe ran on which traveler, at what time, by whom — all in a physical binder.",
    whyItMatters: "Quality traceability, process optimization, and defect root cause analysis are all blocked by this format.",
    category: "documents",
  },
  {
    src: "/manufacturing-reality/shop-whiteboard.jpeg",
    title: "Equipment Status Board",
    caption: "Real-time equipment status tracked with markers and magnets on a whiteboard.",
    insight: "This whiteboard is the production team's live operations dashboard. It updates manually, every shift.",
    whyItMatters: "Real-time floor visibility requires a human to walk to this board and read it. No API. No integration. No history.",
    category: "floor",
  },
  {
    src: "/manufacturing-reality/troubleshooting-guide.jpeg",
    title: "Machine Troubleshooting Guide",
    caption: "UV Topcoat Line trouble-shooting guide posted directly on the machine — Rev A, 12/15/22.",
    insight: "Operational knowledge about this specific machine exists only as a laminated printout.",
    whyItMatters: "When operators turn over, this knowledge doesn't transfer. A new hire reads the document cold, without context.",
    category: "knowledge",
  },
  {
    src: "/manufacturing-reality/shop-floor-assembly.jpeg",
    title: "Shop Floor Operations",
    caption: "Operators assembling parts at production tables in a high-mix coating facility.",
    insight: "Each operator at this table carries knowledge about what's being processed, how, and why.",
    whyItMatters: "When this shift ends, that operational context walks out the door with them.",
    category: "floor",
  },
  {
    src: "/manufacturing-reality/factory-floor-overhead.jpeg",
    title: "Production Floor at Scale",
    caption: "Overhead view of a high-mix, low-volume production facility during active operation.",
    insight: "Multiple production lines, multiple job types, multiple operators — coordinated by memory and paper.",
    whyItMatters: "Scaling this operation requires more people with more knowledge. AI cannot help without structured data.",
    category: "floor",
  },
  {
    src: "/manufacturing-reality/customer-discovery.jpeg",
    title: "Mapping the Knowledge Gap",
    caption: "A customer session: goals, processes, and operational gaps documented on whiteboards during Corello discovery.",
    insight: "The whiteboard shows goals like 'Core Processes By Dept Done' and 'Automation — Gaugewin Done' — captured in a session, not a system.",
    whyItMatters: "This is the operational intelligence of a business. It lives on a whiteboard. It disappears when erased.",
    category: "knowledge",
  },
  {
    src: "/manufacturing-reality/corello-at-customer.jpeg",
    title: "Corello at a Customer Site",
    caption: "Corello live at Mueller Coatings, alongside whiteboards full of process notes, goals, and operational gaps.",
    insight: "The wall behind this screen is the actual knowledge base of the business — handwritten, unstructured, invisible to any software.",
    whyItMatters: "This is what customer discovery looks like. Corello's job is to make this knowledge operational.",
    category: "systems",
  },
];
