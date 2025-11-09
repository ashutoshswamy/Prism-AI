import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';
import type { BrandInput, DesignResponse } from '@/types/design';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const body: BrandInput = await request.json();
    
    if (!body.description) {
      return NextResponse.json(
        { error: 'Brand description is required' },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'Gemini API key is not configured' },
        { status: 500 }
      );
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const prompt = `You are an expert web designer and developer. Based on the following brand/project description, provide comprehensive design recommendations.

Brand Description: ${body.description}
${body.industry ? `Industry: ${body.industry}` : ''}
${body.targetAudience ? `Target Audience: ${body.targetAudience}` : ''}
${body.style ? `Preferred Style: ${body.style}` : ''}
${body.additionalNotes ? `Additional Notes: ${body.additionalNotes}` : ''}

Please provide a detailed response in the following JSON format (ensure valid JSON):

{
  "overview": "A brief overview of the design recommendations (2-3 sentences)",
  "themes": [
    {
      "name": "Theme name",
      "style": "modern/classic/minimal/bold/etc",
      "mood": "professional/playful/elegant/etc",
      "description": "Why this theme fits",
      "keywords": ["keyword1", "keyword2", "keyword3"]
    }
  ],
  "colorPalettes": [
    {
      "name": "Palette name",
      "primary": "#hexcode",
      "secondary": "#hexcode",
      "accent": "#hexcode",
      "background": "#hexcode",
      "text": "#hexcode",
      "description": "Why these colors work together"
    }
  ],
  "fonts": [
    {
      "name": "Font name",
      "category": "serif/sans-serif/display/monospace",
      "googleFontUrl": "https://fonts.google.com/specimen/FontName",
      "usage": "headings/body/accents",
      "pairing": "Suggested pairing font"
    }
  ],
  "layouts": [
    {
      "name": "Layout name",
      "description": "Layout description",
      "bestFor": "What this layout is best for",
      "structure": "Brief structure description"
    }
  ],
  "codeSnippets": [
    {
      "language": "html/css/javascript/typescript/tsx",
      "code": "Complete, working code snippet",
      "description": "What this code does",
      "filename": "suggested-filename.ext"
    }
  ]
}

Provide at least 2-3 options for each category. For code snippets, include:
1. A complete HTML/CSS hero section component
2. A Tailwind CSS card component
3. A color palette CSS variables snippet

Make the code production-ready and modern. Use actual valid hex codes for colors.`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    // Extract JSON from the response
    let jsonMatch = text.match(/\{[\s\S]*\}/);
    let designData: DesignResponse;

    if (jsonMatch) {
      designData = JSON.parse(jsonMatch[0]);
    } else {
      throw new Error('Could not parse JSON from response');
    }

    return NextResponse.json(designData);
  } catch (error) {
    console.error('Error generating design:', error);
    return NextResponse.json(
      { error: 'Failed to generate design suggestions. Please try again.' },
      { status: 500 }
    );
  }
}
