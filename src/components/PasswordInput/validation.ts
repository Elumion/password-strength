import { SectionsStrength } from "../PasswordStrengthSections/index.types";

export function validatePassword(value: string): SectionsStrength {
  if (value.length === 0) return SectionsStrength.EMPTY;
  if (value.length < 8) return SectionsStrength.SHORT;

  //---EASY---

  // symbols only
  if (!!value.match(/^[^\p{L}\d]*$/gu)) return SectionsStrength.EASY;

  // letters only
  if (!!value.match(/^[\p{L}]*$/gu)) return SectionsStrength.EASY;

  // digits only
  if (!!value.match(/^[\d]*$/gu)) return SectionsStrength.EASY;

  //---MEDIUM---

  // letters-digits
  if (!!value.match(/^[\p{L}\d]*$/gu)) return SectionsStrength.MEDIUM;

  // symbols-digits
  if (
    !value.match(/[\p{L}]/gu) &&
    !!value.match(/[\d]/gu) &&
    !!value.match(/[^\p{L}\d]/gu)
  )
    return SectionsStrength.MEDIUM;

  // symbols-letters
  if (
    !value.match(/[\d]/gu) &&
    !!value.match(/[\p{L}]/gu) &&
    !!value.match(/[^\p{L}\d]/gu)
  )
    return SectionsStrength.MEDIUM;

  //---HARD---

  // symbols-letters-digits
  if (
    !!value.match(/[\d]/gu) &&
    !!value.match(/[\p{L}]/gu) &&
    !!value.match(/[^\p{L}\d]/gu)
  )
    return SectionsStrength.HARD;

  return SectionsStrength.SHORT;
}
