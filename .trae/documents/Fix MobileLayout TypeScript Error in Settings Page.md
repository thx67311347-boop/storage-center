## Fix MobileLayout TypeScript Error in Settings Page

### Issue
The `MobileLayout` component in `app/settings/page.tsx` is missing required props: `localUsedStorage` and `localTotalStorage`.

### Solution
1. **Add state variables for local storage** in `settings/page.tsx`:
   - Add `localUsedStorage` state (default: 0)
   - Add `localTotalStorage` state (default: 50GB)

2. **Pass the missing props** to the `MobileLayout` component:
   - Add `localUsedStorage={localUsedStorage}`
   - Add `localTotalStorage={localTotalStorage}`

### Files to modify
- `app/settings/page.tsx`

### Expected result
- TypeScript error resolved
- Settings page renders correctly
- Local storage information is properly passed to the layout component