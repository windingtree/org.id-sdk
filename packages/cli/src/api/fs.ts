import fs from 'fs';
import path from 'path';

// Reads file
export const read = (
  basePath: string,
  filePath: string,
  isJson = false
): Promise<string | object> => new Promise((resolve, reject) => {

  fs.readFile(
    path.resolve(basePath, filePath),
    {
      encoding: 'utf8',
      flag: 'r'
    },
    (error, data) => {
      if (error) {
        return reject(error);
      }

      data = data.trim();

      if (isJson) {
        // Trying to parse the payload
        try {
          data = JSON.parse(data);
        } catch (error) {
          throw new Error(`Unable to parse from the payload as JSON by path ${filePath}`);
        }
      }

      resolve(data);
    }
  );
});

// Writes file
export const write = (
  basePath: string,
  filePath: string,
  fileContent: string
): Promise<string> => new Promise((resolve, reject) => {

  const savedFilePath = path.resolve(basePath, filePath);

  fs.writeFile(
    savedFilePath,
    fileContent,
    {
      encoding: 'utf8',
      flag: 'w'
    },
    error => {
      if (error) {
        return reject(error);
      }
      resolve(savedFilePath);
    }
  );
});
