import { createUploadthing, type FileRouter } from 'uploadthing/next';
import  { Authentication } from './useAuthentication';
import { ValidMiddlewareObject } from 'uploadthing/internal/types';

const f = createUploadthing();

const authenticateUser = async (): Promise<ValidMiddlewareObject> => {
    const { isAuthenticated, user } = Authentication();
  
    if (!isAuthenticated) {
      throw new Error('Unauthorized');
    }
    return { user };
  };
  
export const ourFileRouter = {
  subaccountLogo: f({ image: { maxFileSize: '4MB', maxFileCount: 1 } })
    .middleware(authenticateUser) 
    .onUploadComplete(() => {}),
  avatar: f({ image: { maxFileSize: '4MB', maxFileCount: 1 } })
    .middleware(authenticateUser)
    .onUploadComplete(() => {}),
  agencyLogo: f({ image: { maxFileSize: '4MB', maxFileCount: 1 } })
    .middleware(authenticateUser)
    .onUploadComplete(() => {}),
  media: f({ image: { maxFileSize: '4MB', maxFileCount: 1 } })
    .middleware(authenticateUser)
    .onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;


