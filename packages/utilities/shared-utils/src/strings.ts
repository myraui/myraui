const dashCaseRegex = /[A-Z]/g;
export function dashCase(string: string) {
  return string.replace(dashCaseRegex, (match) => `-${match.toLowerCase()}`).replace(/(^-)/, '');
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
