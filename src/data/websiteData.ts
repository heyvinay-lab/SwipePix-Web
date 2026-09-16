import websiteDataJson from '../../SWIPEPIX_WEBSITE_DATA.json';
import type { ProductFeature, WorkflowStep, FaqItem, TechItem, RoadmapItem } from '../types';

export const websiteData = {
  ...websiteDataJson,
  features: websiteDataJson.features as ProductFeature[],
  workflow: websiteDataJson.workflow as WorkflowStep[],
  faq: websiteDataJson.faq as FaqItem[],
  technology: websiteDataJson.technology as TechItem[],
  roadmap: websiteDataJson.roadmap as RoadmapItem[],
};
