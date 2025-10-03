export type PortfolioItem = {
  title: string;
  image: string;
  link: string;
  tags: string[];
};

// TODO: Replace placeholder items with real portfolio entries
export const portfolio: PortfolioItem[] = [
  { title: "Genome UI", image: "/next.svg", link: "#", tags: ["UI", "React"] },
  { title: "QC Dashboard", image: "/vercel.svg", link: "#", tags: ["Analytics"] },
  { title: "AI Notebooks", image: "/globe.svg", link: "#", tags: ["AI", "R&D"] },
];



