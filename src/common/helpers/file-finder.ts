import * as fs from "fs";
import * as path from "path";

export class FileFinder {

    // Function to recursively search for files with a specific extension
    static findFilesWithExtension(dir: string, ext: string): string[] {
        let files: string[] = [];

        // Get all files and subdirectories in the current directory
        const entries = fs.readdirSync(dir, { withFileTypes: true });

        // Loop through each entry
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);

            // If it's a directory, recursively call findFilesWithExtension
            if (entry.isDirectory()) {
                files = files.concat(FileFinder.findFilesWithExtension(fullPath, ext));
            } else {
                // If it's a file and has the desired extension, add it to the files array
                if (entry.name.endsWith(ext)) {
                    files.push(fullPath);
                }
            }
        }

        return files;
    }
}
