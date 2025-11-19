import { GoogleGenAI, Type } from "@google/genai";
import { ProjectScope } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateProjectScope = async (projectIdea: string): Promise<ProjectScope | null> => {
  if (!apiKey) {
    console.error("API Key is missing");
    throw new Error("API Key is missing");
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Act as a senior project manager. Create a structured project scope for a client who wants: "${projectIdea}".`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: "A professional project title" },
            overview: { type: Type.STRING, description: "Executive summary of the project (max 50 words)" },
            deliverables: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "List of key deliverables (e.g., 'Source Code', 'Design Assets')"
            },
            skillsRequired: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of 3-5 top skills needed (e.g., 'React', 'Figma')"
            },
            estimatedBudget: { type: Type.STRING, description: "Estimated market price range (e.g., '$2000 - $4000')" },
            timeline: { type: Type.STRING, description: "Estimated duration (e.g., '4-6 weeks')" }
          },
          required: ["title", "overview", "deliverables", "skillsRequired", "estimatedBudget", "timeline"]
        }
      }
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text) as ProjectScope;
  } catch (error) {
    console.error("Error generating project scope:", error);
    return null;
  }
};

export const getChatResponse = async (message: string): Promise<string> => {
  if (!apiKey) return "I'm sorry, I can't connect to the AI right now.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: "You are a professional support agent for WorkSphere, a premium freelance marketplace. You help clients define their needs and freelancers find work. Be professional, concise, and helpful.",
      }
    });
    return response.text || "I couldn't generate a response.";
  } catch (error) {
    console.error("Chat error:", error);
    return "Sorry, I encountered an error.";
  }
};