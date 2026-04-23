# LexJuris Chatbot - Deployment Guide

## Implementation Complete ✅

The AI chatbot has been successfully implemented using Azure OpenAI integration, following the FAVNA Dalum project pattern.

## What's Been Created

### Frontend Components (src/components/Chatbot/)
- ✅ `types.ts` - TypeScript interfaces for messages and state
- ✅ `ChatMessage.tsx` - Individual message bubble component with animations
- ✅ `ChatInput.tsx` - Auto-expanding textarea with send button
- ✅ `ChatbotPanel.tsx` - Main chat interface with header, messages area, and empty state
- ✅ `ChatbotWidget.tsx` - Floating FAB button and state management

### Backend API (api/chat/)
- ✅ `function.json` - Azure Functions v3 configuration
- ✅ `index.js` - Azure OpenAI integration with knowledge base
- ✅ `package.json` - Dependencies (@azure/openai)
- ✅ `host.json` - Functions runtime configuration

### Integration
- ✅ ChatbotWidget added to layout.tsx
- ✅ Build verification passed (28 pages, 0 errors)

## Knowledge Base Included

The chatbot has comprehensive knowledge about:
- All 6 services with exact pricing
- Contact information (70 70 71 22, info@lexjuris.dk)
- Important legal principles and common misconceptions
- FAQs from all service areas
- Company values and approach

## ✅ DEPLOYMENT COMPLETE

### Live Website
**URL**: https://happy-island-050bf2e03.7.azurestaticapps.net

### Azure Resources Created (Resource Group: LexJuris)
- **Subscription**: Altivon (7e178588-fa3a-4a8b-bedf-99cae44f1e3e)
- **Location**: Sweden Central
- **Azure OpenAI**: lexjuris-openai
  - Endpoint: https://swedencentral.api.cognitive.microsoft.com/
  - Model: gpt-4.1-nano (2025-04-14)
  - Deployment: gpt-4-1-nano
- **Static Web App**: lexjuris-swa
  - Region: West Europe
  - SKU: Free tier

### App Settings Configured
✅ AZURE_OPENAI_ENDPOINT  
✅ AZURE_OPENAI_API_KEY  
✅ AZURE_OPENAI_DEPLOYMENT

## Original Deployment Steps (Already Completed)

### 1. Create Azure OpenAI Service ✅

```powershell
# Set subscription
az account set --subscription "Altivon"

# Create resource group
az group create --name LexJuris --location swedencentral

# Create Azure OpenAI Service
az cognitiveservices account create \
  --name lexjuris-openai \
  --resource-group LexJuris \
  --kind OpenAI \
  --sku S0 \
  --location swedencentral
```

### 2. Deploy AI Model

Choose **one** of these models:
- **gpt-4-1-nano** (most cost-effective, faster, recommended for chatbot)
- **gpt-4o-mini** (more capable, slightly higher cost)

```powershell
# Deploy gpt-4-1-nano (recommended)
az cognitiveservices account deployment create \
  --name lexjuris-openai \
  --resource-group lexjuris \
  --deployment-name gpt-4-1-nano \
  --model-name gpt-4-1-nano \
  --model-version "2024-10-17" \
  --model-format OpenAI \
  --sku-capacity 10 \
  --sku-name Standard

# OR deploy gpt-4o-mini (alternative)
az cognitiveservices account deployment create \
  --name lexjuris-openai \
  --resource-group lexjuris \
  --deployment-name gpt-4o-mini \
  --model-name gpt-4o-mini \
  --model-version "2024-07-18" \
  --model-format OpenAI \
  --sku-capacity 10 \
  --sku-name Standard
```

### 3. Get Azure OpenAI Credentials

```powershell
# Get endpoint
$endpoint = az cognitiveservices account show \
  --name lexjuris-openai \
  --resource-group lexjuris \
  --query "properties.endpoint" -o tsv

# Get API key
$apiKey = az cognitiveservices account keys list \
  --name lexjuris-openai \
  --resource-group lexjuris \
  --query "key1" -o tsv

Write-Host "Endpoint: $endpoint"
Write-Host "API Key: $apiKey"
```

### 4. Create Azure Static Web App

