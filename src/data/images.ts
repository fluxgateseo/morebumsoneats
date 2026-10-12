/**
 * Curated Unsplash photography (free to use under the Unsplash License).
 * Keep every image the site uses here so alt text stays consistent
 * and photos are easy to swap.
 */
export interface SiteImage {
  /** Unsplash photo id, e.g. `photo-1504674900247-0877df9cc836` */
  id: string;
  alt: string;
}

const image = (id: string, alt: string): SiteImage => ({ id: `photo-${id}`, alt });

export const images = {
  steakPlate: image('1504674900247-0877df9cc836', 'Grilled steak plated with fresh herbs and chilli'),
  fineDining: image('1414235077428-338989a2e8c0', 'Elegant plated dish on a candle-lit restaurant table'),
  diningRoom: image('1517248135467-4c7edcad34c4', 'Modern restaurant dining room with warm lighting'),
  industrialCafe: image('1555396273-367ea4eb4db5', 'Busy industrial-style café with an open mezzanine'),
  pizza: image('1565299624946-b28f40a0ae38', 'Freshly baked pizza sliced on a wooden board'),
  pokeBowl: image('1546069901-ba9599a7e63c', 'Colourful salmon poke bowl with fresh vegetables'),
  saladBowl: image('1540189549336-e6e99c3679fe', 'Vibrant salad bowl served with fresh juice'),
  pancakes: image('1567620905732-2d1ec7ab7445', 'Stack of pancakes with syrup being poured'),
  terrace: image('1559339352-11d035aa65de', 'Waterfront restaurant terrace at golden hour'),
  bar: image('1514933651103-005eec06c04b', 'Cosy bar with backlit bottles and a chalkboard menu'),
  chefPrep: image('1551218808-94e220e084d2', 'Chef chopping fresh herbs on a cutting board'),
  sharedTable: image('1466978913421-dad2ebd01d17', 'Friends sharing burgers and fries around a table'),
  chef: image('1577219491135-ce391730fb2c', 'Chef plating a dish under copper pass lights'),
  steakFrites: image('1600891964092-4316c288032e', 'Sliced steak with herb-dusted fries'),
  brunch: image('1482049016688-2d3e1b311543', 'Avocado toast topped with soft boiled eggs'),
  cocktails: image('1551024709-8f23befc6f87', 'Three colourful cocktails lined up on a bar'),
  oldFashioned: image('1470337458703-46ad1756a187', 'Bartender pouring a whisky cocktail over ice'),
  crowdedTable: image('1528605248644-14dd04022da1', 'Group of diners laughing at a long shared table'),
  burger: image('1568901346375-23c9450c58cd', 'Juicy double cheeseburger on a wooden board'),
  woodfiredPizza: image('1513104890138-7c749659a591', 'Wood-fired pizza with cherry tomatoes'),
  dessert: image('1563805042-7684c019e1cb', 'Indulgent chocolate sundae in a glass'),
  coffee: image('1495474472287-4d71bcdd2085', 'Two latte art coffees being shared'),
  burgerBeer: image('1550547660-d9450f859349', 'Burgers served with cold drinks'),
  brunchSpread: image('1424847651672-bf20a4b0982b', 'Brunch spread of waffles and plates seen from above'),
  openKitchen: image('1556910103-1c02745aae4d', 'Two cooks smiling in an open kitchen'),
  portraitA: image('1494790108377-be9c29b29330', 'Portrait of a smiling restaurant owner'),
  portraitB: image('1507003211169-0a1dd7228f2d', 'Portrait of a smiling bar manager'),
  portraitC: image('1438761681033-6461ffad8d80', 'Portrait of a café owner'),
  portraitD: image('1500648767791-00dcc994a43e', 'Portrait of a restaurant general manager'),
} satisfies Record<string, SiteImage>;
