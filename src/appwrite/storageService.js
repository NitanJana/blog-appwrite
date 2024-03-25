import { Client, Storage, ID } from 'appwrite';
import appwriteConfig from '../config/appwriteConfig';
export class StorageService {
  client = new Client();
  storage;

  constructor() {
    this.client.setEndpoint(appwriteConfig.Endpoint).setProject(appwriteConfig.ProjectId);
    this.storage = new Storage(this.client);
  }

  async uploadFile(file) {
    try {
      return await this.storage.createFile(appwriteConfig.StorageId, ID.unique(), file);
    } catch (error) {
      console.log('Appwrite service :: uploadFile :: error', error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(appwriteConfig.StorageId, fileId);
      return true;
    } catch (error) {
      console.log('Appwrite service :: deleteFile :: error', error);
      return false;
    }
  }

  getFilePreview(fileId) {
    try {
      return this.storage.getFilePreview(appwriteConfig.StorageId, fileId);
    } catch (error) {
      console.log('Appwrite service :: getFilePreview :: error', error);
      return false;
    }
  }
}

const storageService = new StorageService();

export default storageService;
