/* option.dto.ts */
import {OptionPerkDto} from './option-perk.dto';
import {PriceDto} from "./price.dto";

export interface OptionDto {
  name: string;
  price: PriceDto;
  duration: string;
  perks: OptionPerkDto[];
  sideNote: string;
}
