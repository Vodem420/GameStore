import { defineConfig, presetIcons } from "unocss";
import presetWebFonts from "@unocss/preset-web-fonts";

export default defineConfig({
  presets: [
    presetIcons({
      scale: 1.4,
      prefix: "i-",
      extraProperties: {
        display: "inline-block",
      },
      customizations: {
        customize(props) {
          props.width = "1.6rem";
          props.height = "1.6rem";
          return props;
        },
      },
      warn: true,
    }),
    presetWebFonts({
      provider: "google",
      fonts: {
        montserrat: [
          {
            name: "Montserrat",
            weights: ["400", "500", "600", "700"],
            italic: true,
          },
          {
            name: "sans-serif",
            provider: "none",
          },
        ],
      },
    }),
  ],
});
