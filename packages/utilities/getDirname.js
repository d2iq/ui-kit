import path from "path";
import url from "url";

// ESModules doesn't have `__dirname` and `__filename` defined.
/**
 * @param {string} url get from import.meta.url
 * @returns {__dirname: string, __filename: string}
 */
export default fileUrl => {
  const __filename = url.fileURLToPath(fileUrl);
  const __dirname = path.dirname(__filename);

  return { __dirname, __filename };
};
