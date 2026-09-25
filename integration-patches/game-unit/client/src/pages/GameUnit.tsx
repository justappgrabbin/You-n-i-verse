import { Link } from "wouter";
import { Gamepad2, Boxes, RefreshCw, Users, ArrowRight, Package } from "lucide-react";

const parts = [
  { name: "GameEngineX", role: "World + runtime engine", detail: "Existing YOU-N-I-VERSE game engine with GameWorld, GameUI, ConsciousnessAgent, codon visualization, operators, geometry, textures, sound and server/runtime code.", icon: Gamepad2, href: "/modules/GameEngineX_1762709910278.zip" },
  { name: "Game Asset Studio", role: "Creation + asset forge", detail: "Existing asset creation and management environment for building and preparing game material.", icon: Boxes, href: "/modules/GameAssetStudio_1762709910301.zip" },
  { name: "Sims Converter Studio", role: "Conversion + simulation bridge", detail: "Existing converter/studio for Sims game files and assets, retained as its own complementary system.", icon: RefreshCw, href: "/modules/SimsConverterStudio%20(1)_1762710227148.zip" },
];

const resonance = [
  { name: "Creator Resonance", href: "/modules/Creator-Resonance.zip" },
  { name: "AI Agent Resonance", href: "/modules/AIAgentResonance.zip" },
];

export default function GameUnit() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto max-w-6xl px-4 py-8 space-y-8">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">YOU-N-I-VERSE</p>
            <h1 className="text-3xl font-bold mt-1">Game Unit</h1>
            <p className="text-muted-foreground mt-2 max-w-2xl">The existing game systems gathered into one launch point. Each original archive remains intact.</p>
          </div>
          <Link href="/browser"><button className="px-4 py-2 rounded-md border border-border bg-card hover:bg-muted">Back to Browser</button></Link>
        </header>
        <section className="grid md:grid-cols-3 gap-4">
          {parts.map((part, i) => { const Icon = part.icon; return (
            <article key={part.name} className="rounded-xl border border-border bg-card p-5 flex flex-col min-w-0">
              <div className="flex items-center justify-between gap-3"><Icon className="w-6 h-6 text-primary"/><span className="text-xs text-muted-foreground">0{i+1}</span></div>
              <h2 className="text-xl font-semibold mt-5">{part.name}</h2>
              <p className="text-sm font-medium text-primary mt-1">{part.role}</p>
              <p className="text-sm text-muted-foreground mt-3 flex-1">{part.detail}</p>
              <a href={part.href} className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border px-3 py-2 text-sm hover:bg-muted">Open original archive <ArrowRight className="w-4 h-4"/></a>
            </article>
          ); })}
        </section>
        <section className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-3"><Users className="w-6 h-6 text-primary"/><div><h2 className="text-xl font-semibold">Resonance Pair</h2><p className="text-sm text-muted-foreground">Complementary systems kept together, with neither treated as a replacement for the other.</p></div></div>
          <div className="grid sm:grid-cols-2 gap-3 mt-5">
            {resonance.map(item => <a key={item.name} href={item.href} className="min-h-14 rounded-lg border border-border p-4 flex items-center justify-between hover:bg-muted"><span className="flex items-center gap-2"><Package className="w-4 h-4"/>{item.name}</span><ArrowRight className="w-4 h-4"/></a>)}
          </div>
        </section>
        <section className="rounded-xl border border-border p-5">
          <h2 className="font-semibold">Preservation rule</h2>
          <p className="text-sm text-muted-foreground mt-2">This integration adds a shared doorway around the existing projects. The original module archives are preserved unchanged inside public/modules.</p>
        </section>
      </main>
    </div>
  );
}
