/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      colors: {
        beige: "#ede7e3",
        corail: "#b58a81",
        brunclair: "#c8aaa2",
        brunsemiclair: "#e0d1c8",
        brunsable: "#eee6de",
        bruntresclair: "#e8e4db",
        rougeterre: "#975143",
        marron: "#86564d",
        marronfiltre: "#6d3f2f",
        marrontexte: "#7e544b",
        marronfonce: "#3f1a14",
        marronbouton: "#7d534a",
        brique: "#8f4d3f",
        marronrouge: "#4f160c",
        marrondot: "#c4866f",
        rouge: "#992600",
        rougefonce: "#6f4036",
      },
      fontFamily: {
        sans: [""],
      },
      boxShadow: {
        customshadow: "-4px 4px 8px 0 rgba(0,0,0,0.50)",
      },
    },
  },
  plugins: [],
};
