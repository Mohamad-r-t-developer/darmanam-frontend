export default function isValidNationalCode(input: string): boolean {
  if (!/^\d{10}$/.test(input)) return false;

  const check = +input[9];
  const sum =
    input
      .split("")
      .slice(0, 9)
      .reduce((total, num, index) => total + +num * (10 - index), 0) % 11;

  return (sum < 2 && check === sum) || (sum >= 2 && check === 11 - sum);
}
