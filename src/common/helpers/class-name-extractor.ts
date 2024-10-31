import * as fs from "fs";

export class ClassNameExtractor {
    // Function to extract class names from a TypeScript file
    static extractClassNames(filePath: string): string[] {
        const content = fs.readFileSync(filePath, 'utf8');
        const classRegex = /class\s+(\w+)\s+/g;
        const classNames: string[] = [];
        let match: RegExpExecArray | null;

        // Extract class names using regular expression
        while ((match = classRegex.exec(content)) !== null) {
            classNames.push(match[1]);
        }

        return classNames;
    }
}
