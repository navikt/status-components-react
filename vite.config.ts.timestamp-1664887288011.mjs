// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
var __vite_injected_original_dirname = "/Users/nordahl/status-components-react";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true
    })
  ],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "@navikt/status-components-react",
      fileName: "index"
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbm9yZGFobC9zdGF0dXMtY29tcG9uZW50cy1yZWFjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL25vcmRhaGwvc3RhdHVzLWNvbXBvbmVudHMtcmVhY3Qvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL25vcmRhaGwvc3RhdHVzLWNvbXBvbmVudHMtcmVhY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIGR0cyh7XG4gICAgICBpbnNlcnRUeXBlc0VudHJ5OiB0cnVlLFxuICAgIH0pLFxuICBdLFxuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgLy8gQ291bGQgYWxzbyBiZSBhIGRpY3Rpb25hcnkgb3IgYXJyYXkgb2YgbXVsdGlwbGUgZW50cnkgcG9pbnRzXG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2luZGV4LnRzXCIpLFxuICAgICAgbmFtZTogXCJAbmF2aWt0L3N0YXR1cy1jb21wb25lbnRzLXJlYWN0XCIsXG4gICAgICAvLyB0aGUgcHJvcGVyIGV4dGVuc2lvbnMgd2lsbCBiZSBhZGRlZFxuICAgICAgZmlsZU5hbWU6IFwiaW5kZXhcIixcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIC8vIG1ha2Ugc3VyZSB0byBleHRlcm5hbGl6ZSBkZXBzIHRoYXQgc2hvdWxkbid0IGJlIGJ1bmRsZWRcbiAgICAgIC8vIGludG8geW91ciBsaWJyYXJ5XG4gICAgICBleHRlcm5hbDogW1wicmVhY3RcIl0sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgLy8gUHJvdmlkZSBnbG9iYWwgdmFyaWFibGVzIHRvIHVzZSBpbiB0aGUgVU1EIGJ1aWxkXG4gICAgICAgIC8vIGZvciBleHRlcm5hbGl6ZWQgZGVwc1xuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgcmVhY3Q6IFwiUmVhY3RcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvUyxTQUFTLGVBQWU7QUFDNVQsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sU0FBUztBQUhoQixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixJQUFJO0FBQUEsTUFDRixrQkFBa0I7QUFBQSxJQUNwQixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BRUgsT0FBTyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUN4QyxNQUFNO0FBQUEsTUFFTixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BR2IsVUFBVSxDQUFDLE9BQU87QUFBQSxNQUNsQixRQUFRO0FBQUEsUUFHTixTQUFTO0FBQUEsVUFDUCxPQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
