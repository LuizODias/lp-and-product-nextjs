import { ReactNode } from "react";

export interface modelTypes {
  id: string;
  url: string;
  cardText: string,
  title: string;
  subtitle: string;
  description: string;
  author: string;
  version: string;
  category: string;
  sections: Section;
}

export interface crendentialTypes {
  name: string;
  clientID: string;
  clientSecret: string;
  scores: string[];
  status: boolean;
  description: string;
  isNew?: boolean
}

export interface primitiveCredential {
  name: string;
  client_id: string;
  client_secret: string;
  tenant: string;
  status: boolean;
  description: string;
  scores: string[];
}

interface rendered {
  rendered: string;
}

export interface postTypes {
  id: string;
  link: string;
  title: rendered;
  excerpt: rendered;
}

export interface Section {
  scoreHighlights?: ScoreHighlights;
  scoreDescription: ScoreDescription;
  scoreSolution: ScoreSolution;
  scoreResults: ScoreResults;
  scoreBenefits: ScoreBenefits;
  scoreDifferentials: ScoreDifferentials;
  scorePublic: ScorePublic;
  scoreCost: ScoreCost;
}

export interface ScoreHighlights {
  highlights: string[];
}

export interface ScoreDescription {
  scoreFunction: string;
  scoreInputs: string;
  datas: string;
}

export interface ScoreSolution {
  solution: string;
}
export interface ScoreResults {
  results: string;
  resultsRating: string[][];
}

export interface Rating {
  ratingLevel: string;
  ratingRange: string;
  ratingTitle: string;
  ratingDescription: string;
}

export interface ScorePublic {
  public: string;
}

export interface ScoreBenefits {
  benefits: string[];
}

export interface ScoreDifferentials {
  differentials: string[];
}

export interface ScoreCost {
  cost: string;
  costRanges: string[][];
}

export interface OptionsType {
  label: ReactNode;
  value: string;
}

export interface TabsInterface {
  title: string;
  sectionID: string;
  active: boolean;
}
