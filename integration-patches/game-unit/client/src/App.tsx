import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserSettingsProvider } from "@/contexts/BrowserSettingsContext";
import HomePage from "@/pages/HomePage";
import YouUniverseBrowser from "@/components/YouUniverseBrowser";
import HumanDesign from "@/pages/HumanDesign";
import GlyphGenerator from "@/components/GlyphGenerator";
import ConsciousnessOrchestrator from "@/components/ConsciousnessOrchestrator";
import TransitWeatherPage from "@/pages/TransitWeatherPage";
import AIResonancePage from "@/pages/AIResonancePage";
import NotFound from "@/pages/not-found";
import GameUnit from "@/pages/GameUnit";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/browser" component={YouUniverseBrowser} />
      <Route path="/human-design" component={HumanDesign} />
      <Route path="/glyph-generator" component={GlyphGenerator} />
      <Route path="/orchestrator" component={ConsciousnessOrchestrator} />
      <Route path="/transit-weather" component={TransitWeatherPage} />
      <Route path="/ai-resonance" component={AIResonancePage} />
      <Route path="/game-unit" component={GameUnit} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserSettingsProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </BrowserSettingsProvider>
    </QueryClientProvider>
  );
}

export default App;
