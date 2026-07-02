export type PracticeAreaInfoCard = {
  title: string;
  description: string;
};

export type PracticeAreaSubsection = {
  title: string;
  paragraphs: string[];
};

export type PracticeAreaSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  subsections?: PracticeAreaSubsection[];
};

export type PracticeAreaStep = {
  title: string;
  description: string;
};

export type PracticeAreaFaq = {
  question: string;
  answer: string;
};

export type PracticeAreaDetail = {
  infoCards: PracticeAreaInfoCard[];
  disclaimer: string;
  sections: PracticeAreaSection[];
  steps?: PracticeAreaStep[];
  faqs?: PracticeAreaFaq[];
  closingNote?: string;
};

export type PracticeArea = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  highlights: string[];
  topics: string[];
  detail: PracticeAreaDetail;
};
