import type { MantineColorsTuple } from "@mantine/core";

const mixWeights = [0.92, 0.82, 0.66, 0.48, 0.24, 0, -0.14, -0.28, -0.42, -0.56];

const toChannels = (hex: string) => [1, 3, 5].map((start) => Number.parseInt(hex.slice(start, start + 2), 16));

const mixChannel = (channel: number, weight: number) => Math.round(weight >= 0 ? channel + (255 - channel) * weight : channel * (1 + weight));

const toHex = (channels: number[]) => `#${channels.map((channel) => channel.toString(16).padStart(2, "0")).join("")}`;

const buildColorScale = (hex: string): MantineColorsTuple => {
  const channels = toChannels(hex);
  const [first, ...rest] = mixWeights.map((weight) => toHex(channels.map((channel) => mixChannel(channel, weight))));
  return [first, ...rest] as unknown as MantineColorsTuple;
};

export default buildColorScale;
