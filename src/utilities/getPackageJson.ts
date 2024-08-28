import fs from "fs/promises";
import { PackageJson } from "../types";

export const getPackageJson = async (path: string | undefined) => {
  try {
    const content: PackageJson | undefined = path ? await fs.readFile(path, "utf-8").then((content: any) => JSON.parse(content)) : undefined;

    if (!content) return;

    if (!content.name) {
      return;
    }

    return content;
  } catch {
    return;
  }
};
