export interface ColorPalette {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  description: string;
}

export interface FontSuggestion {
  name: string;
  category: string;
  googleFontUrl: string;
  usage: string;
  pairing?: string;
}

export interface LayoutSuggestion {
  name: string;
  description: string;
  bestFor: string;
  structure: string;
}

export interface CodeSnippet {
  language: string;
  code: string;
  description: string;
  filename?: string;
}

export interface ThemeSuggestion {
  name: string;
  style: string;
  mood: string;
  description: string;
  keywords: string[];
}

export interface DesignResponse {
  themes: ThemeSuggestion[];
  colorPalettes: ColorPalette[];
  fonts: FontSuggestion[];
  layouts: LayoutSuggestion[];
  codeSnippets: CodeSnippet[];
  overview: string;
}

export interface BrandInput {
  description: string;
  industry?: string;
  targetAudience?: string;
  style?: string;
  additionalNotes?: string;
}