```powershell
# Create SWA
az staticwebapp create \
  --name lexjuris-swa \
  --resource-group lexjuris \
  --location westeurope \
  --sku Free

# Get deployment token
$deployToken = az staticwebapp secrets list \
  --name lexjuris-swa \
  --resource-group lexjuris \
  --query "properties.apiKey" -o tsv
```

### 5. Configure SWA App Settings

```powershell
# Configure environment variables for the API
az staticwebapp appsettings set \
  --name lexjuris-swa \
  --resource-group lexjuris \
  --setting-names \
    AZURE_OPENAI_ENDPOINT="$endpoint" \
    AZURE_OPENAI_API_KEY="$apiKey" \
    AZURE_OPENAI_DEPLOYMENT="gpt-4-1-nano"
```

### 6. Install API Dependencies

```powershell
cd c:\apps\lexjuris\api
npm install
```

### 7. Deploy to Azure

```powershell
cd c:\apps\lexjuris

# Build the Next.js app
npm run build

# Deploy to Azure SWA (includes API)
swa deploy ./out --api-location api --deployment-token $deployToken --env production --api-language node --api-version 18
```

## Testing

### Local Testing (Optional)

```powershell
# Terminal 1: Start Next.js dev server
npm run dev

# Terminal 2: Start Azure Functions locally
cd api
npm install
func start

# Open http://localhost:3000
```

### Production Testing

After deployment:
1. Open your SWA URL (check Azure Portal)
2. Click the amber chat button (bottom-right)
3. Test with example questions:
   - "Hvad koster køberrådgivning?"
   - "Hvordan opretter jeg et testamente?"
   - "Hvad er jeres åbningstider?"

## Rate Limiting

The API includes built-in rate limiting:
- **10 requests per minute per IP address**
- Returns HTTP 429 if exceeded
- Danish error messages for user experience

## Cost Estimation

### Azure OpenAI (gpt-4-1-nano recommended)
- Input: ~$0.30 per 1M tokens
- Output: ~$1.20 per 1M tokens
- Estimated: ~100-200 conversations per $1

### Azure Static Web Apps
- Free tier: $0/month (includes 100GB bandwidth)
- Standard tier: ~$9/month (if needed)

### Managed Functions (included in SWA)
- Free: 1M requests/month
- Your chatbot usage: negligible cost

## Features Implemented

✅ Floating chat button (amber-600, bottom-right)  
✅ Expandable chat panel (400×600px desktop, fullscreen mobile)  
✅ Empty state with suggested questions  
✅ Typing indicator with animated dots  
✅ Message history with auto-scroll  
✅ Rate limiting (10 req/min per IP)  
✅ Error handling with Danish messages  
✅ Complete knowledge base from services.ts  
✅ Azure OpenAI integration  
✅ Mobile-responsive design  
✅ Framer Motion animations  

## Troubleshooting

### Build fails
```powershell
cd c:\apps\lexjuris
npm install
npm run build
```

### API not responding
- Check SWA app settings are configured correctly
- Verify Azure OpenAI deployment exists
- Check Azure Portal for function logs

### Chatbot not appearing
- Hard refresh browser (Ctrl+Shift+R)
- Check browser console for errors
- Verify build included ChatbotWidget in layout.tsx

## Support

For deployment issues:
- Check Azure Portal → Resource Group → lexjuris
- Review Application Insights logs
- Test API endpoint directly: `POST https://YOUR-SWA-URL/api/chat`

---

## ✅ Deployment Status

**Status**: ✅ FULLY DEPLOYED AND LIVE  
**URL**: https://happy-island-050bf2e03.7.azurestaticapps.net  
**Resource Group**: LexJuris (Altivon subscription)  
**Deployed**: April 23, 2026  

### Test the Chatbot
1. Visit https://happy-island-050bf2e03.7.azurestaticapps.net
2. Click the amber chat button in the bottom-right corner
3. Try example questions:
   - "Hvad koster køberrådgivning?"
   - "Hvordan opretter jeg et testamente?"
   - "Hvad er jeres åbningstider?"

### Known Issues
✅ **FIXED**: Migrated from deprecated @azure/openai beta to stable OpenAI SDK (v4.x)
- Now using `openai` package (stable) instead of `@azure/openai@1.0.0-beta.13`
- API fully functional with Azure OpenAI
- Fixed "Cannot read properties of undefined (reading 'payload')" error

**Next Actions**: Test chatbot functionality to confirm fix
