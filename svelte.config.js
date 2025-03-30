import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter(),
    paths: {
      base: "/taskmanager", // ตั้งค่า base path ตาม GitHub Pages
    }
  }
};
// SvelteKit configuration file
// This file exports a configuration object for SvelteKit.
// It specifies the adapter to use for building the application and sets the base path for deployment.
// The adapter is set to 'adapter-static', which is suitable for static site generation.
// The base path is set to '/taskmanager', which is the repository name on GitHub.
// This configuration is used to build and deploy the SvelteKit application on GitHub Pages.
// The 'adapter-static' adapter is used for generating static sites.
// The 'paths' property is used to set the base path for the application.