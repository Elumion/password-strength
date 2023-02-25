import { SectionsStrength } from "../PasswordStrengthSections/index.types";

export function validatePassword(value: string): SectionsStrength {
  if (value.length === 0) return SectionsStrength.EMPTY;
  if (value.length < 8) return SectionsStrength.SHORT;

  //---EASY---

  // symbols only
  if (!!value.match(/^[^A-Za-z0-9]*$/)) return SectionsStrength.EASY;

  // letters only
  if (!!value.match(/^[a-zA-Z]*$/)) return SectionsStrength.EASY;

  // digits only
  if (!!value.match(/^[\d]*$/)) return SectionsStrength.EASY;

  //---MEDIUM---

  // letters-digits
  if (!!value.match(/^[a-zA-Z\d]*$/)) return SectionsStrength.MEDIUM;

  // symbols-digits
  if (
    !value.match(/[a-zA-Z]/) &&
    !!value.match(/[\d]/) &&
    !!value.match(/[^A-Za-z0-9]/)
  )
    return SectionsStrength.MEDIUM;

  // symbols-letters
  if (
    !value.match(/[\d]/) &&
    !!value.match(/[a-zA-Z]/) &&
    !!value.match(/[^A-Za-z0-9]/)
  )
    return SectionsStrength.MEDIUM;

  //---HARD---

  // symbols-letters-digits
  if (
    !!value.match(/[\d]/) &&
    !!value.match(/[a-zA-Z]/) &&
    !!value.match(/[^A-Za-z0-9]/)
  )
    return SectionsStrength.HARD;

  return SectionsStrength.SHORT;
}
