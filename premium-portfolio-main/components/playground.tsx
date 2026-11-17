"use client";

import { useState } from "react";
import { ArrowRight, Check, Circle, Play, RotateCcw } from "lucide-react";
import { Section } from "./section";

const steps = ["Source", "Build", "Test", "Deploy"];

export function Playground() {
  const [active, setActive] = useState(0);
  const [running, setRunning] = useState(false);

  function runPipeline() {
    setRunning(true);
    setActive((current) => (current + 1) % (steps.length + 1));
  }

  function reset() {
    setRunning(false);
    setActive(0);
  }

  return (
    <Section id="playground" title="A little playground">
      <div className="playground-shell">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rule px-5 py-4">
          <div>
            <p className="font-display text-sm font-semibold">CI/CD pipeline simulator</p>
            <p className="text-sm text-graphite">A tiny interactive look at a delivery workflow.</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-rule bg-card px-3 py-1 text-xs font-medium">
            <Circle size={8} fill={running && active > 0 ? "currentColor" : "none"} />
            {active === 0 ? "Ready" : active > steps.length ? "Complete" : "Pipeline running"}
          </span>
        </div>
        <div className="grid gap-3 p-5 sm:grid-cols-4">
          {steps.map((step, index) => {
            const complete = active > index + 1;
            const current = active === index + 1;
            return (
              <div key={step} className={`pipeline-step ${complete ? "is-complete" : ""} ${current ? "is-current" : ""}`}>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-rule bg-card">
                  {complete ? <Check size={15} /> : <span className="text-xs font-semibold">{String(index + 1).padStart(2, "0")}</span>}
                </span>
                <span className="mt-3 block font-display text-sm font-semibold">{step}</span>
                <span className="mt-1 block text-xs text-graphite">
                  {["Push code", "Build image", "Run checks", "Ship release"][index]}
                </span>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-rule px-5 py-4">
          <p className="text-xs text-graphite">Demo only — no cloud resources are created.</p>
          <div className="flex gap-2">
            <button type="button" onClick={reset} className="action-button action-button-secondary">
              <RotateCcw size={14} /> Reset
            </button>
            <button type="button" onClick={runPipeline} className="action-button">
              <Play size={14} /> Run next stage <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
