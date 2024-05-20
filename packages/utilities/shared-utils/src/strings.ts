const dashCaseRegex = /[A-Z]/g;
export function dashCase(string: string) {
  return string.replace(dashCaseRegex, (match) => `-${match.toLowerCase()}`);
}
