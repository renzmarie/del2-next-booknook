export function shortenText(string: string, limit: number) {
  if (string.length > limit) {
    const shortenedText = string.substring(0, limit).trim() + "...";
    return shortenedText;
  } else {
    return string;
  }
}
