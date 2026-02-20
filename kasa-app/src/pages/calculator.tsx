import React, { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';

interface Preset {
  label: string;
  volume: string;
  percentage: string;
}

// Focused list of popular Western and Korean drink presets
const presets: Preset[] = [
  { label: 'Custom', volume: '', percentage: '' },
  // Western Beers
  { label: '12 oz Light Beer (355 mL, 4.2%)', volume: '355', percentage: '4.2' },
  { label: '12 oz IPA (355 mL, 6%)', volume: '355', percentage: '6' },
  { label: '16 oz Lager (473 mL, 5%)', volume: '473', percentage: '5' },
  // Wines
  { label: '5 oz Wine Glass (150 mL, 12%)', volume: '150', percentage: '12' },
  { label: '750 mL Bottle of Wine (750 mL, 12%)', volume: '750', percentage: '12' },
  // Spirits & Cocktails
  { label: 'Shot of Whiskey (44 mL, 40%)', volume: '44', percentage: '40' },
  { label: 'Shot of Vodka (44 mL, 40%)', volume: '44', percentage: '40' },
  { label: 'Martini Cocktail (150 mL, 30%)', volume: '150', percentage: '30' },
  { label: 'Margarita (150 mL, 13%)', volume: '150', percentage: '13' },
  // Korean Sojus & Makgeolli
  { label: 'Chamisul Fresh Soju (360 mL, 16.9%)', volume: '360', percentage: '16.9' },
  { label: 'Chum-Churum Peach Soju (360 mL, 12%)', volume: '360', percentage: '12' },
  { label: 'Chum-Churum Yogurt Soju (360 mL, 12%)', volume: '360', percentage: '12' },
  { label: 'Strawberry Soju (360 mL, 12%)', volume: '360', percentage: '12' },
  { label: 'Green Grape Soju (360 mL, 12%)', volume: '360', percentage: '12' },
  { label: 'Melon Soju (360 mL, 12%)', volume: '360', percentage: '12' },
  { label: 'Fruit Soju Mix (300 mL, 13%)', volume: '300', percentage: '13' },
  { label: 'Makgeolli (500 mL, 6%)', volume: '500', percentage: '6' },
  // East Asian Spirits
  { label: 'Baijiu (50 mL, 52%)', volume: '50', percentage: '52' },
];


export default function DrinkCalculator() {
  // Track custom inputs
  const [selectedPresetIndex, setSelectedPresetIndex] = useState<number>(0);
  const [volume, setVolume] = useState<string>('');
  const [percentage, setPercentage] = useState<string>('');

  // Log of all drinks added
  const [drinksLog, setDrinksLog] = useState<{ label: string; drinks: number }[]>([]);
  // Remove a drink entry by index
  const removeDrink = (index: number) => {
    setDrinksLog(current => current.filter((_, i) => i !== index));
  };

  // When user picks a preset, update inputs and track index
  const handlePresetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const idx = parseInt(e.target.value, 10);
    const preset = presets[idx];
    setSelectedPresetIndex(idx);
    setVolume(preset.volume);
    setPercentage(preset.percentage);
  };

  // Calculate and add to log
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const volNum = parseFloat(volume);
    const percNum = parseFloat(percentage);
    if (isNaN(volNum) || isNaN(percNum) || volNum <= 0 || percNum <= 0) return;
    const pureAlcohol = volNum * (percNum / 100) * 0.789;
    const drinks = pureAlcohol / 14;
    // Label entry
    const baseLabel = presets[selectedPresetIndex].label;
    const entryLabel = selectedPresetIndex === 0
      ? `Custom: ${volNum} mL @ ${percNum}%` 
      : baseLabel;
    setDrinksLog(current => [...current, { label: entryLabel, drinks }]);
  };

  return (
    <div>
      <main className="pt-24 px-4">
        <section className="kasa-surface p-6 max-w-lg mx-auto my-10">
          <h1 className="mb-6 text-center text-3xl font-black text-blue">Drink Calculator</h1>
          {/* Preset Options */}
          <div className="mb-4">
            <label htmlFor="preset" className="block mb-1 font-semibold">Choose a preset:</label>
            <select
              id="preset"
              onChange={handlePresetChange}
              className="w-full rounded-lg border border-[#2b3467]/20 p-2"
              value={selectedPresetIndex}
            >
              {presets.map((p, idx) => (
                <option key={idx} value={idx}>{p.label}</option>
              ))}
            </select>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Volume Input */}
            <div>
              <label htmlFor="volume" className="block mb-1">Bottle Volume (mL):</label>
              <input
                id="volume"
                type="number"
                value={volume}
                onChange={e => setVolume(e.target.value)}
                className="w-full rounded-lg border border-[#2b3467]/20 p-2"
                placeholder="e.g., 750"
              />
            </div>
            {/* Percentage Input */}
            <div>
              <label htmlFor="percentage" className="block mb-1">Alcohol %:</label>
              <input
                id="percentage"
                type="number"
                value={percentage}
                onChange={e => setPercentage(e.target.value)}
                className="w-full rounded-lg border border-[#2b3467]/20 p-2"
                placeholder="e.g., 13.5"
              />
            </div>
            <Button
              type="submit"
              className="kasa-btn-primary float-right rounded-lg px-4 py-2 text-white"
            >Add Drink</Button>
          </form>
        </section>
        {/* Drink Log and Summary */}
        <section className="kasa-surface max-w-lg mx-auto mb-16 px-8 py-7">
          <h2 className="mb-4 text-center text-xl font-black text-blue">Drink Log</h2>
          {drinksLog.length === 0 ? (
            <p className="text-center text-gray-600">No drinks added yet.</p>
          ) : (
            <ul className="list-disc list-inside space-y-1">
              {drinksLog.map((entry, idx) => (
                <li
                  key={idx}
                  onClick={() => removeDrink(idx)}
                  className="cursor-pointer hover:line-through"
                  title="Click to remove"
                >
                  {entry.label}: {entry.drinks.toFixed(2)} std drinks
                </li>
              ))}
            </ul>
          )}
          {drinksLog.length > 0 && (
            <p className="mt-4 text-center font-bold">
              Total: {drinksLog.reduce((sum, e) => sum + e.drinks, 0).toFixed(2)} std drinks
            </p>
          )}
        </section>
      </main>
    </div>
  );
}
