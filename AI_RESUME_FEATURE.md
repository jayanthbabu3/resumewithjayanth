# AI-Powered Resume Generation Feature

## Overview

This feature allows users to automatically generate professional resume content using AI (OpenAI GPT-4o-mini) based on their profile and optional job description.

## Features

- ✨ **AI-Powered Content Generation**: Generate complete resume content with one click
- 👤 **Auto-Population**: User profile data (name, email, phone, etc.) automatically populated from Firebase
- 📝 **Job Description Support**: Optional job description input for tailored, targeted resumes
- 🎯 **Profession-Specific**: Content tailored to the selected profession/template
- 👁️ **Preview Before Apply**: Review AI-generated content before applying to resume
- 🔒 **Secure**: API keys stored securely in environment variables, never exposed to frontend

## Setup Instructions

### 1. Get OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Sign up or log in to your account
3. Navigate to **API Keys** section
4. Click **Create new secret key**
5. Copy the API key (starts with `sk-...`)

### 2. Add Environment Variable

#### For Netlify Deployment:

1. Go to your Netlify dashboard
2. Select your site
3. Go to **Site settings** → **Environment variables**
4. Click **Add a variable**
5. Add:
   - **Key**: `OPENAI_API_KEY`
   - **Value**: Your OpenAI API key (e.g., `sk-...`)
6. Click **Save**
7. Redeploy your site for changes to take effect

#### For Local Development:

1. Create a `.env` file in the project root (if it doesn't exist)
2. Add the following line:
   ```
   OPENAI_API_KEY=sk-your-api-key-here
   ```
3. Make sure `.env` is in your `.gitignore` (it should be by default)
4. Restart your development server

### 3. Test the Feature

1. Start the development server:
   ```bash
   npm run dev
   ```

2. For Netlify Functions to work locally, you need to run:
   ```bash
   netlify dev
   ```
   (This will start both the Vite dev server and Netlify Functions)

3. Navigate to any template editor
4. Click the **"Fill with AI"** button (with sparkles icon ✨)
5. Optionally paste a job description
6. Click **"Generate Resume"**
7. Review the generated content
8. Click **"Apply to Resume"** to use it

## Cost Estimation

Using **OpenAI GPT-4o-mini**:
- **Input tokens**: ~$0.15 per 1M tokens
- **Output tokens**: ~$0.60 per 1M tokens
- **Average cost per resume**: $0.01 - $0.03

For 1000 resume generations: ~$10-30

## Alternative AI Providers

If you prefer a different AI provider, you can modify `/netlify/functions/generate-resume.ts`:

### Anthropic Claude 3.5 Haiku
- Cost: ~$0.25/$1.25 per 1M tokens
- Similar quality to GPT-4o-mini
- Install: `npm install @anthropic-ai/sdk`

### Google Gemini
- Cost: Free tier available, then ~$0.35/$1.05 per 1M tokens
- Install: `npm install @google/generative-ai`

## How It Works

1. **User clicks "Fill with AI"** in the Editor
2. **AIResumeDialog opens** with optional job description input
3. **Frontend calls** `/netlify/functions/generate-resume` with:
   - User profile data (from Firebase)
   - Job description (optional)
   - Profession/template info
4. **Netlify Function**:
   - Validates request
   - Calls OpenAI API with structured prompt
   - Returns generated resume data as JSON
5. **Frontend displays preview** of generated content
6. **User reviews and applies** to their resume

## File Structure

```
├── netlify/functions/
│   └── generate-resume.ts          # Serverless function for AI API calls
├── src/
│   ├── components/
│   │   └── AIResumeDialog.tsx      # UI component for AI generation
│   ├── lib/
│   │   └── aiResumeService.ts      # Frontend service layer
│   └── pages/
│       └── Editor.tsx               # Integrated AI button
```

## Security Notes

- ✅ API keys are stored in environment variables (never in code)
- ✅ API calls are made from serverless functions (backend), not frontend
- ✅ CORS is properly configured
- ✅ Request validation and error handling implemented
- ✅ Rate limiting recommended for production (add to Netlify Function)

## Troubleshooting

### "AI service not configured" error
- Make sure `OPENAI_API_KEY` is set in environment variables
- Redeploy your site after adding the environment variable
- For local dev, restart `netlify dev`

### "Network error" or "Failed to fetch"
- Check if Netlify Functions are running (`netlify dev` for local)
- Verify the API endpoint URL is correct
- Check browser console for CORS errors

### "Invalid JSON response from AI"
- This is rare but can happen if AI returns malformed JSON
- The function will retry automatically
- Check Netlify Function logs for details

### High costs
- Monitor your OpenAI usage dashboard
- Implement rate limiting per user
- Consider caching common resume templates
- Set up usage alerts in OpenAI dashboard

## Future Enhancements

- [ ] Add rate limiting per user (prevent abuse)
- [ ] Cache common resume patterns
- [ ] Support for multiple AI providers (user choice)
- [ ] Resume improvement suggestions (not just generation)
- [ ] A/B testing different AI prompts
- [ ] Analytics on AI usage and quality

## Support

For issues or questions:
1. Check Netlify Function logs
2. Check browser console for errors
3. Verify environment variables are set correctly
4. Test with a simple job description first

## License

This feature is part of the Resume Cook application.
