// src/types/express/index.d.ts

// Import the express module to extend its types
import type * as express from 'express';

// Extend the Express namespace
declare global {
  namespace Express {
    // Add custom properties to the Request interface
    interface Request {
      userInfo?: JwtPayload; // Replace `JwtPayload` with your custom type
      // Add other custom properties as needed
    }
  }
}

// If you have a custom payload interface, define it
interface JwtPayload {
  email: string;
  password: string;
  iat: number;
  exp: number;
  // Add other properties as needed
}
