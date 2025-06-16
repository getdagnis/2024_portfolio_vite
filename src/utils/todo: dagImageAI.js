type ImagePromptOptions = {
  imageUrl: string; // The URL of the original image
  stylePrompt: string; // Instruction, e.g. "Make this more professional"
};

type GeminiImageResponse = {
  responseText: string;
  error?: string;
};

export async function regenerateImageWithAI({
  imageUrl,
  stylePrompt,
}: ImagePromptOptions): Promise<GeminiImageResponse> {
  const apiKey = import.meta.env.OPENROUTER_API_KEY; // Use Vite env variable

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.0-flash-exp:free',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: `Please reinterpret this image in the following style: ${stylePrompt}`,
              },
              {
                type: 'image_url',
                image_url: {
                  url: imageUrl,
                },
              },
            ],
          },
        ],
      }),
    });

    const data = await response.json();

    // Extract model response
    const result = data.choices?.[0]?.message?.content;
    return {
      responseText: result || 'No response received from model.',
    };
  } catch (error: any) {
    return {
      responseText: '',
      error: error.message || 'Unknown error occurred',
    };
  }
}
