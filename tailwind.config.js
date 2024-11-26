/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "",
        port: "",
        pathname: "/public-images/**",
      },
    ],
  },
  theme: {
    screens: {
      frame: "960px",
      tb: {
        min: "768px",
        max: "1199px",
      },
      sm: {
        max: "767px",
      },
      dt: {
        min: "1200px",
      },
    },
    extend: {
      boxShadow: {
        hero: "1px 2px 0px 0px rgba(255, 255, 255, 1)",
        layoutBorder: `0px 0px 3px 0px rgba(68, 77, 90, 0.80)`,
        header: `1px 0px 2px 0px rgba(68, 77, 90, 0.80)`,
      },
      backgroundImage: {
        hero: "url('/public/heroimage.png')",
        exclamationIcon: "url('../public/exclamation-circle.svg')",
      },
      width: {
        level: "13%",
        range: "21%",
        title: "21%",
        description: "45%",
      },
      colors: {
        tableHeader: '#F4F6FA',
        slate: {
          100: "#B0D2DF",
          700: "#004F6B",
        },
        solitude: "#EAECF0",
        lightGray: "#A9AFB7",
        aliceWhite: "#C2CDD2",
        pastelFlyKite: "#C0D4F5",
        offblack: "#1E1E1E",
        midnightHaze: "#475467",
        mediumGrayTextColor: "#66768C",
        darkTextColor: '#202020',
        primary: {
          base: "#2D71DF",
          normal: "#245AB2",
          dark: "#1B4486",
          darkActive: "#143364",
          darker: "#10284E",
        },
        darkMode: {
          primarySofter: "#3A475C",
        },
        borderColor: "#C2CDD2",
        secondary: "#E6EEFB",
        aliceBlue: "#ECF2FB",
        grayWhisper: "#EEEEEE",
        gray: {
          light: "#C6C6C6",
          dark: "#444444",
          base: "#CBD2E0",
          baseBackground: "#EDF0F7",
          mid: "#929292",
          med: "#777777",
          strong: "#3F4A59",
          stronger: "#202020",
          blue: "#9CA3AF"
        },
        red: {
          dark: "#9D0D26",
        },
        status: {
          success: "#169E86",
          error: "#861B28",
          warning: "#AB34D6",
          errorBackground: "#FFE8EB",
          errorModal: "#FF4158",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-background": "url('/styles/img/hero-pattern.svg')",
      },
    },
  },
  plugins: [],
};
