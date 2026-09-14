// types/infoCard.ts
export interface TitledCard {
  title: string;
  description: string;
}

// Semantic aliases - same shape, different domain meaning
export type Value = TitledCard;
export type KeyFeature = TitledCard;