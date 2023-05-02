import { Weapon } from "./weapon.model";

export interface Profile {
  id: number,
  forceAlignment: 'dark' | 'light',
  characterName: string,
  weapon: Weapon
}
