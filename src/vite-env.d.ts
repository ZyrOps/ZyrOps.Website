/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HRMS_BASE_URL: string
  readonly VITE_HRMS_TENANT_ID: string
  readonly VITE_HRMS_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
