/* tour.dto.ts  */
import { OptionDto } from './option.dto';

export interface TourDto {
  name: string;
  imageUrl: string;
  description: string;
  options: OptionDto[];
  sideNote: string;
}
