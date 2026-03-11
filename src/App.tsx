/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Predict } from "./components/Predict";
import { Personalize } from "./components/Personalize";
import { Prevent } from "./components/Prevent";
import { Prosper } from "./components/Prosper";
import { Science } from "./components/Science";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Predict />
        <Personalize />
        <Prevent />
        <Prosper />
        <Science />
      </main>
      <Footer />
    </div>
  );
}


