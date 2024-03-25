const appwriteConfig = {
  Endpoint: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
  ProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  DatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  CollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  StorageId: String(import.meta.env.VITE_APPWRITE_STORAGE_ID),
};

export default appwriteConfig;
