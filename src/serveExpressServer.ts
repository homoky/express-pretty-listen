import { packageDirectory } from "pkg-dir";
import type { Express } from "express";
import { getPackageJson } from "utilities/getPackageJson";
import Table from "cli-table3";

type ServeExpressServerArgs = {
  server: Express;
  host?: string;
  port: number;
};

export const serveExpressServer = async ({ port, host, server }: ServeExpressServerArgs) => {
  const closestPackageJsonFilePath = await packageDirectory().then((route) => (route ? route + "/package.json" : undefined));

  const packageJsonContent = await getPackageJson(closestPackageJsonFilePath);

  const table = new Table();

  if (packageJsonContent?.name) {
    table.push(["Package", packageJsonContent.name]);
  }

  table.push(["Server", `${host || "http://localhost"}:${port}`]);

  server.listen(port, () => {
    console.log(table.toString());
  });
};
