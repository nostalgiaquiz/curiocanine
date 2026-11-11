// Activity library for the Dog Enrichment Planner.
// Add or edit activities here. Keep descriptions general and safety-minded.

export type Kind = 'sniff' | 'food' | 'chew' | 'training' | 'movement' | 'calm';
export type Energy = 'low' | 'medium' | 'high';
export type Stage = 'puppy' | 'adult' | 'senior';
export type Space = 'small' | 'medium' | 'large';

export interface Activity {
  id: string;
  title: string;
  kind: Kind;
  minutes: number;
  energy: Energy[];
  stages: Stage[];
  space: Space[]; // the spaces where this activity works
  how: string;
  safety: string;
}

const all3: Space[] = ['small', 'medium', 'large'];
const allE: Energy[] = ['low', 'medium', 'high'];
const allS: Stage[] = ['puppy', 'adult', 'senior'];

export const activities: Activity[] = [
  { id: 'scatter', title: 'Scatter feeding', kind: 'food', minutes: 10, energy: allE, stages: allS, space: all3,
    how: 'Scatter a portion of your dog’s regular food on a clean floor, mat or lawn and let your dog sniff it out.',
    safety: 'Use part of the normal daily food so total intake stays the same.' },
  { id: 'snuffle', title: 'Snuffle mat meal', kind: 'food', minutes: 10, energy: allE, stages: allS, space: all3,
    how: 'Hide kibble or small treats in a snuffle mat and let your dog work the food out.',
    safety: 'Supervise so the mat is not chewed or swallowed.' },
  { id: 'muffin', title: 'Muffin tin puzzle', kind: 'food', minutes: 10, energy: ['medium', 'high'], stages: ['adult', 'puppy'], space: all3,
    how: 'Put treats in a muffin tin, cover some cups with tennis balls or toys, and let your dog figure out how to get them.',
    safety: 'Use balls big enough that they cannot be swallowed, and supervise.' },
  { id: 'findit', title: 'Find it', kind: 'sniff', minutes: 10, energy: allE, stages: allS, space: all3,
    how: 'Toss a treat on the floor and say “find it.” Gradually hide treats in easy spots around the room.',
    safety: 'Pick up any leftover treats afterwards.' },
  { id: 'hideseek', title: 'Hide and seek', kind: 'sniff', minutes: 10, energy: ['medium', 'high'], stages: ['adult', 'puppy'], space: ['medium', 'large'],
    how: 'Ask your dog to wait, hide somewhere easy, then call them. Reward when they find you.',
    safety: 'Keep hiding places simple and safe, and avoid slippery floors.' },
  { id: 'sniffwalk', title: 'Sniff-focused walk', kind: 'sniff', minutes: 15, energy: allE, stages: allS, space: ['medium', 'large'],
    how: 'On a regular walk, let your dog choose where to sniff and slow down instead of walking at your pace.',
    safety: 'Keep your dog on a lead where required and away from hazards.' },
  { id: 'trail', title: 'Treat trail', kind: 'sniff', minutes: 10, energy: allE, stages: allS, space: all3,
    how: 'Lay a short line of tiny treats that ends at a bigger reward, then let your dog follow it.',
    safety: 'Do not use plants, areas with pesticides, or places with litter.' },
  { id: 'cups', title: 'Three cups game', kind: 'food', minutes: 5, energy: allE, stages: ['adult', 'puppy', 'senior'], space: all3,
    how: 'Hide a treat under one of three cups and let your dog nose the right one. Start with the cups far apart.',
    safety: 'Use light plastic or paper cups, and keep it short and fun.' },
  { id: 'towel', title: 'Towel roll-up', kind: 'food', minutes: 5, energy: allE, stages: allS, space: all3,
    how: 'Put treats on a towel, roll it up loosely, and let your dog unroll it.',
    safety: 'Take the towel away if your dog tries to chew or swallow it.' },
  { id: 'lick', title: 'Lick mat', kind: 'calm', minutes: 15, energy: allE, stages: allS, space: all3,
    how: 'Spread a dog-safe food on a lick mat. Licking is often calming.',
    safety: 'Check that the food is safe for dogs, with no xylitol, and count it in the daily food amount.' },
  { id: 'chew', title: 'Chew time', kind: 'chew', minutes: 15, energy: allE, stages: allS, space: all3,
    how: 'Offer a chew that suits your dog’s size and age, in a quiet spot.',
    safety: 'Always supervise, remove small leftover pieces, and ask your vet which chews suit your dog.' },
  { id: 'mat', title: 'Settle on a mat', kind: 'calm', minutes: 5, energy: allE, stages: allS, space: all3,
    how: 'Reward your dog for lying on a mat, then slowly build up the time with occasional treats.',
    safety: 'Keep it relaxed. Never force a dog to stay on the mat.' },
  { id: 'name', title: 'Name and focus game', kind: 'training', minutes: 5, energy: allE, stages: allS, space: all3,
    how: 'Say your dog’s name in a happy voice. When they look at you, reward right away. Repeat a few times.',
    safety: 'Keep sessions short and end on a success.' },
  { id: 'target', title: 'Hand target', kind: 'training', minutes: 5, energy: allE, stages: allS, space: all3,
    how: 'Hold out a flat hand. Reward your dog for touching it with their nose. Move your hand to build the game.',
    safety: 'Use gentle movements and tiny treats.' },
  { id: 'newtrick', title: 'Learn a simple trick', kind: 'training', minutes: 10, energy: ['medium', 'high'], stages: ['adult', 'puppy'], space: all3,
    how: 'Pick one easy trick such as spin or paw, and reward small steps toward it.',
    safety: 'Avoid jumping or twisting moves for puppies and dogs with joint problems.' },
  { id: 'gentletrick', title: 'Gentle trick practice', kind: 'training', minutes: 5, energy: ['low', 'medium'], stages: ['senior', 'adult'], space: all3,
    how: 'Practice a low-effort skill like touch, chin rest or “look.” Reward with small, soft treats.',
    safety: 'Skip any move that seems uncomfortable and ask your vet about limits.' },
  { id: 'tug', title: 'Tug with rules', kind: 'movement', minutes: 10, energy: ['medium', 'high'], stages: ['adult'], space: ['medium', 'large'],
    how: 'Play tug with a proper toy. Pause often and ask for a “drop it,” then restart the game as a reward.',
    safety: 'Pull gently and level, not up or sideways, and stop if your dog’s mouth or neck seem sore.' },
  { id: 'fetch', title: 'Short retrieve game', kind: 'movement', minutes: 10, energy: ['medium', 'high'], stages: ['adult'], space: ['large'],
    how: 'Throw a toy a short distance on grass or soft ground and reward your dog for bringing it back.',
    safety: 'Keep it short, avoid hot weather, and do not throw sticks.' },
  { id: 'boxes', title: 'Cardboard box forage', kind: 'chew', minutes: 10, energy: ['medium', 'high'], stages: ['adult', 'puppy'], space: ['medium', 'large'],
    how: 'Put treats in an open cardboard box or a few paper bags and let your dog rummage.',
    safety: 'Remove staples, tape and plastic, and supervise so nothing is swallowed.' },
  { id: 'sniffnew', title: 'New smell sampler', kind: 'sniff', minutes: 10, energy: allE, stages: allS, space: all3,
    how: 'Show your dog a few dog-safe new smells, like a clean herb sprig or a cardboard tube, one at a time.',
    safety: 'Skip essential oils and anything toxic to dogs. Let your dog walk away at any time.' },
];
