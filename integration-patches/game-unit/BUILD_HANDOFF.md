YOU-N-I-VERSE Game Unit Integration Patch

Target baseline: You-n-i-verse-browser (1).zip

ADDITIVE CHANGES
- Adds /game-unit route and GameUnit.tsx launch surface.
- Adds Game Unit button to existing HomePage.
- Preserves and exposes the existing GameEngineX, GameAssetStudio, and SimsConverterStudio archives already present in public/modules.
- Adds Creator-Resonance.zip and AIAgentResonance.zip to public/modules as complementary Resonance systems.
- Adds catalog metadata for the two Resonance systems.
- Existing source/modules are not deleted or replaced.

FILES TO OVERLAY
client/src/App.tsx
client/src/pages/HomePage.tsx
client/src/pages/GameUnit.tsx
server/ingestModules.ts
public/modules/Creator-Resonance.zip
public/modules/AIAgentResonance.zip

VALIDATION NOTE
A local TypeScript check was attempted. npm dependency installation did not complete within the execution window, so tsc could not resolve @types/node and vite/client. No source-level TypeScript error was established by that incomplete check.
