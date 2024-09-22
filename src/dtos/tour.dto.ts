import { OptionDto } from './option.dto';

export interface TourDto {
  name: string;
  options: OptionDto[];
  duration: string;
  price: number;
  priceCurrency: string;
  priceSuffix: string;
  sideNote: string;
}
