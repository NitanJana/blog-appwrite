import { Client, Databases, Query } from 'appwrite';
import appwriteConfig from '../config/appwriteConfig';

export class DbService {
  client = new Client();
  database;
  constructor() {
    this.client.setEndpoint(appwriteConfig.Endpoint).setProject(appwriteConfig.ProjectId);
    this.database = new Databases(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    console.log(title, slug, content, featuredImage, status, userId);
    try {
      return await this.database.createDocument(appwriteConfig.DatabaseId, appwriteConfig.CollectionId, slug, {
        title,
        content,
        featuredImage,
        status,
        userId,
      });
    } catch (error) {
      console.log('Appwrite service :: createPost :: error', error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.database.updateDocument(appwriteConfig.DatabaseId, appwriteConfig.CollectionId, slug, {
        title,
        content,
        featuredImage,
        status,
      });
    } catch (error) {
      console.log('Appwrite service :: updatePost :: error', error);
    }
  }

  async deletePost(slug) {
    try {
      await this.database.deleteDocument(appwriteConfig.DatabaseId, appwriteConfig.CollectionId, slug);
      return true;
    } catch (error) {
      console.log('Appwrite service :: deletePost :: error', error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.database.getDocument(appwriteConfig.DatabaseId, appwriteConfig.CollectionId, slug);
    } catch (error) {
      console.log('Appwrite service :: getPost :: error', error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal('status', ['active'])]) {
    try {
      return await this.database.listDocuments(appwriteConfig.DatabaseId, appwriteConfig.CollectionId, queries);
    } catch (error) {
      console.log('Appwrite service :: getPosts :: error', error);
      return false;
    }
  }
}

const dbService = new DbService();

export default dbService;
