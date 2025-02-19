import { Examples } from './examples/examples';
import { Hero } from './hero/hero';
import { Suspense } from 'react';

type MainContentProps = {
  initialImageId?: string;
};

export function MainContent({ initialImageId }: MainContentProps) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-full max-w-2xl flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">Liquid Logo</h1>
        <p>Happy Apple event day</p>

        <Suspense fallback={<div>Loading...</div>}>
          <Hero initialImageId={initialImageId} />
        </Suspense>

        <p>
          Tips: white or transparent background, any color or black will count as the shape shapes work better than
          detail or text, SVG or high res PNG/JPG, aim for 500x500px at least, 4.5MB or smaller
        </p>

        <Examples />

        <p>
          Paper is on a mission to bring creativity back into design tools
          <br />
          If you're a designer: <a href="https://paper.design">paper.design</a>
          <br />
          If you're a developer: <a href="https://github.com/paper-design/paper">paper shaders</a>
        </p>

        <p>
          <a href="https://x.com/paper">@paper on Twitter/X</a>
        </p>
      </div>
    </div>
  );
}
