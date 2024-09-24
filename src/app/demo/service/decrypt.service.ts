import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class DecryptService {
  // Replace with the exact key used on the server
  private encryptionKey: string = 'GOLD_FUTURE$^&*@';
  private ivLength = 16;

  constructor() { }

  // Decrypt function for use across the application
  decrypt(encryptedText: string): any {
    try {
      // Split the encrypted text into IV and encrypted data
      const parts = encryptedText.split(':');
      if (parts.length !== 2) {
        throw new Error('Malformed encrypted data: Missing IV or encrypted part');
      }

      const iv = CryptoJS.enc.Hex.parse(parts[0]); // Extract IV
      const encryptedData = parts[1]; // Extract encrypted data

      // Perform AES decryption
      const decrypted = CryptoJS.AES.decrypt(encryptedData, CryptoJS.enc.Utf8.parse(this.encryptionKey), {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      });

      const decryptedString = decrypted.toString(CryptoJS.enc.Utf8);

      if (!decryptedString) {
        throw new Error('Decryption failed: Empty decrypted string');
      }

      // Parse the decrypted string back into JSON (since it was stringified)
      const decryptedData = JSON.parse(decryptedString);

      // Return the object or array
      return decryptedData;
    } catch (error) {
      console.error('Decryption Error:', error.message);
      throw error;
    }
  }
}
