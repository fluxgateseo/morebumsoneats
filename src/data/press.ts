import type { ImageMetadata } from 'astro';
import yahooLife from '@/assets/press/yahoo-life.png';
import msn from '@/assets/press/msn.png';
import timeOut from '@/assets/press/time-out.png';
import foodInstitute from '@/assets/press/the-food-institute.png';
import modernRestaurantManagement from '@/assets/press/modern-restaurant-management.png';
import agfg from '@/assets/press/agfg.png';
import tourismToday from '@/assets/press/tourismtoday.png';
import recommend from '@/assets/press/recommend.png';
import prevue from '@/assets/press/prevue.png';
import karryOn from '@/assets/press/karryon.png';
import tripInfo from '@/assets/press/tripinfo.png';
import newcastleLive from '@/assets/press/newcastle-live.png';
import australianChineseDaily from '@/assets/press/australian-chinese-daily.png';

/** Publications that have featured our team (as listed on seoforestaurants.com). */
export interface PressMention {
  name: string;
  logo: ImageMetadata;
}

export const press: PressMention[] = [
  { name: 'Yahoo Life', logo: yahooLife },
  { name: 'MSN', logo: msn },
  { name: 'Time Out', logo: timeOut },
  { name: 'The Food Institute', logo: foodInstitute },
  { name: 'Modern Restaurant Management', logo: modernRestaurantManagement },
  { name: 'AGFG', logo: agfg },
  { name: 'tourismtoday.gr', logo: tourismToday },
  { name: 'Recommend', logo: recommend },
  { name: 'Prevue Meetings + Incentives', logo: prevue },
  { name: 'KarryOn', logo: karryOn },
  { name: 'TRIPinfo', logo: tripInfo },
  { name: 'Newcastle Live', logo: newcastleLive },
  { name: 'Australian Chinese Daily', logo: australianChineseDaily },
];
