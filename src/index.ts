import { markdownTable, Options } from "markdown-table";

export const inlineCode = (text: string) => `\`${text}\``;

export const inlineEquation = (text: string) => `$${text}$`;

export const bold = (text: string) => `**${text}**`;

export const italic = (text: string) => `_${text}_`;

export const strikethrough = (text: string) => `~~${text}~~`;

export const underline = (text: string) => `<u>${text}</u>`;

export const link = (text: string, href: string) => `[${text}](${href})`;

export const codeBlock = (text: string, language = "") => `\`\`\`${language}
${text}
\`\`\``;

export const equation = (text: string) => `$$
${text}
$$`;

export const heading = (text: string, level = 1) =>
  `${"#".repeat(level)} ${text}`;

export const quote = (text: string) => `> ${text.replace(/\n/g, "  \n> ")}`;

export const bullet = (text: string, count?: number) =>
  count ? `${count}. ${text}` : `- ${text}`;

export const todo = (text: string, checked: boolean) =>
  checked ? `- [x] ${text}` : `- [ ] ${text}`;

export const image = (alt: string, href: string) =>
  href.startsWith("data:")
    ? `![${alt}](data:image/png;base64,${href.split(",").pop()})`
    : `![${alt}](${href})`;

export const divider = () => `---`;

export const details = (summary: string, details: string) => `<details>
<summary>${summary}</summary>

${details}
</details>`;

export const table = (cells: string[][], options: Options) =>
  markdownTable(cells, options);
