import { defineConfig } from "vite";
export default defineConfig({
  base: "",
  build: {
    rollupOptions: {
      input: [
        "./index.html",
        "./about.html",
        "./browse.html",
        "./login.html",
        "./moviedetails.html",
        "./myaccount.html",
        "./nostalgiahub.html",
        "./signup.html",
        "./subscription.html",
        "./support.html",
      ],
    },
  },
});
